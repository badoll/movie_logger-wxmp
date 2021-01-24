const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据）
        // defaultData: {
        //     type: Object,
        //     value: {
        //         title: "我是默认标题"
        //     },
        //     observer: function(newVal, oldVal) {}
        // }
    },
    data: {
        nav_bar_height: app.globalData.screen_size.nav_bar_height,
        menu_bottom: app.globalData.screen_size.menu_bottom,
        menu_height: app.globalData.screen_size.menu_height,
        search_bar_width: app.globalData.screen_size.menu_left - 2 * app.globalData.screen_size.left_border,
    },
    attached: function() {
    },

    methods: {
    navigate_to_search: function(e) {
        wx.navigateTo({
          url: '/pages/search/search',
        })
    }    
    }
})