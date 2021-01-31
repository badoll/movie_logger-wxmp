// pages/search/search.js

const movie_api = require("../../api/movie")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    searchText: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let list = this.data.movieList
    let list2 = movie_api.get_movie_by_title(this.data.searchText)
    this.setData({
      movieList: list.concat(list2)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onInput: function (event) {
    //TODO 暂时不做实时查询
    // this.onSearchMovieByTitle(event.detail.value)
  },

  onSearch: function (event) {
    this.setData({
      searchText: event.detail.value
    })
    this.onSearchMovieByTitle(event.detail.value)
  },

  onSearchMovieByTitle: function (title) {
    this.setData({
      movieList: movie_api.get_movie_by_title(title)
    })
  },
})