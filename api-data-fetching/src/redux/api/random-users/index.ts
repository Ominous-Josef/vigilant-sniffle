import { BaseApi } from "../base-api";
import type { RandomUserPaginationResponse } from "./interface";

export const RandomUserApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRandomUser: builder.query<RandomUserPaginationResponse, void>({
      query: (data) => ({
        url: "https://randomuser.me/api/",
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const { useGetRandomUserQuery, useLazyGetRandomUserQuery } =
  RandomUserApi;
