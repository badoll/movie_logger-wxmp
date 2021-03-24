// pages/index/index.js
const app = getApp()
const movie_api = require("../../api/movie")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    nowplaying_movie_list: [],
    upcoming_movie_list: [],
    selected_tab: 0,
    pageNum: 1,
    numPerPage: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.set_nowplaying_movie()
    this.set_upcoming_movie()
    // console.log(app.globalData.user_info)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onSelectTab: function (e) {
    let index = e.currentTarget.dataset['index']
    this.setData({
      selected_tab: parseInt(index),
      pageNum: 1
    })
    // 回滚到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0,
      })
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this
    let chart = that.data.selected_tab == 0 ? "nowplaying" : "upcoming"
    let pageNum = that.data.pageNum + 1
    let offset = (pageNum - 1) * that.data.numPerPage
    let oldList
    if (chart == "nowplaying") {
      oldList = that.data.nowplaying_movie_list
    } else {
      oldList = that.data.upcoming_movie_list
    }
    movie_api.get_movie_list_by_chart(chart, that.data.numPerPage, offset).then(newList => {
      if (chart == "nowplaying") {
        that.setData({
          nowplaying_movie_list: oldList.concat(newList),
          pageNum: pageNum
        })
      } else {
        that.setData({
          upcoming_movie_list: oldList.concat(newList),
          pageNum: pageNum
        })
      }
    }).catch(resp => {
      console.log(`get ${chart} movie(limit=10,offset=${offset}) error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // set_nowplaying_movie 设置正在上映电影
  // 先拉取前十个
  set_nowplaying_movie: function () {
    let that = this
    movie_api.get_movie_list_by_chart("nowplaying", that.data.numPerPage, 0).then(list => {
      that.setData({
        nowplaying_movie_list: list
      })
    }).catch(resp => {
      console.log(`get nowplaying movie error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // set_upcoming_movie 设置即将上映电影
  // 先拉取前十个
  set_upcoming_movie: function () {
    let that = this
    movie_api.get_movie_list_by_chart("upcoming", that.data.numPerPage, 0).then(list => {
      that.setData({
        upcoming_movie_list: list
      })
    }).catch(resp => {
      console.log(`get upcoming movie error, resp: ${JSON.stringify(resp)}`)
    })
  }
})