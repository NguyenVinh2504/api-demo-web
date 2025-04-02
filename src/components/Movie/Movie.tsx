import { MovieResult } from "@/interfaces/TrendingMovies";
import { imagePath } from "@/tmdb/tmdb.configs";
import { Star } from "../Icons";
import { Link } from "react-router-dom";
import { MovieSearchResult } from "@/interfaces/SearchMovies";

function Movie({ movie }: { movie: MovieResult | MovieSearchResult }) {
  return (
    <div className="rounded-3xl max-w-[360px] shadow-sm bg-neutral-900 flex flex-col border-1">
      <div className="pt-[calc(281/500*100%)] relative">
        <img
          src={imagePath(movie.backdrop_path, "w500")}
          width={360}
          height={200}
          className="rounded-t-3xl justify-center grid object-cover absolute inset-0 size-full"
          alt="movie.title"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Link
          to={`/movie/${movie.id}`}
          className="font-bold md:text-2xl line-clamp-2"
        >
          {movie.title}
        </Link>
        <span className="text-slate-400 pt-2 font-semibold">
          {new Date(movie.release_date).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <div className="font-black flex flex-col mt-auto">
          <span className="text-yellow-500 text-xl">SCORE</span>
          <span className="text-3xl flex gap-x-1 items-center">
            {movie.vote_average.toFixed(1)}
            <Star />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
