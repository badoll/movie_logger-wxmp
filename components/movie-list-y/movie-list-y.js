const app = getApp()
Component({
  properties: {
    movie_list: {
      type: Array,
      value: [{
        id: "1",
        title: "测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        director: "directorcate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        performer: "performer1, performer2cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }, {
        id: "1",
        title: "电影名字",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "喜剧",
        director: "导演",
        performer: "演员",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: false
      }, {
        id: "1",
        title: "测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        director: "directorcate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        performer: "performer1, performer2cate2fsfdsfsfsdfsdfsafsdfsdfsdfsadfsdfsafs",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }, {
        id: "4",
        title: "testmovie4",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }, {
        id: "5",
        title: "testmovie5",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }, {
        id: "6",
        title: "testmovie6",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }, {
        id: "123",
        title: "testmovie7",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
      }]
    }
  },
  data: {},
  methods: {
    navigate_to_movie: function (e) {
      let mid = e.currentTarget.dataset.mid
      wx.navigateTo({
        url: "/pages/movie/movie?movie_id=" + mid,
      })
    }
  }
})