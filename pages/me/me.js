// pages/me/me.js
const app = getApp()
const movie_api = require("../../api/movie")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "../../assets/img/icon.jpg",
    like_list: [],
    pageNum: 1,
    numPerPage: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.user_info.info) {
      this.setData({
        avatar: app.globalData.user_info.info.avatar_url
      })
    }
    this.set_like_list()
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
    let that = this
    let user_id = app.globalData.user_info.id
    let pageNum = that.data.pageNum + 1
    let offset = (pageNum - 1) * that.data.numPerPage
    let oldList = that.data.like_list
    movie_api.get_user_like_movie(user_id, that.data.numPerPage, offset).then(newList => {
      that.setData({
        like_list: oldList.concat(newList),
        pageNum: pageNum
      })
    }).catch(resp => {
      console.log(`get user(${user_id}) like list error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // 先拉取前十个
  set_like_list: function () {
    let user_id = app.globalData.user_info.id
    let that = this
    movie_api.get_user_like_movie(user_id, that.data.numPerPage, 0).then(list => {
      that.setData({
        like_list: list
      })
    }).catch(resp => {
      console.log(`get user(${user_id}) like list error, resp: ${JSON.stringify(resp)}`)
    })
  },
})