// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.init_navbar_size();
    // 登录
    wx.login({
      success: res => {
        // TODO
        // 发送 res.code 到服务器换取 openId, sessionKey, unionId

        // this.globalData.userInfo.user_id = getUserID()
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // console.log(res)
              if (this.globalData.user_info) {
                this.globalData.user_info.info = res.userInfo
              } else {
                this.globalData.user_info = {
                  info: res.userInfo
                }
              }
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
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
    console.log(systemInfo)
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
    user_info: null // {info:{}, user_id:{}}
  }
})