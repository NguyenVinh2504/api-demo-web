import { useState } from "react";

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function handleCurrentPage(page: number, totalPages: number) {
    return () =>
      setCurrentPage((prevPage) =>
        page <= totalPages && page > 0 ? page : prevPage
      );
  }

  return { currentPage, handleCurrentPage };
};
