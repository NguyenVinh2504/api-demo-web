import { movieDetails } from "@/api/movies";
import { Star } from "@/components/Icons";
import SpinnerWithText from "@/components/SpinnerWithText";
import { IMovieDetails } from "@/interfaces/MovieDetails";
import { imagePath } from "@/tmdb/tmdb.configs";
import { STATUS } from "@/types/Status";
import { formatDuration } from "@/utils/formatDuration";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [details, setDetails] = useState<IMovieDetails | null>(null);
  const [status, setStatus] = useState<(typeof STATUS)[number]>("loading");

  const isSuccess = status === "success";
  const isLoading = status === "loading";

  const param = useParams();

  const genres = useMemo(
    () => details?.genres?.map((genre) => genre.name) || [],
    [details?.genres]
  );

  const fetchDetails = useCallback(async () => {
    try {
      setStatus("loading");
      const data = await movieDetails(param.id || "");
      setDetails(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  }, [param.id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        {isLoading && <SpinnerWithText />}
        {isSuccess && details && (
          <div className="bg-neutral-900 min-h-[calc(100svh-48px-64px)] overflow-hidden rounded-2xl relative">
            {/* Banner */}
            <div className="bg-neutral-700 pt-[30%] relative">
              <img
                src={imagePath(details?.backdrop_path || "")}
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
                <div className="relative pt-[calc(300/200*100%)]">
                  <img
                    src={imagePath(details?.poster_path || "", "w500")}
                    alt={details?.title || ""}
                    className="max-w-full absolute inset-0 max-h-full "
                  />
                </div>
              </div>
              {/* Poster */}

              {/* Content */}
              <div className="flex-[0_1_50%]">
                {/* Title */}
                <h1 className="font-bold text-primary text-4xl lg:text-5xl mb-3 line-clamp-2 leading-normal">
                  {details?.title || ""}
                </h1>
                {/* Title */}

                {/* Vote */}
                <span className="text-xl font-bold inline-flex items-center py-0.5 px-2 border-1 border-yellow-400 rounded-sm mb-2">
                  <Star />
                  {details?.vote_average?.toFixed(1) || 0}
                </span>
                {/* Vote */}

                {/* Thông tin */}
                <div className="leading-7 text-lg [&>p]:text-base [&>p]:font-thin [&>p]:my-1 [&>p>span]:font-bold mb-2">
                  <p>
                    <span>Ngày phát hành: </span>
                    {details?.release_date || ""}
                  </p>
                  <p>
                    <span>Thời lượng: </span>
                    {formatDuration(details?.runtime || 0)}
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
              <h2 className="text-3xl font-semibold tracking-tight">
                Overview
              </h2>
              <p className="leading-7 mt-4">{details?.overview || ""}</p>
            </div>
            {/* Mô tả */}
          </div>
        )}
      </div>
    </section>
  );
}

export default MovieDetails;
