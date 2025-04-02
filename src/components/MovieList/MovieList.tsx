import { MovieResult } from "@/interfaces/TrendingMovies";
import Movie from "../Movie/Movie";
import { MovieSearchResult } from "@/interfaces/SearchMovies";

function MovieList({
  movies,
}: {
  movies: (MovieResult | MovieSearchResult)[];
}) {
  return (
    <div className="grid grid-cols-5 gap-4 mb-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
