import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios/useAxios";
import { toast } from "react-toastify";
import { useModalStore } from "../../../zustand/modalstore";
import { useAuthStore } from "../../../zustand/authStore";

interface MutationType {
  url: string;
  mutationKey: string;
  params?: object;
  method: "POST" | "PUT" | "DELETE";
  messageError: string;
  messageSucces: string;
}

export const useQueryMutation = (props: MutationType) => {
  const setUserData = useAuthStore((state) => state.setUserData);
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
        // register yoki login uchun post qilingandagina token saqlaymiz
        let {
          data: { token },
        } = data;
        setModalVisibility();
        setUserData(data?.data.user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data?.data.user));
      }

      setModalVisibility();
      toast.success(messageSucces);
    },
    onError: () => {
      toast.error(messageError);
    },
  });
};
