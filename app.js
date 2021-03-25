// app.js
const user_api = require("api/user")
App({
  onLaunch() {
    this.init_navbar_size();
    // 登录
    wx.login({
      success: res => {
        user_api.set_user_info(res.code) //set user_id
      }
    })
  },
  init_navbar_size: function () {
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    that.globalData.screen_size.nav_bar_height = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    that.globalData.screen_size.menu_right = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.screen_size.menu_left = menuButtonInfo.left;
    that.globalData.screen_size.menu_bottom = menuButtonInfo.top - systemInfo.statusBarHeight;
    that.globalData.screen_size.menu_height = menuButtonInfo.height
    that.globalData.screen_size.left_border = systemInfo.screenWidth * 0.05;
    console.log(that.globalData)
  },
  globalData: {
    screen_size: {
      left_border: 0,
      nav_bar_height: 0, // 导航栏高度
      menu_right: 0, // 胶囊距右方间距（方保持左、右间距一致）
      menu_left: 0, //
      menu_bottom: 0, // 胶囊距底部间距（保持底部间距一致）
      menu_height: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致
    },
    user_info: {}, // {info: {}, id: 0, like_list: []}
  }
})