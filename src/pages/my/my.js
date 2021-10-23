import React, {useEffect} from 'react'
import { useReady, useDidShow, useDidHide, usePullDownRefresh } from "@tarojs/taro"
import './my.less'

import NavBar from '../../components/navbar'

function My(props) {
  useEffect(() => {

  })

  useReady(() => {

  })

  useDidShow(() => {

  })

  useDidHide(() => {

  })

  usePullDownRefresh(() => {

  })

  return (
    <div className="my">
      <NavBar title="我的"/>
    </div>
  )
}

export default My;