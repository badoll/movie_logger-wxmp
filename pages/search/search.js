// pages/search/search.js
const movie_api = require("../../api/movie")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    searchText: "",
    pageNum: 1,
    numPerPage: 10,
    filter: {}, // 过滤tag
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this
    let title = that.data.searchText
    let pageNum = that.data.pageNum + 1
    let offset = (pageNum - 1) * that.data.numPerPage
    let filter = that.data.filter
    movie_api.search_movie(title, filter, that.data.numPerPage, offset).then(newList => {
      let oldList = that.data.movieList
      that.setData({
        movieList: oldList.concat(newList),
        pageNum: pageNum
      })
    }).catch(resp => {
      console.log(`search movie(${title},limit=10,offset=${offset}) error, resp: ${JSON.stringify(resp)}`)
    })
  },


  onInput: function (event) {
    //TODO 暂时不做实时查询
    // this.onSearchMovieByTitle(event.detail.value)
  },


  // onSearch 点击搜索按钮时触发
  onSearch: function (event) {
    this.setData({
      searchText: event.detail.value
    })
    this.onSearchMovieByTitle(event.detail.value)
  },

  // onSearchMovieByTitle 重新搜索后重置pageNum
  onSearchMovieByTitle: function (title) {
    let that = this
    let filter = that.data.filter
    movie_api.search_movie(title, filter, that.data.numPerPage, 0).then(list => {
      that.setData({
        movieList: list,
        pageNum: 1
      })
      // 重新搜索后回滚到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 0,
        })
      }
    }).catch(resp => {
      console.log(`search movie(${title}) error, resp: ${JSON.stringify(resp)}`)
    })
  },

  // onSelectTag 选择标签后执行搜索
  onSelectTag: function (e) {
    let title = this.data.searchText
    let filter = {}
    let cate_list = e.detail.cate_list
    let director_list = e.detail.director_list
    let performer_list = e.detail.performer_list
    if (cate_list.length > 0) {
      filter.cate = cate_list
    }
    if (director_list.length > 0) {
      filter.director = director_list
    }
    if (performer_list.length > 0) {
      filter.performer = performer_list
    }
    this.setData({
      filter: filter
    })
    this.onSearchMovieByTitle(title)
  }
})