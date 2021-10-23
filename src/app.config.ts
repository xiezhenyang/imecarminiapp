export default {
  pages: [
    'pages/index/index',
    'pages/my/my',
  ],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: "#fff"
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: "首页"
      },
      {
        pagePath: 'pages/my/my',
        text: '我的'
      }
    ]
  }
}
