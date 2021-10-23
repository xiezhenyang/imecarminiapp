import React, { useEffect, useState } from 'react'
import Taro, { useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.less'

function NavBar(props) {
  const systemInfo = Taro.systemInfo;
  const [showBack, setShowBack] = useState(true);
  const { title } = props;
  let pagesLength = Taro.getCurrentPages().length;

  useEffect(() => {
    if(pagesLength == 1) {
      setShowBack(false);
    }
  }, [])

  function goBackPage() {
    if(pagesLength >= 2) {
      Taro.navigateBack({
        delta: 1
      })
    }
  }

  return (
    <div className="nav-box">
      <div className="status-bar" style={`height: ${systemInfo.statusBarHeight}px`}/>
      <div className="navbar" style={{height: `${systemInfo.navBarHeight}px`, lineHeight: `${systemInfo.navBarHeight}px`}}>
        {showBack && 
          <AtIcon value='chevron-left' size='26' color="#000" onClick={goBackPage}></AtIcon>
        }

        <p style={!showBack && {marginLeft: "10px"}}>{title}</p>
      </div>
    </div>
  );
}

export default NavBar;