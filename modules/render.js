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

// async function show(req, res) {
//     const showData = await fetcher.fetchShow()
//     res.render('show', {
//         showInfo: showData
//     });
//     console.log(showInfo)
// }

async function test(req, res) {
    const fetchData = await fetcher.fetchData()
    res.render('test', {
        data: fetchData
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
    constructor
}