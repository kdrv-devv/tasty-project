import { FaBars } from "react-icons/fa6";
import { useDrawerStore } from "../../zustand/drawer";
import DrawerComponent from "../home-components/Drawer";
import { useModalStore } from "../../zustand/modalstore";
import { useAuthStore, type UserDataType } from "../../zustand/authStore";
import { Avatar } from "antd";
// import { notificationApi } from "../../generics/notifications";

const Header = () => {
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );
  const toggleDrawer = useDrawerStore((state) => state.drawerToggle);
  const user = useAuthStore((state) => state.user) as UserDataType;
  const toggleProfileDrawer = useModalStore((state) => state.setProfileModalVisiblity);
  return (

    <header className="bg-[#1A1A1D] sticky top-0 left-0 z-50 shadow-xl">
      <div className="mc flex items-center justify-between py-5">
        <h1 className="text-xl text-white font-[600] sm:text-2xl md:text-4xl">
          ALO COMPUTERS
        </h1>

        <nav className="header-links  text-white items-center hidden sm:flex  justify-center gap-5 sm:gap-8 md:gap-16">
          <a className="text-lg  md:text-xl font-[400]" href="">
            Home
          </a>
          <a className="text-lg  md:text-xl font-[400]" href="">
            Menu
          </a>
          <a className="text-lg  md:text-xl font-[400]" href="">
            Services
          </a>
        </nav>

        <div className="header-right flex items-center gap-5    ">
          {user ? (
            <Avatar onClick={()=> toggleProfileDrawer()}  className="!bg-[#ff5b00] cursor-pointer font-[600] text-xl md:text-2xl !text-[white]" size="large">{user.firstName.slice(0,1)}</Avatar>
          ) : (
            <button
              onClick={() => setModalVisibility()}
              className="hidden sm:flex mybtn w-[100px]  h-9 rounded-[7px]"
            >
              Login
            </button>
          )}

          <button
            onClick={() => toggleDrawer()}
            className="block sm:hidden text-xl text-white "
          >
            <FaBars />
          </button>
        </div>
      </div>
      <DrawerComponent />
    </header>
  );
};

export default Header;
