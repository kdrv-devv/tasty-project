import { FaBars } from "react-icons/fa6";
import { useDrawerStore } from "../../zustand/drawer";
import DrawerComponent from "../home-components/Drawer";
import { useModalStore } from "../../zustand/modalstore";
// import { notificationApi } from "../../generics/notifications";

const Header = () => {
  const setModalVisibility = useModalStore(
    (state) => state.setAuthModalVisiblity
  );
  const toggleDrawer = useDrawerStore((state) => state.drawerToggle);

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
          <button
            onClick={() => setModalVisibility()}
            className="hidden sm:flex mybtn w-[100px]  h-9 rounded-[7px]"
          >
            Register
          </button>
          <button className="hidden sm:flex w-[67px] lg:w-[87px] h-9 border-[#ff5b00] border-2 rounded-[7px]  items-center justify-center font-[600] text-[#ff5b00] duration-200 hover:shadow-[0px_0px_10px_#ff7e39]">
            Login
          </button>
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
