import { trendingMovie } from "@/api/movies";
import AppPagination from "@/components/AppPagination";
import MovieList from "@/components/MovieList";
import MovieSection from "@/components/MoviesSection";
import SpinnerWithText from "@/components/SpinnerWithText";
import { usePages } from "@/hooks/ussePages";
import { ITrendingMovies } from "@/interfaces/TrendingMovies";
import { STATUS } from "@/types/Status";
import { useCallback, useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState<ITrendingMovies | null>(null);
  const [status, setStatus] = useState<(typeof STATUS)[number]>("loading");
  const { currentPage, handleCurrentPage } = usePages();

  const isSuccess = status === "success";
  const isLoading = status === "loading";

  const fetchMovies = useCallback(async () => {
    try {
      setStatus("loading");
      const data = await trendingMovie({ page: currentPage });
      setStatus("success");
      setMovies(data);
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }, [currentPage]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {isLoading && <SpinnerWithText />}
        {isSuccess && movies && (
          <MovieSection title="Trending">
            <MovieList movies={movies.results} />
            <AppPagination
              onCurrentPage={handleCurrentPage}
              currentPage={currentPage}
              pageTotal={movies.total_pages}
            />
          </MovieSection>
        )}
      </div>
    </section>
  );
}

export default Home;
