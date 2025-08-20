import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios/useAxios";
import { toast } from "react-toastify";
import { useModalStore } from "../../../zustand/modalstore";

interface MutationType {
  url: string;
  mutationKey: string;
  params?: object;
  method: "POST" | "PUT" | "DELETE";
  messageError: string;
  messageSucces: string;
}

export const useQueryMutation = (props: MutationType) => {
  const { url, mutationKey, params, method, messageError, messageSucces } =
    props;
  const axios = useAxios();
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );
  return useMutation({
    mutationKey: [mutationKey],
    mutationFn: (data: any) => axios({ url, method, params, body: data }),
    onSuccess: (data: any) => {
      if (url.includes("login") || url.includes("register")) {
        let {
          data: { token },
        } = data;

        localStorage.setItem("token", token);
        setModalVisibility();
      }
      toast.success(messageSucces);
    },
    onError: () => {
      toast.error(messageError);
    },
  });
};
