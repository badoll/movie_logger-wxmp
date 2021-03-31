const {
    request,
    base_url
} = require("./request")

// get_movie_list_by_chart 拉取各排行榜电影list
function get_movie_list_by_chart(chart, limit, offset) {
    let postfix = ""
    if (typeof (limit) != "undefined" && typeof (offset) != "undefined") {
        postfix = `?limit=${limit}&offset=${offset}`
    }
    return new Promise((resolve, reject) => {
        request({
            url: base_url + "/movie/chart/" + chart + postfix
        }).then(data => {
            resolve(data.movie_list)
        }).catch(resp => {
            reject(resp)
        })
    });
}

// get_movie_by_id 拉取电影详情
function get_movie_by_id(id) {
    return new Promise((resolve, reject) => {
        request({
            url: base_url + "/movie/id/" + id
        }).then(movie => {
            // [url] => [{url,width}]
            for (let i in movie.photos) {
                movie.photos[i] = {
                    url: movie.photos[i]
                }
            }
            resolve(movie)
        }).catch(resp => {
            reject(resp)
        })
    });
}

// search_movie 搜索电影
// TODO 暂时只提供电影名前缀搜索
function search_movie(title, filter, limit, offset) {
    return new Promise((resolve, reject) => {
        request({
            url: base_url + "/movie/search",
            method: "POST",
            header: {
                'content-type': 'application/json'
            },
            data: {
                title,
                filter,
                limit,
                offset
            },
        }).then(data => {
            resolve(data.movie_list)
        }).catch(resp => {
            reject(resp)
        })
    });
}
// get_recommend_by_user 用户今日推荐
function get_recommend_by_user(user_id, page_num, recom_per_page) {
    let offset = (page_num - 1) * recom_per_page
    let url = `${base_url}/movie/recommend/default?limit=${recom_per_page}&offset=${offset}`
    if (user_id && user_id != 0) {
        url = `${base_url}/movie/recommend/user/${user_id}?limit=${recom_per_page}&offset=${offset}`
    }
    return new Promise((resolve, reject) => {
        request({
            url: url
        }).then(data => {
            // 今日推荐展示图片
            // display_photos = poster + photos
            let mlist = data.movie_list
            for (let i in mlist) {
                let m = mlist[i]
                let dp = []
                if (m.poster) {
                    dp.push({
                        url: m.poster,
                        unique: 0
                    })
                }
                for (let i in m.photos) {
                    dp.push({
                        url: m.photos[i],
                        unique: dp.length // 加上unique作为key
                    })
                }
                mlist[i].display_photos = dp
            }
            resolve(mlist)
        }).catch(resp => {
            reject(resp)
        })
    });
}

// get_recommend_by_movie 电影相关推荐(默认10个)
function get_recommend_by_movie(movie_id) {
    let url = `${base_url}/movie/recommend/movie/${movie_id}?limit=10&offset=0`
    return new Promise((resolve, reject) => {
        request({
            url: url
        }).then(data => {
            resolve(data.movie_list)
        }).catch(resp => {
            reject(resp)
        })
    });
}

module.exports = {
    get_movie_by_id,
    get_movie_list_by_chart,
    search_movie,
    get_recommend_by_user,
    get_recommend_by_movie
}