import { BaseApi } from "../base-api";
import type { CovidStat } from "./interface";

export const CovidStatsApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCovidStats: builder.query<CovidStat, void>({
      query: () => ({
        url: "https://api.covidtracking.com/v1/us/daily.json",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCovidStatsQuery } = CovidStatsApi;
