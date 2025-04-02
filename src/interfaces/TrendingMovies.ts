import { IPaginatedResponse } from "./PaginatedResponse";
import { MovieSearchResult } from "./SearchMovies";

export type ITrendingMovies = IPaginatedResponse<MovieResult>;

export interface MovieResult extends MovieSearchResult {
  media_type: string;
}
