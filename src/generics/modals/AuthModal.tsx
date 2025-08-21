import { Form, Modal, Spin } from "antd";
import { Input } from "antd";
import { useState } from "react";
import { useModalStore } from "../../zustand/modalstore";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button  } from "antd";
import { useQueryMutation } from "../../hooks/useQueryHandler/useQueryActions/useQueryActions";

interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phoneNumber: string;
}

interface LoginData {
  username: string;
  password: string;
}

const AuthModal = () => {
  const isOpen = useModalStore((state) => state.authModal);
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );
  const [isLogin, setIsLogin] = useState("login");

  const { mutate: registerMutation, isPending: registerPending } =
    useQueryMutation({
      url: "/auth/register",
      method: "POST",
      mutationKey: "register",
      messageError: "Ro'yxatdan o'tishda nimadur xato ketdi!",
      messageSucces: "Muvofaqiyatli ro'yxatdan o'tdingiz !",
    });
    
  const { mutate: loginMutation, isPending: loginPending } = useQueryMutation({
    url: "/auth/login",
    method: "POST",
    mutationKey: "login",
    messageError: "Tizimga kirishda  nimadur xato ketdi!",
    messageSucces: " Tizimga muvofaqiyatli  kirdingiz !",
  });

  const login = (e: LoginData) => {
    loginMutation(e);
  };

  const register = (e: RegisterData) => {
    registerMutation(e);
  };

  return (
    <Modal
      footer={false}
      open={isOpen}
      className=""
      onCancel={() => setModalVisibility()}
    >
      <div className="header-modal flex items-center justify-center gap-3">
        <button
          onClick={() => setIsLogin("login")}
          className={` ${
            isLogin == "login" ? "text-[#ff5b00]" : ""
          } text-xl md:text-2xl font-[600]`}
        >
          Login
        </button>
        <div className="h-[20px] w-[1.5px] bg-[#ff5b00]"></div>
        <button
          onClick={() => setIsLogin("register")}
          className={` ${
            isLogin == "register" ? "text-[#ff5b00]" : ""
          } text-xl md:text-2xl font-[600]`}
        >
          Register
        </button>
      </div>

      <div className="">
        {isLogin == "login" ? (
          <div className="login-content mt-4 w-[80%]  m-auto">
            <Form onFinish={login} className="flex flex-col gap-4" action="">
              <Form.Item name={"username"}>
                <Input
                  id="username"
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                  placeholder="Username kiriting..."
                />
              </Form.Item>

              <Form.Item name={"password"}>
                <Input.Password
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
                  placeholder="Parolingizni kiriting..."
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="h-12 text-xl md:text-2xl uppercase  font-[500] active:!bg-[#ad3d00] bg-[#ff5b00] hover:!bg-[#ff5b00]"
                type="primary"
              >
                 { loginPending ? <Spin/> :'login' }
              </Button>
            </Form>
          </div>
        ) : (
          <div className="register-content mt-4 w-[80%]  m-auto">
            <Form onFinish={register} className="flex flex-col " action="">
              <Form.Item name={"firstName"}>
                <Input
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                  placeholder="Ismingizni kiriting..."
                />
              </Form.Item>
              <Form.Item name={"lastName"}>
                <Input
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                  placeholder="Familiyangizni kiriting..."
                />
              </Form.Item>

              <Form.Item name={"username"}>
                <Input
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                  placeholder="Username kiriting..."
                />
              </Form.Item>

              <Form.Item name={"password"}>
                <Input.Password
                  className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
                  placeholder="Parolingizni kiriting..."
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item name={"phoneNumber"}>
                <Input
                  className="!h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                  addonBefore={ <span className="!text-[#ff5b00]">+998</span> }
                  suffix=""
                  defaultValue=""
                />
              </Form.Item>

              <Button
                htmlType="submit"
                className="h-12 text-xl md:text-2xl uppercase  font-[500] active:!bg-[#ad3d00] bg-[#ff5b00] hover:!bg-[#ff5b00]"
                type="primary"
              >
               { registerPending ? <Spin/> :'register' }
              </Button>
            </Form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
