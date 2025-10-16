"use client";

import { AppPagination } from "@/components/app-pagination";
import { Card } from "@/components/ui/card";
import { useGetAllQuotesQuery } from "@/redux/api/quotes";
import { IQuery } from "@/utils/query.utils";
import { useMemo, useState } from "react";
import { QuotesTable } from "./components/quotes-table";

export default function QuotesPage() {
  const [quotesQuery, setQuotesQuery] = useState<IQuery>({
    page: 1,
    limit: 20,
  });

  const {
    data: quotesData,
    isLoading,
    isFetching,
  } = useGetAllQuotesQuery(quotesQuery);

  const quotes = useMemo(() => {
    if (!quotesData) return [];
    return quotesData.results;
  }, [quotesData]);

  const updateQuery = (newQuery: IQuery) => {
    setQuotesQuery((prev) => ({ ...prev, ...newQuery }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Quotes Page</h1>

      <div className="space-y-6 w-full">
        <QuotesTable data={quotes} loading={isLoading || isFetching} />

        {quotesData && (
          <Card>
            <AppPagination
              itemsOnCurrentPage={quotes.length}
              limit={quotesQuery.limit as number}
              totalItems={quotesData.totalCount}
              currentPage={quotesData.page}
              totalPages={quotesData.totalPages}
              hasNextPage={quotesData.page < quotesData.totalPages}
              hasPreviousPage={quotesData.page > 1}
              nextPageHandler={() => updateQuery({ page: quotesData.page + 1 })}
              previousPageHandler={() =>
                updateQuery({ page: quotesData.page - 1 })
              }
              setCurrentPage={(page) => updateQuery({ page })}
              setLimit={(limit) => updateQuery({ limit, page: 1 })}
            />
          </Card>
        )}
      </div>
    </div>
  );
}
