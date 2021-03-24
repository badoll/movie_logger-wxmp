const app = getApp()
Component({
  properties: {
    movie: {
      type: Object,
      value: {
        id: "1",
        title: "送你一朵小红花",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        performer: "易洋千玺/刘浩存/朱媛媛",
        photos: [{
          url: "https://img3.doubanio.com/view/photo/l/public/p2629269420.webp",
        }, {
          url: "https://img9.doubanio.com/view/photo/l/public/p2629193904.webp",
        }, {
          url: "https://img2.doubanio.com/view/photo/l/public/p2494832612.webp",
        }, {
          url: "https://img2.doubanio.com/view/photo/l/public/p2245109502.webp",
        }, {
          url: "https://img9.doubanio.com/view/photo/l/public/p2177143966.webp",
        }, {
          url: "https://img9.doubanio.com/view/photo/l/public/p2162060094.webp",
        }, {
          url: "https://img9.doubanio.com/view/photo/l/public/p2522076486.webp",
        }],
        rating_score: 7.3
      }
    }
  },
  lifetimes: {
    attached: function () {},
  },
  observers: {
    //数据更新监听，不要在此更新监听的字段，会造成死循环
    // 'movie': function (movie) {
    // }
  },
  data: {},
  methods: {
    onNavigate: function (e) {
      let mid = e.currentTarget.dataset.mid
      wx.navigateTo({
        url: "/pages/movie/movie?movie_id=" + mid,
      })
    },

    /**
     * 根据图片原尺寸设置等比例宽度（高度一定）
     * 图片有缓存，src没有变的情况下bindload不会触发
     */
    onSetPhotosSize: function (e) {
      let m = this.data.movie
      let width = e.detail.width
      let height = e.detail.height
      let index = e.currentTarget.dataset.index
      let x = width / height * 300 //计算出300rpx高度下的等比例宽度
      m.display_photos[index].width = x
      this.setData({
        movie: m
      })
      // console.log("bindload", m.display_photos[index].url)
    },
  }
})