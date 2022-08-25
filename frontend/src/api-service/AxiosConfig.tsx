import axios from "axios";

export const api = axios.create({
  baseURL: "",
});

const errorHandler = (error: {
  response: { status: any };
  code: string;
  message: string;
}) => {
  const statusCode = error.response?.status;

  // renders twice because strict mode renders components twice on development to detect errors in code
  window.alert(`Api error: "${error.message ?? "undefined"}"`);
  if (error.code === "ERR_CANCELED") {
    return Promise.resolve();
  }

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
