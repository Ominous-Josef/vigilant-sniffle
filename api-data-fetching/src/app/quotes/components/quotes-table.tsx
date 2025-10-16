"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { QuoteDoc } from "@/redux/api/quotes/interface";
import type { FC } from "react";

interface QuotesTableProps {
  data: QuoteDoc[];
  loading?: boolean;
  pagination?: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    prevPageHandler: () => void;
    nextPageHandler: () => void;
    prevPageExists: boolean;
    nextPageExists: boolean;
  };
}
export const QuotesTable: FC<QuotesTableProps> = ({
  data,
  pagination,
  loading,
}) => {
  return (
    <div className="space-y-6 w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch w-full">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => (
                <Card key={index}>
                  <CardContent className="h-full flex flex-col justify-between gap-6">
                    <div>
                      <p className="inline-block animate-pulse h-4 w-full bg-gray-200 rounded-2xl"></p>

                      <p className="inline-block animate-pulse h-4 w-full bg-gray-200 rounded-2xl"></p>

                      <p className="inline-block animate-pulse h-4 w-24 bg-gray-200 rounded-2xl"></p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-block animate-pulse h-4 w-16 bg-gray-200 rounded-2xl"></span>
                      <span className="inline-block animate-pulse h-4 w-16 bg-gray-200 rounded-2xl"></span>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm italic justify-end w-full">
                    <p className="inline-block animate-pulse h-4 w-1/3 bg-gray-200 rounded-2xl"></p>
                  </CardFooter>
                </Card>
              ))
          : data.map((quote, index) => (
              <Card key={index} className="justify-between">
                <CardContent className="h-full flex flex-col justify-between gap-6">
                  <p className="text-sm">{quote.content}</p>

                  <div className="flex flex-wrap items-center gap-2">
                    {quote.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-sm italic justify-end w-full">
                  <p>- {quote.author}</p>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};
