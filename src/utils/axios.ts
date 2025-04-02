import axios from "axios";

const HOST_API = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error.response && error.response.data);
  }
);

export default axiosInstance;

const PREFIX = "/api";

export const endpoints = {
  movies: {
    trendingMovie: `${PREFIX}/trending`,
    movieDetails: (id: string) => `${PREFIX}/movie/${id}`,
    searchMovies: `${PREFIX}/search`,
  },
};
