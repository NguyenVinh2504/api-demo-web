import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type AppPaginationProps = {
  currentPage: number;
  pageTotal: number;
  range?: number;
  onCurrentPage: (page: number, totalPages: number) => () => void;
};

function AppPagination({
  currentPage,
  onCurrentPage,
  pageTotal,
  range: RANGE = 2,
}: AppPaginationProps) {
  const renderPagination = () => {
    let isDot = false;
    const renderDot = (index: number) => {
      if (!isDot) {
        isDot = true;
        return (
          <PaginationItem key={index}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      return null;
    };

    return Array(pageTotal)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          currentPage <= RANGE * 2 + 1 &&
          pageNumber > currentPage + RANGE &&
          pageNumber < pageTotal - RANGE + 1
        ) {
          return renderDot(index);
        } else if (
          currentPage > RANGE * 2 + 1 &&
          currentPage < pageTotal - RANGE * 2
        ) {
          if (pageNumber < currentPage - RANGE && pageNumber > RANGE) {
            return renderDot(index);
          } else if (
            pageNumber > currentPage + RANGE &&
            pageNumber < pageTotal - RANGE + 1
          ) {
            return renderDot(index);
          }
        } else if (
          currentPage >= pageTotal - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < currentPage - RANGE
        ) {
          return renderDot(index);
        }
        return (
          <PaginationItem key={index}>
            <PaginationButton
              isActive={pageNumber === currentPage}
              onClick={onCurrentPage(pageNumber, pageTotal)}
            >
              {pageNumber}
            </PaginationButton>
          </PaginationItem>
        );
      });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={onCurrentPage(currentPage - 1, pageTotal)}
          />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext onClick={onCurrentPage(currentPage + 1, pageTotal)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default AppPagination;
