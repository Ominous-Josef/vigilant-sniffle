import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosBaseQuery } from "./axios-based-query";
import { TagTypes } from "./tag-types";

export const BaseApi = createApi({
  baseQuery: AxiosBaseQuery({
    baseUrl: "",
  }),
  tagTypes: Object.values(TagTypes),
  endpoints: () => ({}),
});
