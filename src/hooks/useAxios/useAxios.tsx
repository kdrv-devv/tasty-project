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
      url: `${import.meta.env.VITE_BASE_URL}${url}`,
      method,
      params: {
        ...params,
        id:5,
        username:'kdrv'
      },
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      data: body,
    });
  };

  return response;
};
