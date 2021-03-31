const {
  request,
  base_url
} = require("./request")

// code 换 服务器 user_id, 存storage
function set_user_info(code) {
  let user_info = wx.getStorageSync("user_info")
  if (user_info) {
    if (user_info.id) {
      getApp().globalData.user_info.id = user_info.id
    }
    // 暂时不从服务器异步拉头像
    // if (user_info.info) {
    //   getApp().globalData.user_info.info = user_info.info
    // }
  }

  // 异步更新用户信息(喜欢的电影等)
  get_user_info(code).then(data => {
    let user_info = {
      id: data.user_id,
      like_list: data.like_list
    }
    // if (data.nick_name && data.avatar_url) {
    //   user_info.info = {
    //     nick_name: data.nick_name,
    //     avatar_url: data.avatar_url,
    //   }
    // }
    getApp().globalData.user_info = user_info
    wx.setStorageSync("user_info", user_info)
  }).catch(resp => {
    console.log(`get user_id error, resp: ${JSON.stringify(resp)}`)
  })
}

// // set_user_info 调login拿code再换user_id，暂时不需要
// function set_user_info() {
// }

// get_user_code 调用wx.login 拿code
function get_user_code() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        resolve(res.code)
      },
      fail: res => {
        reject(res)
      }
    })
  });
}

function get_user_info(code) {
  return new Promise((resolve, reject) => {
    request({
      url: base_url + "/user/account/login/" + code,
    }).then(data => {
      resolve(data)
    }).catch(resp => {
      reject(resp)
    })
  });
}

// set_inter_field 设置用户感兴趣电影类型
function set_inter_field(user_id, inter_field) {
  request({
    url: base_url + "/user/action/set_inter_field",
    method: "POST",
    header: {
      'content-type': 'application/json'
    },
    data: {
      user_id,
      inter_field
    },
  }).then(data => {
    // console.log(`user(${user_id}) set_inter_field succ`)
  }).catch(resp => {
    console.log(`user(${user_id}) set_inter_field error, resp: ${JSON.stringify(resp)}`)
  })
}

// is_new_user 判断用户是否有选择过兴趣类型
function is_new_user(user_id) {
  return new Promise((resolve, reject) => {
    request({
      url: base_url + "/user/account/is_new/" + user_id
    }).then(data => {
      resolve(data.is_new)
    }).catch(resp => {
      reject(resp)
    })
  });
}

// like 用户喜欢或取消喜欢
function like(user_id, movie_id, like) {
  request({
    url: base_url + "/user/action/like",
    method: "POST",
    header: {
      'content-type': 'application/json'
    },
    data: {
      user_id,
      movie_id,
      like
    },
  }).then(data => {
    // console.log(`user(${user_id}) like(${like}) movie(${movie_id}) succ`)
  }).catch(resp => {
    console.log(`user(${user_id}) like(${like}) movie(${movie_id}) error, resp: ${JSON.stringify(resp)}`)
  })
}

// update_user_info 更新用户昵称头像
function update_user_info(user_info) {
  request({
    url: base_url + "/user/account/update/" + user_info.id,
    method: "POST",
    header: {
      'content-type': 'application/json'
    },
    data: {
      nick_name: user_info.nick_name,
      avatar_url: user_info.avatar_url,
    },
  }).then(data => {
    // console.log(`user(${user_id}) update_user_info succ`)
  }).catch(resp => {
    console.log(`user(${user_id}) update_user_info error, resp: ${JSON.stringify(resp)}`)
  })
}

module.exports = {
  set_user_info,
  is_new_user,
  set_inter_field,
  like,
  update_user_info
}