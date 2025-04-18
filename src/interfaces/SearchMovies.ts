import { IPaginatedResponse } from "./PaginatedResponse";

export type ISearchMovies = IPaginatedResponse<MovieSearchResult>;

export interface MovieSearchResult {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
