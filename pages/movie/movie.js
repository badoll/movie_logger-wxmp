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
    recommend: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.set_movie_by_id(options.movie_id)
    this.set_recommend(options.movie_id)
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
  },

  set_movie_by_id: function (douban_id) {
    let that = this
    movie_api.get_movie_by_id(douban_id).then(m => {
      that.setData({
        movie: m
      })
      // console.log(that.data.movie)
    }).catch(resp => {
      console.log(`get movie(${douban_id}) error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // get_recommend 电影相关推荐
  set_recommend: function (douban_id) {
    let that = this
    movie_api.get_recommend_by_movie(douban_id).then(list => {
      that.setData({
        recommend: list
      })
    }).catch(resp => {
      console.log(`movie(${douban_id}) get recommend movie error, resp: ${JSON.stringify(resp)}`)
    })
  }
})