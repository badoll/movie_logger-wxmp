const app = getApp()
const user_api = require("../../api/user")
Component({
    properties: {},
    data: {
        nav_bar_height: app.globalData.screen_size.nav_bar_height,
        menu_bottom: app.globalData.screen_size.menu_bottom,
        menu_height: app.globalData.screen_size.menu_height,
        search_bar_width: app.globalData.screen_size.menu_left - 2 * app.globalData.screen_size.left_border,
        icon_src: "../../assets/img/icon.jpg"
    },
    lifetimes: {
        // attached: function () {
        //     let that = this;
        //     app.watch(that.watchBack)
        // },
    },
    pageLifetimes: {
        // show 页面显示/切入前台时触发
        show() {
            if (app.globalData.user_info.info) {
                this.setData({
                    icon_src: app.globalData.user_info.info.avatar_url
                })
            }
        }
    },
    methods: {
        // user_info改变时回调
        // watchBack: function (user_info) {
        //     console.log("watchback")
        //     if (user_info.info) {
        //         this.setData({
        //             icon_src: user_info.info.avatar_url
        //         })
        //     }
        // },
        onNavigate: function (e) {
            wx.navigateTo({
                url: '/pages/search/search',
            })
        },
        // 点击头像绑定头像昵称
        onTap: function (e) {
            // todo 异步拿到头像后回调刷新icon，而不是每次都需要前端调接口拿
            let that = this
            if (app.globalData.user_info.info) {
                wx.navigateTo({
                    url: '/pages/me/me',
                })
                return
            }
            wx.getUserProfile({
                desc: '获取昵称头像', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    let user_info = {
                        id: app.globalData.user_info.id,
                        nick_name: res.userInfo.nickName,
                        avatar_url: res.userInfo.avatarUrl,
                    }
                    user_api.update_user_info(user_info)
                    app.globalData.user_info.info = {
                        nick_name: res.userInfo.nickName,
                        avatar_url: res.userInfo.avatarUrl,
                    }
                    that.setData({
                        icon_src: res.userInfo.avatarUrl
                    })
                }
            })
        }
    }
})