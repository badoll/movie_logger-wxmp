const app = getApp()

Page({
    data: {
        msg: "hello",
    },
    clickme: function () {
        this.setData({
            msg: "hello word"
        })
    },
    lower: function (e) {
        console.log(1)
    },

    onLoad() {
        console.log(wx.getSystemInfoSync())
    }
})