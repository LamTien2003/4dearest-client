export const formatCurrency = (value: number) => {
  return `${Number(value).toFixed(2)}$`;
};

export const addParamsUrl = (
  currentSearchParams: string,
  paramsToSet: Object
) => {
  const params = new URLSearchParams(currentSearchParams.toString());
  Object.entries(paramsToSet).forEach(([key, value]) => params.set(key, value));

  return params.toString();
};

export const buildQueryString = (queryStringObj: any) => {
  for (const key in queryStringObj) {
    if (!queryStringObj[key]) {
      queryStringObj[key] = "";
    }
  }

  return new URLSearchParams(queryStringObj).toString();
};

export const convertSlugToString = (value: string) => {
  return value.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
};

export const decodeURL = (value: string) => {
  return decodeURIComponent(value);
};
