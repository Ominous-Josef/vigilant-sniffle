"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { type FC, useMemo } from "react";
import { Button } from "./ui/button";

interface AppPaginationProps {
  totalItems: number;
  itemsOnCurrentPage: number;
  totalPages?: number;
  currentPage?: number;
  limit?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  nextPageHandler?: () => void;
  previousPageHandler?: () => void;
  setCurrentPage?: (index: number) => void;
  setLimit?: (size: number) => void;
}

export const AppPagination: FC<AppPaginationProps> = ({
  hasNextPage,
  hasPreviousPage,
  nextPageHandler,
  previousPageHandler,
  itemsOnCurrentPage = 0,
  currentPage = 1,
  limit = 10,
  totalPages = 1,
  totalItems = 0,
  setLimit,
  setCurrentPage,
}) => {
  const shownItems = useMemo(() => {
    const previousItems = limit * (currentPage - 1);
    return itemsOnCurrentPage + previousItems;
  }, [limit, currentPage, itemsOnCurrentPage]);

  return (
    <div className="relative space-y-4 p-4">
      <p className="whitespace-nowrap text-muted-foreground text-sm">
        {`Showing ${shownItems} of ${totalItems} items.`}
      </p>
      <div className="flex sm:flex-row flex-col flex-wrap items-center justify-between gap-4">
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {currentPage} of {totalPages}
        </div>
        <div className="relative flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => setCurrentPage?.(1)}
            disabled={!hasPreviousPage}
            title="Go to first page"
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => previousPageHandler?.()}
            disabled={!hasPreviousPage}
            title="Go to previous page"
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => nextPageHandler?.()}
            disabled={!hasNextPage}
            title="Go to next page"
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => setCurrentPage?.(totalPages)}
            disabled={!hasNextPage}
            title="Go to last page"
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
