import React from "react";
import { Drawer } from "antd";
import { useDrawerStore } from "../../zustand/drawer";

const DrawerComponent: React.FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const toggleDrawer = useDrawerStore((state) => state.drawerToggle);
  return (
    <>
      <Drawer
        closable
        destroyOnHidden
        title={<div className="flex items-center justify-center gap-4"> <button className=" flex mybtn w-[100px] h-9 rounded-[7px]">Register</button>
          <button className=" flex w-[100px] h-9 border-[#ff5b00] border-2 rounded-[7px]  items-center justify-center font-[600] text-[#ff5b00]">Login</button></div>}
        placement="right"
        open={isOpen}
        onClose={() => toggleDrawer()}
      >
        <div className=" flex flex-col gap-4  ">

     <nav className="header-links  items-start  flex flex-col  gap-4">
          <a className="text-xl font-[400]" href="">Home</a>
          <a className="text-xl font-[400]" href="">Menu</a>
          <a className="text-xl font-[400]" href="">Services</a>
        </nav>

       
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
