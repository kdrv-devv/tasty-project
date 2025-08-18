import { toast } from "react-toastify";

type notificationType = "login" | "register" | "addlike" | "removeliked";

export const notificationApi = () => {

  return function (notifyType: notificationType) {
    switch (notifyType) {
      case "addlike":
        return toast.success("Maxsulot sevimlilarga qo'shildi !");
      case "register":
        return toast.success("Muofaqiyatli ro'yxatdan o'tdingiz !");
      case "login":
        return toast.success("Tizimga muofaqiyatli  kirdingiz !");
      case "removeliked":
        return toast.success("Sevimlilardan o'chirildi !");
      default:
        break;
    }
  }
}
