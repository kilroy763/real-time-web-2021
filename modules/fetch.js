
const fetch = require('node-fetch')

const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //static key van de API



var randomMovies = [
    "272",
    "101",
    "104"
  ];


  var randomShows= [
    "1396"
  ];


var randomMovie = randomMovies[Math.floor(Math.random()*randomMovies.length)];
var randomShow = randomMovies[Math.floor(Math.random()*randomMovies.length)];

const urlActor = `${cors}movie/${randomMovie}/credits?api_key=${key}`; //samenvoegen van de link en key

const urlMovie = `${cors}movie/${randomMovie}?api_key=${key}`; //samenvoegen van de link en key

const urlShow = `${cors}tv/${randomShow}?api_key=${key}`; //samenvoegen van de link en key


async function fetchActor(actor) {
    const fetch_response = await fetch(urlActor);
    const json = await fetch_response.json();
    return json
    
};

async function fetchMovie(movie) {
    const fetch_response = await fetch(urlMovie);
    const json = await fetch_response.json();
    return json
    
};

async function fetchShow(show) {
    const fetch_response = await fetch(urlShow);
    const json = await fetch_response.json();
    return json
    
};




module.exports = {
    fetchActor,
    fetchMovie,
    fetchShow
}