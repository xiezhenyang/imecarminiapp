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
        text: "้ฆ้กต"
      },
      {
        pagePath: 'pages/my/my',
        text: 'ๆ็'
      }
    ]
  }
}
