const {
  request,
  base_url
} = require("./request")

// code 换 open_id, 存storage
function set_user_info(code) {
  let user_info = wx.getStorageSync("user_info")
  if (user_info) {
    getApp().globalData.user_info = user_info
    return
  }
  user_info = {
    info: {},
    open_id: ""
  }
  get_open_id(code).then(data => {
    user_info.open_id = data.openid
    getApp().globalData.user_info = user_info
    wx.setStorageSync("user_info", user_info)
  }).catch(resp => {
    console.log(`get open id error, resp: ${JSON.stringify(resp)}`)
  })
}

function get_open_id(code) {
  return new Promise((resolve, reject) => {
    request({
      url: base_url + "/user/wx_login/" + code,
    }).then(data => {
      resolve(data)
    }).catch(resp => {
      reject(resp)
    })
  });
}

// exports.set_user_info = set_user_info

module.exports = {
  set_user_info
}