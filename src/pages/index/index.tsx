import Taro from '@tarojs/taro'
import React, { useEffect } from 'react'
import { View, Button, Text, LivePlayer } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less'

import NavBar from '../../components/navbar'
import MenuList from '../../components/menulist/menulist'

function Index({store}) {
  let systemInfo = Taro.systemInfo;

  const menuList = [
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
    {label: "远程云拍", onClick: ()=> {console.log("远程云拍")}, imgName: "camera"},
  ];

  useEffect(() => {
  })

  return (
    <div className='index'>
      <NavBar title="车车安"/>

      <div className="content" style={{height: `${systemInfo.contentHeight}px`}}>
        <div className="video">
          <LivePlayer id="videoPlayer" src="http://ivi.bupt.edu.cn/hls/cctv11.m3u8" mode="live" autoplay/>
        </div>

        <div className="list">
          <MenuList menuList={menuList}/>
        </div>
      </div>
    </div>
  );
}

export default inject('store')(observer(Index));
