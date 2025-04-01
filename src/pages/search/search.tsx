import { TRENDING_MOVIES } from "@/_mocks/_trendingMovies";
import AppPagination from "@/components/AppPagination";
import MovieList from "@/components/MovieList";
import MovieSection from "@/components/MoviesSection";

function Search() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <MovieSection title="Kết quả tìm kiếm: Haha">
          <MovieList movies={TRENDING_MOVIES.results} />
          <AppPagination />
        </MovieSection>
      </div>
    </section>
  );
}

export default Search;
