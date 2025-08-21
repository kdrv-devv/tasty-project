import axios from "axios";

interface propTypes {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: object;
  headers?: object;
  body?: object;
}

export const useAxios = () => {
  const response = (props: propTypes) => {
    const { url, method, params, headers, body } = props;
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}${url}`, // param
      method,
      params: { // query
        ...params,
      },
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      data: body,
      withCredentials:true
    });
  };

  return response;
};
