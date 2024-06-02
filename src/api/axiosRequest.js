import axios from "axios";
export const METHOD_POST = "POST";
export const METHOD_GET = "GET";
export const METHOD_PUT = "PUT";
export const METHOD_PATCH = "PATCH";
export const METHOD_DELETE = "DELETE";
export async function sendRequest(url, method, requestData) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZGVudGlmaWVyIjoiMGQwMWYwYWEtMDFlMy00Njg1LTlhMzEtZGNiZGJmYjJkNTYzIiwiUmVsIjoiMjAyMCIsIlNjaG9vbCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIzIiwiZXhwIjoxNzE2OTc0Mjk4LCJpc3MiOiJsb2FsaG9zdDo1MjI3IiwiYXVkIjoibG9jYWxob3N0OjUyMjcifQ.EOLtnIK7l0eQcn2Ze5h3KbXEh8pQoW0heOSUu1iVfeI";
  return axios
    .request({
      method,
      url,
      timeout:60000,
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
