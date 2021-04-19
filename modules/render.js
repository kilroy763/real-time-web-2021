const fetcher = require('./fetch')

// async function actor(req, res) {
//     const data = await fetcher.fetchActor()
//     res.render('actor', {
//         info: data
//     });
//     console.log(data)
// }

// async function movie(req, res) {
//     const movieData = await fetcher.fetchMovie()
//     res.render('movie', {
//         movieInfo: movieData
//     });
// }

async function home(req, res) {
    res.render('home');
}

async function login(req, res) {
    const user = req.body.user
    res.render('user');
}

async function test(req, res) {
    const fetchData = await fetcher.fetchData()
    const user = req.body.user

    res.render('season', {
        data: fetchData,
        user : user
    });
}




async function constructor(req, res) {
    const fetchData2 = await fetcher.fetchDataConstructorQ()
    res.render('constructor', {
        data: fetchData2
    });
}





module.exports = {
    // actor,
    // show,
    // movie,
    home,
    test,
    constructor,
    login
}