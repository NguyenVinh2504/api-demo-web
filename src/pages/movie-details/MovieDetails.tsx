import { MOVIE_DETAILS } from "@/_mocks/_movie-details";
import { Star } from "@/components/Icons";
import { imagePath } from "@/tmdb/tmdb.configs";
import { formatDuration } from "@/utils/formatDuration";
import { useMemo } from "react";

function MovieDetails() {
  const genres = useMemo(
    () => MOVIE_DETAILS.genres.map((genre) => genre.name),
    []
  );

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="bg-neutral-900 min-h-[calc(100svh-48px-64px)] rounded-2xl relative">
          {/* Banner */}
          <div className="bg-neutral-700 pt-[30%] relative">
            <img
              src={imagePath(MOVIE_DETAILS.backdrop_path)}
              alt=""
              className="absolute size-full inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-[#17171700] from-0% to-100%"></div>
          </div>
          {/* Banner */}

          {/* Thông tin cơ bản */}
          <div className="-mt-60 relative px-30 flex items-end gap-4">
            {/* Poster */}
            <div className="flex-[0_0_200px] rounded-md overflow-hidden">
              <img
                src={imagePath(MOVIE_DETAILS.poster_path, "w500")}
                alt={MOVIE_DETAILS.title}
                className="max-w-full "
              />
            </div>
            {/* Poster */}

            {/* Content */}
            <div className="flex-[0_1_50%]">
              {/* Title */}
              <h1 className="font-bold text-primary text-4xl lg:text-5xl mb-3 line-clamp-2 leading-normal">
                {MOVIE_DETAILS.title}
              </h1>
              {/* Title */}

              {/* Vote */}
              <span className="text-xl font-bold inline-flex items-center py-0.5 px-2 border-1 border-yellow-400 rounded-sm mb-2">
                <Star />
                {MOVIE_DETAILS.vote_average.toFixed(1)}
              </span>
              {/* Vote */}

              {/* Thông tin */}
              <div className="leading-7 text-lg [&>p]:text-base [&>p]:font-thin [&>p]:my-1 [&>p>span]:font-bold mb-2">
                <p>
                  <span>Ngày phát hành: </span>
                  {MOVIE_DETAILS.release_date}
                </p>
                <p>
                  <span>Thời lượng: </span>
                  {formatDuration(MOVIE_DETAILS.runtime)}
                </p>
              </div>
              {/* Thông tin */}

              {/* Thể loại  */}
              <div className="flex gap-2 flex-wrap">
                {genres.map((genre) => {
                  return (
                    <span
                      className="bg-neutral-700 p-1 rounded-sm text-sm"
                      key={genre}
                    >
                      {genre}
                    </span>
                  );
                })}
              </div>
              {/* Thể loại  */}
            </div>
            {/* Content */}
          </div>
          {/* Thông tin cơ bản */}

          {/* Mô tả */}
          <div className="px-30 py-8">
            <h2 className="text-3xl font-semibold tracking-tight">Overview</h2>
            <p className="leading-7 mt-4">{MOVIE_DETAILS.overview}</p>
          </div>
          {/* Mô tả */}
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
