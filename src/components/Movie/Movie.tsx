import { MovieResult } from "@/interfaces/TrendingMovies";
import { imagePath } from "@/tmdb/tmdb.configs";
import { Star } from "../Icons";

function Movie({ movie }: { movie: MovieResult }) {
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
        <a
          href={`/movie/${movie.id}`}
          className="font-bold md:text-2xl line-clamp-2"
        >
          {movie.title}
        </a>
        <span className="text-slate-400 pt-2 font-semibold">
          {new Date(movie.release_date).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <p className="line-clamp-3 py-2 h-20 leading-6 text-sm font-light mb-3">
          {movie.overview}
        </p>
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
