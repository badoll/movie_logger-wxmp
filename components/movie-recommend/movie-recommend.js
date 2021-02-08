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
        display_photos: [], //poster + photos
        rating_score: 7.3
      }
    }
  },
  data: {},
  attached: function () {
    this.mergeDisplayPhotos()
  },
  methods: {
    onNavigate: function (e) {
      let mid = e.currentTarget.dataset.mid
      wx.navigateTo({
        url: "/pages/movie/movie?movie_id=" + mid,
      })
    },
    /**
     * 根据图片原尺寸设置等比例宽度（高度一定）
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
    },
    /**
     * display_photos = poster + photos
     */
    mergeDisplayPhotos: function () {
      let m = this.data.movie
      let poster = {
        url: m.poster
      }
      let dp = m.photos
      dp.unshift(poster)

      // 加上unique作为key
      for (let i in dp) {
        dp[i].unique = i
      }

      m.display_photos = dp
      this.setData({
        movie: m
      })
      console.log(this.data)
    }
  }
})