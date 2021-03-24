// pages/recommend/recommend.js
const movie_api = require("../../api/movie")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: [],
    weeklytop: [],
    newrelease: []
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
    let user_info = getApp().globalData.user_info
    let user_id = "null"
    if (user_info) {
      user_id = user_info.open_id
    }
    movie_api.get_recommend_by_user(user_id).then(list => {
      that.setData({
        recommend: list
      })
    }).catch(resp => {
      console.log(`user(${user_id}) get recommend movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // refreash_recommend 刷新推荐
  refreash_recommend: function () {
    this.set_recommend()
    // console.log(this.data.recommend)
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
  }
})