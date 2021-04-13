
const fetch = require('node-fetch')

var max = '2021'
var min = '1990'

var season = Math.floor(Math.random() * (+max - +min)) + +min;

const URLSeasonQ = `http://ergast.com/api/f1/${season}/drivers.json`; //algemene link van de API

console.log(URLSeasonQ)

const URLConstructorQ = `http://ergast.com/api/f1/${season}/constructors.json`



async function fetchData(data){
    const fetch_response = await fetch(URLSeasonQ)
    const json = await fetch_response.json();
    return json
}

async function fetchDataConstructorQ(dataConstructor){
    const fetch_response = await fetch(URLConstructorQ)
    const json = await fetch_response.json();
    return json
}





module.exports = {
    fetchData,
    fetchDataConstructorQ
}