import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios/useAxios";

interface QueryPropsType {
  url: string;
  pathname: string;
  params?: object;
}

export const useQueryHandler = (props: QueryPropsType) => {
  const axios = useAxios();
  const { url, pathname, params } = props;
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, method: "GET", params }),
  });
};
