// pages/movie/movie.js
const movie_api = require("../../api/movie")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    detail_tab: ["简介", "详细信息"],
    current_tab: 0,
    intro_ellipsis: true,
    recommend_movie_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movie: movie_api.get_movie_by_id(options.movie_id),
      recommend_movie_list: movie_api.get_recommend_movie_list_by_movie(options.movie_id),
    })
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

  /**
   * 切换detail_tab
   */
  switch_detail_tab: function (e) {
    this.setData({
      current_tab: e.currentTarget.dataset.index
    })
  },
  /**
   *
   */
  switch_intro_ellipsis: function (e) {
    this.setData({
      intro_ellipsis: !this.data.intro_ellipsis
    })
  },

  /**
   * 根据图片原尺寸设置等比例宽度（高度一定）
   */
  set_photos_size: function (e) {
    let m = this.data.movie
    let width = e.detail.width
    let height = e.detail.height
    let index = e.currentTarget.dataset.index
    let x = width / height * 300 //计算出300rpx高度下的等比例宽度
    m.photos[index].width = x
    this.setData({
      movie: m
    })
  }
})