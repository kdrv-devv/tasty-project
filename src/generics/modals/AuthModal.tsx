import { Modal } from "antd";
import { Input } from "antd";
import React, { useState } from "react";
import { useModalStore } from "../../zustand/modalstore";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { PoweroffOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import Search from "antd/es/input/Search";

const AuthModal = () => {
  const isOpen = useModalStore((state) => state.authModal);
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );

  const [isLogin, setIsLogin] = useState("login");

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

      <div className="h-[300px]">
        {isLogin == "login" ? (
          <div className="login-content mt-4 w-[80%]  m-auto">
            <form className="flex flex-col gap-4" action="">
              <Input
                id="username"
                className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                placeholder="Username kiriting..."
              />
              <Input.Password
                className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
                placeholder="Parolingizni kiriting..."
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Button
                className="h-12 text-xl md:text-2xl uppercase  font-[500] active:!bg-[#ad3d00] bg-[#ff5b00] hover:!bg-[#ff5b00]"
                type="primary"
              >
                Login
              </Button>
            </form>
          </div>
        ) : (
          <div className="register-content mt-4 w-[80%]  m-auto">
            <form className="flex flex-col gap-4" action="">
              <Input
                className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                placeholder="Ismingizni kiriting..."
              />
              <Input
                className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                placeholder="Username kiriting..."
              />

              <Input
                className="!h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
                addonBefore="+998"
                suffix=""
                defaultValue="97 999 66 99"
              />

              <Input.Password
                className="h-12 focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
                placeholder="Parolingizni kiriting..."
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Button
                className="h-12 text-xl md:text-2xl uppercase  font-[500] active:!bg-[#ad3d00] bg-[#ff5b00] hover:!bg-[#ff5b00]"
                type="primary"
              >
                Login
              </Button>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
