import { searchMovies } from "@/api/movies";
import AppPagination from "@/components/AppPagination";
import MovieList from "@/components/MovieList";
import MovieSection from "@/components/MoviesSection";
import SpinnerWithText from "@/components/SpinnerWithText";
import { usePages } from "@/hooks/ussePages";
import { ISearchMovies } from "@/interfaces/SearchMovies";
import { STATUS } from "@/types/Status";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("query");
  const [movies, setMovies] = useState<ISearchMovies | null>(null);
  const [status, setStatus] = useState<(typeof STATUS)[number]>("loading");

  const { currentPage, handleCurrentPage } = usePages();

  const isSuccess = status === "success";
  const isLoading = status === "loading";

  const fetchMovies = useCallback(async () => {
    try {
      setStatus("loading");
      const data = await searchMovies({
        query: searchValue || "",
        page: currentPage,
      });
      setStatus("success");
      setMovies(data);
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }, [currentPage, searchValue]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {isLoading && <SpinnerWithText />}
        {isSuccess && searchValue && movies && movies.results.length > 0 && (
          <MovieSection title={`Kết quả tìm kiếm của: ${searchValue || ""}`}>
            <MovieList movies={movies.results} />
            <AppPagination
              onCurrentPage={handleCurrentPage}
              currentPage={currentPage}
              pageTotal={movies.total_pages}
            />
          </MovieSection>
        )}
        {!isLoading && movies && movies.results.length === 0 && (
          <h3 className="text-2xl font-semibold text-center">
            Nội dung tìm kiếm trống
          </h3>
        )}
      </div>
    </section>
  );
}

export default Search;
