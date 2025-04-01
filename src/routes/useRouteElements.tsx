import MainLayout from "@/layouts/MainLayout";
import { useRoutes } from "react-router-dom";
import { paths } from "./path";
import Home from "@/pages/home";
import Search from "@/pages/search";
import MovieDetails from "@/pages/movie-details";

export function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: paths.home,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: paths.search,
          element: <Search />,
        },
        {
          path: paths.movieDetails,
          element: <MovieDetails />,
        },
      ],
    },
  ]);
  return routeElements;
}
