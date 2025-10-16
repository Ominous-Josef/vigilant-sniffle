import type { IQuery } from "../../../../../api-data-fetching/src/utils/query.utils";
import { BaseApi } from "../base-api";
import type { QuotePaginationResponse } from "./interface";

export const QuotesApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuotes: builder.query<QuotePaginationResponse, IQuery>({
      query: (data) => ({
        url: "http://quotable.io/quotes",
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const { useGetAllQuotesQuery } = QuotesApi;
