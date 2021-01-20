const app = getApp()

Page({
    data: {
        msg: "hello",
        motto: "word",
        array: [1, 2, 3, 4, 5]
    },
    clickme: function() {
        this.setData({msg:"hello word"})
    }
    // onLoad() {

    // }
})