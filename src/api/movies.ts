import { IMovieDetails } from "@/interfaces/MovieDetails";
import { ISearchMovies } from "@/interfaces/SearchMovies";
import { ITrendingMovies } from "@/interfaces/TrendingMovies";
import axiosInstance, { endpoints } from "@/utils/axios";

export const trendingMovie = async (params: {
  page: number;
}): Promise<ITrendingMovies> => {
  const response = await axiosInstance.get<ITrendingMovies>(
    endpoints.movies.trendingMovie,
    {
      params,
    }
  );
  console.log(response);

  return response.data;
};

export const movieDetails = async (id: string): Promise<IMovieDetails> => {
  const response = await axiosInstance.get<IMovieDetails>(
    endpoints.movies.movieDetails(id)
  );
  return response.data;
};

export const searchMovies = async (params: {
  query: string;
  page: number;
}): Promise<ISearchMovies> => {
  const response = await axiosInstance.get<ISearchMovies>(
    endpoints.movies.searchMovies,
    {
      params,
    }
  );
  return response.data;
};
