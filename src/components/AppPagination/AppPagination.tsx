import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function AppPagination() {
  const RANGE = 2;
  const currentPage = 16;
  const pageTotal = 20;

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
            <PaginationLink href="#" isActive={pageNumber === currentPage}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        );
      });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {renderPagination()}

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default AppPagination;
