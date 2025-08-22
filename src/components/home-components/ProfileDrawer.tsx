import React from "react";
import { Button, Drawer, Form, Input } from "antd";
import { useAuthStore, type UserDataType } from "../../zustand/authStore";
import { useModalStore } from "../../zustand/modalstore";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { IoLogOutOutline } from "react-icons/io5";

const ProfileDrawerComponent: React.FC = () => {
  const isOpen = useModalStore((state) => state.profileModal);
  const toggleProfileDrawer = useModalStore(
    (state) => state.setProfileModalVisiblity
  );

  const user = useAuthStore((state) => state.user) as UserDataType;
  const signOut = useAuthStore(state => state.signOut)
  const updateUser = (e: UserDataType) => {
    console.log(e);
  };
  const signOutUser = () => {
        signOut()
        localStorage.removeItem("user")
        toggleProfileDrawer()
  }

  return (
    <>
      <Drawer
        closable
        destroyOnHidden
        title={
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-xl text-[#ff5b00] sm:text-2xl">Profile</h1>
          </div>
        }
        placement="right"
        open={isOpen}
        onClose={() => toggleProfileDrawer()}
      >
        <Form onFinish={updateUser} className="flex flex-col " action="">
          <Form.Item name={"firstName"}>
            <Input
              defaultValue={user?.firstName || ""}
              className="h-12 !text-xl !font-[600]  focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
              placeholder="Enter name..."
            />
          </Form.Item>
          <Form.Item name={"lastName"}>
            <Input
              defaultValue={user?.lastName || ""}
              className="h-12 !text-xl !font-[600]  focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
              placeholder="Enter lastname..."
            />
          </Form.Item>

          <Form.Item name={"username"}>
            <Input
              defaultValue={user?.username || ""}
              className="h-12 !text-xl !font-[600]  focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
              placeholder="Enter username..."
            />
          </Form.Item>

          <Form.Item name={"password"}>
            <Input.Password
              className="h-12 !text-xl !font-[600]  focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
              placeholder="Enter current password..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item name={"new_password"}>
            <Input.Password
              className="h-12 !text-xl !font-[600]  focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00] "
              placeholder="Enter new password..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item name={"phoneNumber"}>
            <Input
              className="!h-12  !text-xl !font-[600] md:!text-2xl focus:!outline-[#ff5b00]  !text-[#ff5b00] !border-[#ff5b00] !outline-[#ff5b00]"
              addonBefore={<span className="!text-[#ff5b00]">+998</span>}
              suffix=""
              type="number"
              defaultValue={user?.phoneNumber.slice(4) || ""}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            className="h-12 text-xl    font-[500] active:!bg-[#ad3d00] bg-[#ff5b00] hover:!bg-[#ff5b00]"
            type="primary"
          >
            {"Update"}
          </Button>
        </Form>

        <div className="flex justify-center mt-4">
          <span onClick={signOutUser} className="flex cursor-pointer text-[#ff5b00] text-xl font-[500]  items-center gap-1">
            Log out
            <IoLogOutOutline className="!text-2xl" />
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default ProfileDrawerComponent;
