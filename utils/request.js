const API_KEY = process.env.API_KEY;
export const API_URL= "https://api.themoviedb.org/3/";
export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/";

const genres = {
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  mystery: 9648,
  sciFi: 878,
  western: 37,
  animation: 16,
  tv: 10770,
};

const apiSettings = {
  fetchTrending: {
    title: "Trending",
    url: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `discover/movie/?api_key=${API_KEY}&with_genres=${genres.action}`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.comedy}`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.horror}`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.romance}`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.mystery}`,
  },
  fetchSciFiMovies: {
    title: "Sci Fi",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.sciFi}`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.western}`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.animation}`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `discover/movie?api_key=${API_KEY}&with_genres=${genres.tv}`,
  },
};

export default apiSettings;
