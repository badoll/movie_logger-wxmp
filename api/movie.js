function get_nowplaying_movie() {
    let list = new Array(20)
    list.fill({
        id: "1",
        title: "test-movie",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
    })
    return list
}

function get_upcoming_movie() {

}


/**
 * 通过id拉电影详情
 * @param {*} id 
 */
function get_movie_by_id(id) {
    return {
        title: "test-movie",
        // title: "testmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovie",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        // cate: "cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2",
        director: "director",
        performer: "performer1, performer2, performer3",
        // performer: "performer1, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2",
        rating_score: 7.3,
        rating_stars: [{
            lv: 5,
            per: 20.1
        }, {
            lv: 4,
            per: 54.7
        }, {
            lv: 3,
            per: 22.8
        }, {
            lv: 2,
            per: 2.1
        }, {
            lv: 1,
            per: 0.3
        }],
        writer: "writer", //编剧
        region: "region", //地区
        language: "language",
        release_date: "2020-1-22",
        runtime: "101 minutes",
        intro: "电影讲述了一个balabalbala的故事",
        intro: "电影讲述了一个balabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbala的故事",
        main_cast: [{
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "倪妮",
            role: "导演"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini",
            role: "饰 role1"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "伊丽莎白·奥尔森",
            role: "饰 伊丽莎白·奥尔森"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "Elizabeth Olsen",
            role: "饰 role3"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "伊丽莎白·奥尔森",
            role: "饰 role4"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini",
            role: "饰 role5"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini",
            role: "饰 role6"
        }],
        photos: [{
            url: "https://img3.doubanio.com/view/photo/l/public/p2629269420.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2629193904.webp",
        }, {
            url: "https://img2.doubanio.com/view/photo/l/public/p2494832612.webp",
        }, {
            url: "https://img2.doubanio.com/view/photo/l/public/p2245109502.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2177143966.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2162060094.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2522076486.webp",
        }]
    }
}

/**
 * 通过标题模糊搜索电影
 * @param {*} title 
 */
function get_movie_by_title(title) {
    let list = new Array(10)
    list.fill({
        id: "1",
        title: "test-movie",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
        rating_score: 7.3,
        release_date: "2021-01-23",
        released: true
    })
    return list
}

/**
 * 
 * @param {*} params 
 */
function get_recommend_movie_list_by_user(user_id) {
    let list = new Array(5)
    list.fill({
        id: "1",
        title: "拆弹专家2",
        poster: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp",
        performer: "刘德华/刘青云/倪妮",
        photos: [{
            url: "https://img3.doubanio.com/view/photo/l/public/p2629269420.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2629193904.webp",
        }, {
            url: "https://img2.doubanio.com/view/photo/l/public/p2494832612.webp",
        }, {
            url: "https://img2.doubanio.com/view/photo/l/public/p2245109502.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2177143966.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2162060094.webp",
        }, {
            url: "https://img9.doubanio.com/view/photo/l/public/p2522076486.webp",
        }],
        rating_score: 7.3,
    })
    return list
}

/**
 * 
 * @param {*} params 
 */
function get_recommend_movie_list_by_movie(movie_id) {
    let list = new Array(5)
    list.fill({
        id: "1",
        title: "拆弹专家2",
        poster: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp",
        rating_score: 7.3,
    })
    return list
}

/**
 * 
 * @param {*} params 
 */
function get_oneweek_hot_movie_list() {
    let list = new Array(5)
    list.fill({
        id: "1",
        title: "拆弹专家2",
        poster: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp",
        rating_score: 7.3,
    })
    return list
}

/**
 * 
 * @param {*} params 
 */
function get_oneweek_praise_movie_list() {
    let list = new Array(5)
    list.fill({
        id: "1",
        title: "拆弹专家2",
        poster: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2621379901.webp",
        rating_score: 7.3,
    })
    return list
}

exports.get_nowplaying_movie = get_nowplaying_movie
exports.get_upcoming_movie = get_upcoming_movie
exports.get_movie_by_id = get_movie_by_id
exports.get_movie_by_title = get_movie_by_title
exports.get_recommend_movie_list_by_user = get_recommend_movie_list_by_user
exports.get_recommend_movie_list_by_movie = get_recommend_movie_list_by_movie
exports.get_oneweek_hot_movie_list = get_oneweek_hot_movie_list
exports.get_oneweek_praise_movie_list = get_oneweek_praise_movie_list