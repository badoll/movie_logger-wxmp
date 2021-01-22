function get_nowplaying_movie() {
    return
    return [{
            title: "测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2测试电影名字长度测试电影名字长度测试电影名字长度",
            director: "director测试电影名字长度测试电影名字长度",
            performer: "performer1, performer2测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
        {
            title: "testmovie",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3
        },
    ]
}

function get_upcoming_movie() {

}

function get_movie_by_id(id) {
    return {
        title: "testmovie",
        // title: "testmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovietestmovie",
        poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
        cate: "cate1,cate2",
        // cate: "cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2cate1,cate2",
        director: "director",
        performer: "performer1, performer2",
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
        release_data: "2020-1-22",
        runtime: "101 minutes",
        intro: "This movie is about...",
        main_cast: [{
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini"
        }],
        photos: ["https://img3.doubanio.com/view/photo/l/public/p2629269420.webp", "https://img9.doubanio.com/view/photo/l/public/p2629193904.webp"]
    }
}

exports.get_nowplaying_movie = get_nowplaying_movie
exports.get_upcoming_movie = get_upcoming_movie
exports.get_movie_by_id = get_movie_by_id