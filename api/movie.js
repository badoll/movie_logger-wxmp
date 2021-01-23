function get_nowplaying_movie() {
    return [{
            id: "1",
            title: "测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "2",
            title: "testmovie2",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2测试电影名字长度测试电影名字长度测试电影名字长度",
            director: "director测试电影名字长度测试电影名字长度",
            performer: "performer1, performer2测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度测试电影名字长度",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "3",
            title: "testmovie3",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "4",
            title: "testmovie4",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "5",
            title: "testmovie5",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "6",
            title: "testmovie6",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
        },
        {
            id: "123",
            title: "testmovie7",
            poster: "https://img3.doubanio.com/view/photo/m/public/p2629954180.webp",
            cate: "cate1,cate2",
            director: "director",
            performer: "performer1, performer2",
            rating_score: 7.3,
            release_date: "2021-01-23"
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
        performer: "performer1, performer2, performer3",
        performer: "performer1, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2, performer2",
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
        intro: "电影讲述了一个balabalbala的故事",
        intro: "电影讲述了一个balabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbalabalabalbala的故事",
        main_cast: [{
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "倪妮"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "伊丽莎白·奥尔森"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "Elizabeth Olsen"
        }, {
            poster: "https://img3.doubanio.com/view/photo/l/public/p2321839760.webp",
            name: "伊丽莎白·奥尔森"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini"
        }, {
            poster: "https://img2.doubanio.com/view/photo/l/public/p2265232293.webp",
            name: "nini"
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

exports.get_nowplaying_movie = get_nowplaying_movie
exports.get_upcoming_movie = get_upcoming_movie
exports.get_movie_by_id = get_movie_by_id