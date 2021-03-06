// pages/recommend/recommend.js
const app = getApp()
const movie_api = require("../../api/movie")
const user_api = require("../../api/user")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: [],
    weeklytop: [],
    newrelease: [],
    animation: '',
    page_num: 1, // refreash_times = page_num - 1
    recom_per_page: 6, //单次推荐个数
    selecting_inter: false, //是否正在选择兴趣类型
    // rotateIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.set_recommend()
    this.set_newrelease()
    this.set_weeklytop()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this._check_new_user()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // set_recommend 今日推荐
  set_recommend: function () {
    let that = this
    let user_id = app.globalData.user_info.id
    movie_api.get_recommend_by_user(user_id, that.data.page_num, that.data.recom_per_page).then(list => {
      that.setData({
        recommend: list
      })
    }).catch(resp => {
      console.log(`user(${user_id}) get recommend movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // refreash_recommend 刷新推荐
  refreash_recommend: function () {
    this.setData({
      page_num: this.data.page_num + 1
    })
    this.set_recommend()
    this.refreash_once_anime()
    // console.log(this.data.recommend)
  },

  // refreash_once_anime 点击刷新旋转动画
  refreash_once_anime: function () {
    let times = this.data.page_num //先增加page_num再旋转 times需要-1
    let animation = wx.createAnimation({
      delay: 0,
      timingFunction: 'linear'
    })
    this.setData({
      animation: animation.rotate(360 * (times - 1)).step().export(),
    })
  },

  // 未返回数据时刷新图标一直旋转，暂时不用
  refreash_anime: function () {
    this.timeInterval = setInterval(function () {
      this.data.rotateIndex = this.data.rotateIndex + 1;
      this.animation.rotate(360 * (this.data.rotateIndex)).step()
      this.setData({
        animation: this.animation.export()
      })
    }.bind(this), 500)
  },

  // 停止旋转
  stop_refresh: function () {
    if (this.timeInterval > 0) {
      clearInterval(this.timeInterval)
      this.timeInterval = 0
    }
  },

  // set_newrelease_movie 新片榜
  set_newrelease: function () {
    let that = this
    movie_api.get_movie_list_by_chart("newrelease").then(list => {
      that.setData({
        newrelease: list
      })
    }).catch(resp => {
      console.log(`get newrelease movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // set_weeklytop_movie 一周口碑榜
  set_weeklytop: function () {
    let that = this
    movie_api.get_movie_list_by_chart("weeklytop").then(list => {
      that.setData({
        weeklytop: list
      })
    }).catch(resp => {
      console.log(`get weeklytop movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // on_confirm_inter 监听确认兴趣类型的事件
  on_confirm_inter: function (e) {
    let user_id = app.globalData.user_info.id
    if (user_id) {
      user_api.set_inter_field(user_id, e.detail.inter_list)
    }
    this.set_recommend()
    this.setData({
      selecting_inter: false
    })
  },

  // _check_new_user 判断用户是否有选择过兴趣类型
  _check_new_user: function () {
    let that = this
    let user_id = app.globalData.user_info.id
    if (!user_id) {
      return
    }
    user_api.is_new_user(user_id).then(is_new => {
      if (is_new) {
        that.setData({
          selecting_inter: true
        })
      }
    }).catch(res => {
      console.log(`check new user(${user_id}) error, res: ${JSON.stringify(res)}`)
    })
  }

})