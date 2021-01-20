// pages/index/index.js
const movie_api = require("../../api/movie")
const { func } = require("../../module")

Page({

  /**
   * 页面的初始数据
   */

  /**
   * movie: {
   *   poster: string, 
   *   title: string,
   *   cate: string, //三个以内
   *   director: string,
   *   performer: string,
   *   rating_num: float
   * }
   */
  data: {
    nowplaying_movie_list: [],
    upcoming_movie_list: [],
    selected_tab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({nowplaying_movie_list: movie_api.get_nowplaying_movie()})
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

  select_tab: function(e) {
    console.log(e)
    let index = e.currentTarget.dataset['index']
    this.setData({selected_tab: parseInt(index)})
  }
})