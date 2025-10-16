export const generateQueryString = (parameters: IQuery) => {
  const queryStringArray = [];
  for (const key in parameters) {
    if (parameters[key] && parameters[key] !== "") {
      queryStringArray.push(`${key}=${encodeURIComponent(parameters[key])}`);
    }
  }

  return `${queryStringArray.join("&")}`;
};

export type IQuery = { [key: string]: string | number | boolean | undefined };

export const updateUrlParams = (
  updateFn: (params: URLSearchParams) => void
) => {
  const url = new URL(window.location.href);
  url.searchParams.sort();
  updateFn(url.searchParams);
  return url.pathname + url.search;
};
