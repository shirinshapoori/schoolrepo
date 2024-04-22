import axios from "axios";

export const METHOD_POST = "POST";
export const METHOD_GET = "GET";
export const METHOD_PUT = "PUT";
export const METHOD_PATCH = "PATCH";
export const METHOD_DELETE = "DELETE";
export async function sendRequest(url, method, requestData) {
  const token = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZGVudGlmaWVyIjoiMzAzNCIsIlJlbCI6IjIwMTAiLCJTY2hvb2wiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImV4cCI6MTcxMzg3NDMyMSwiaXNzIjoibG9hbGhvc3Q6NTIyNyIsImF1ZCI6ImxvY2FsaG9zdDo1MjI3In0.vwhW8z1Rdf9ogaGvi0hhFBe-znTg0zf7ZwTt2yFIbsc";
  return axios
    .request({
      method,
      url,
      headers: { Authorization: `Bearer ${token}` },
      data: requestData,
    })
    .then((response) => {
      return {
        isSuccess: true,
        data: response.data,
        status: response.status,
      };
    })
    .catch((error) => {
      const response = error?.response?.data || {};
      return {
        isSuccess: false,
        ...response,
        message: "خطایی رخ داده است.",
      };
    });
}
