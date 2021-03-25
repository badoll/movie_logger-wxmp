// pages/movie/movie.js
const movie_api = require("../../api/movie")
const user_api = require("../../api/user")
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    detail_tab: ["简介", "详细信息"],
    current_tab: 0,
    intro_ellipsis: true,
    recommend: [],
    user_like: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.set_like_status(options.movie_id)
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

  set_movie_by_id: function (movie_id) {
    let that = this
    movie_api.get_movie_by_id(movie_id).then(m => {
      that.setData({
        movie: m
      })
      // console.log(that.data.movie)
    }).catch(resp => {
      console.log(`get movie(${movie_id}) error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // get_recommend 电影相关推荐
  set_recommend: function (movie_id) {
    let that = this
    movie_api.get_recommend_by_movie(movie_id).then(list => {
      that.setData({
        recommend: list
      })
    }).catch(resp => {
      console.log(`movie(${movie_id}) get recommend movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // set_like_status 拉取用户喜欢状态
  set_like_status: function (movie_id) {
    let like_list = app.globalData.user_info.like_list
    // 判断电影是否在用户喜欢列表中
    if (like_list && like_list.find(like_id => like_id == movie_id)) {
      this.setData({
        user_like: true
      })
    }
  },

  // onLike 用户喜欢或取消喜欢
  onLike: function () {
    let like_status = !this.data.user_like
    let movie_id = this.data.movie.id
    let user_id = app.globalData.user_info.id
    if (user_id) { //判断是否已经从服务端拉取到了id
      // 异步更新数据库中喜欢状态
      user_api.like(user_id, movie_id, like_status)
    }
    // 同步更新前端喜欢状态
    let like_list = app.globalData.user_info.like_list
    if (like_list) { //判断是否已经从服务端拉取到了like_list
      let index = like_list.indexOf(movie_id)
      // 添加或删除喜欢的电影
      if (like_status && index == -1) {
        like_list.unshift(movie_id)
      } else if (!like_status && index >= 0) {
        like_list.splice(index, 1)
      }
    }
    this.setData({
      user_like: like_status
    })
  }

})