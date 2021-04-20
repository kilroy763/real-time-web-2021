
const fetch = require('node-fetch')

var max = '2021'
var min = '1950'

var season = Math.floor(Math.random() * (+max - +min)) + +min;

const URLSeasonQ = `http://ergast.com/api/f1/${season}/driverStandings.json`;

async function fetchData(data){
    const fetch_response = await fetch(URLSeasonQ)
    const json = await fetch_response.json();
    return json
}

console.log(URLSeasonQ)

async function fetchDataConstructorQ(dataConstructor){
    const fetch_response = await fetch(URLConstructorQ)
    const json = await fetch_response.json();
    return json
}






module.exports = {
    fetchData,
    fetchDataConstructorQ
}