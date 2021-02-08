const app = getApp()
Component({
  properties: {
    width: {
      type: Number,
      value: 200
    },
    height: {
      type: Number,
      value: 200
    },
    movie_list: {
      type: Array,
      value: new Array(10).fill({
        id: "1",
        // title: "测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
        title: "心灵奇旅",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        director: "directorcate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        performer: "performer1, performer2cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      })
    }
  },
  data: {},
  methods: {
    onNavigate: function (e) {
      let mid = e.currentTarget.dataset.mid
      wx.navigateTo({
        url: "/pages/movie/movie?movie_id=" + mid,
      })
    },
    OnScrollToBottom: function (event) {
      console.log('onBottom', event, new Date().getTime())
    },
    onScroll: function (event) {
      console.log('onScroll', event, new Date().getTime())
    }
  }
})