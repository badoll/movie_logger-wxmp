const movie_cate = [
  "剧情", "喜剧", "动作", "奇幻"
]
const movie_performer = [
  "张国荣", "周星驰", "倪妮",
]
const movie_director = [
  "姜文"
]
Component({
  properties: {
    item_list: {
      type: Array,
      value: []
    }
  },
  data: {},
  lifetimes: {
    attached: function () {
      let list = []
      for (let i in movie_cate) {
        list.push({
          name: movie_cate[i],
          tag: "cate",
          is_select: false
        })
      }
      for (let i in movie_performer) {
        list.push({
          name: movie_performer[i],
          tag: "performer",
          is_select: false
        })
      }
      for (let i in movie_director) {
        list.push({
          name: movie_director[i],
          tag: "director",
          is_select: false
        })
      }
      this.setData({
        item_list: list
      })
    },
  },
  methods: {
    onSelect: function (e) {
      let index = e.currentTarget.dataset.index;
      let item = this.data.item_list[index];
      item.is_select = !item.is_select;
      this.setData({
        item_list: this.data.item_list,
      });
      // 点击标签后搜索
      let item_list = this.data.item_list
      let cate_list = []
      let director_list = []
      let performer_list = []
      for (let i in item_list) {
        if (item_list[i].is_select) {
          switch (item_list[i].tag) {
            case "cate":
              cate_list.push(item_list[i].name)
              break;
            case "director":
              director_list.push(item_list[i].name)
              break;
            case "performer":
              performer_list.push(item_list[i].name)
              break;
          }
        }
      }
      this.triggerEvent("onSelectTag", {
        cate_list: cate_list,
        director_list: director_list,
        performer_list: performer_list
      })
    }
  }
})