const base_url = "https://nahuhx.com/movie_logger"

// 封装 wx.request
function request(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...option, //option解构 {url,method,data}
      success: res => {
        if (!res.data || !res.data.base || res.data.base.status != 0) {
          if (res.data.base) {
            reject(res.data.base)
            return
          }
          if (res.data) {
            reject(res.data)
            return
          }
          reject(res)
        } else {
          console.log(res.data.result)
          resolve(res.data.result)
        }
      },
      fail: res => {
        reject(res)
      }
    })
  });
}

module.exports = {
  base_url,
  request
}