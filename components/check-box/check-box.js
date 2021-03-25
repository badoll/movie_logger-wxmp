const movie_cate = [
  "剧情", "喜剧", "动作", "爱情", "科幻", "动画",
  "悬疑", "惊悚", "恐怖", "犯罪", "音乐", "歌舞",
  "传记", "历史", "战争", "西部", "奇幻", "冒险",
  "灾难", "武侠"
]
Component({
  properties: {
    item_list: {
      type: Array,
      value: []
    }
  },
  data: {
    has_select: false,
    selected_num: 0,
  },
  lifetimes: {
    attached: function () {
      let list = []
      for (let i in movie_cate) {
        list.push({
          name: movie_cate[i],
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
      let count = this.data.selected_num
      let has_select = this.data.has_select
      item.is_select = !item.is_select;
      if (item.is_select) {
        count++
        has_select = true
      } else {
        count--
      }
      if (count == 0) {
        has_select = false
      }
      this.setData({
        item_list: this.data.item_list,
        has_select: has_select,
        selected_num: count
      });
    },
    onConfirm: function (e) {
      let item_list = this.data.item_list
      let inter = []
      for (let i in item_list) {
        if (item_list[i].is_select) {
          inter.push(item_list[i].name)
        }
      }
      this.triggerEvent("confirm_inter", {
        inter_list: inter
      })
    }
  }
})