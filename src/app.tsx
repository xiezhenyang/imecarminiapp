import React, { useEffect } from 'react'
import { Provider } from 'mobx-react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import globalData from './store/counter'
import Taro from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss' //taro-ui 导入全局样式，后面则可以直接使用taro-ui

//全局样式
import './app.less'

const store = {
  globalData
}

function getSystemInfo() {
  let systemInfo = Taro.getSystemInfoSync() || {
    model: '',
    system: ''
  };

  let ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
  let rect;

  try {
    //获取胶囊的上下间距
    rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null;

    rect = null;
    if (rect == null) {
      throw 'getMenuButtonBoundingClientRect error';
    }

    //取值为0的情况 有可能width不为0 top为0的情况
    if (!rect.width || !rect.top || !rect.left || !rect.height) {
      throw 'getMenuButtonBoundingClientRect error';
    }
  } catch (err) {
    let gap; //胶囊按钮的上下间距 使导航内容居中
    let width = 96; //胶囊的宽度

    if (systemInfo.platform === 'android') {
      gap = 8;
      width = 96;
    }
    else if (systemInfo.platform == 'devtools') {
      if (ios) {
        gap = 5.5; //开发工具中的ios手机
      } else {
        gap = 7.5; //开发工具中的android和其他手机
      }
    }
    else {
      gap = 4;
      width = 88;
    }

    if (!systemInfo.statusBarHeight) {
      //开启wifi的情况下修复statusBarHeight的值获取不到
      systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
    }

    rect = {
      //获取不到胶囊信息需要自定义一个
      bottom: systemInfo.statusBarHeight + gap + 32,
      height: 32,
      left: systemInfo.windowWidth - width - 10,
      right: systemInfo.windowWidth - 10,
      top: systemInfo.statusBarHeight + gap,
      width: width,
    };
  }

  let navBarHeight = '';
  if (!systemInfo.statusBarHeight) {
    //开启wifi和打电话下
    systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
    navBarHeight = (function () {
      let gap = rect.top - systemInfo.statusBarHeight;
      return 2 * gap + rect.height - 3;
    })();
  }
  else {
    navBarHeight = (function () {
      let gap = rect.top - systemInfo.statusBarHeight;
      return 2 * gap + rect.height - 3;
    })();
  }
  systemInfo.navBarHeight = navBarHeight;
  systemInfo.contentHeight = systemInfo.windowHeight - navBarHeight - systemInfo.statusBarHeight;
  systemInfo.capsulePosition = rect;
  systemInfo.ios = ios;

  return systemInfo;
}

const App = ({ children }) => {

  useEffect(() => {
  })

  useDidShow(() => {
    Taro.systemInfo = getSystemInfo(); //将系统信息保存到Taro全局变量
  })

  useDidHide(() => {
  })

  // children 就是要渲染的页面
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App;
