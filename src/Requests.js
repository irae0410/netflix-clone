// API KEY
const API_KEY = "68eecc901a9a3d6026aefc73520ecf95";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-ES`,
};

export default requests;