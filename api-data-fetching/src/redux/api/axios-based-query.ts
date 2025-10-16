import { type BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, {
	AxiosError,
	type AxiosRequestConfig,
	type AxiosRequestHeaders,
	type Method,
} from "axios";

export const AxiosBaseQuery =
  ({
    baseUrl = "",
    baseHeaders = {},
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig["headers"];
  }): BaseQueryFn<{
    url: string;
    method: Method;
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  }> =>
  async ({ url, method, data, params, headers }) => {
    try {
      let requestHeaders = {
        ...baseHeaders,
        ...headers,
      } as AxiosRequestHeaders;
	  
      const result = await axios({
        url: baseUrl + url,
        method,
        params,
        data,
        headers: requestHeaders,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      // Return proper error structure for RTK Query
      return {
        error: {
          status: err.response?.status || err.code || "FETCH_ERROR",
          data: err.response?.data || { message: err.message },
          error: err.message,
        },
      };
    }
  };