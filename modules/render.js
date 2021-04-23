const fetcher = require('./fetch')


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
    home,
    test,
    constructor,
    login
}