import { MovieResult } from "@/interfaces/TrendingMovies";
import Movie from "../Movie/Movie";

function MovieList({ movies }: { movies: MovieResult[] }) {
  return (
    <div className="grid grid-cols-5 gap-4 mb-4">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
