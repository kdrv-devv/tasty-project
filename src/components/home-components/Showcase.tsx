import { MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import showacseMainImg from "../../images/home-imges/showacase-main-img.png";

const Showcase = () => {
  return (
    <section className="showcase bg-[#8080803b]">
      <div className="mc pt-8 sm:pt-10 md:pt-14 flex flex-col md:flex-row items-center justify-between ">
        <div className="showcase-left w-[100%] md:w-[47%] flex flex-col gap-8 md:ga-12 lg:gap-18">
          <div className="showcase-left-top flex flex-col gap-3 sm:gap-4 md:gap-5">
            <h1 className="font-[700] text-4xl sm:text-5xl md:text-6xl">
              <span className="  text-[#ff5b00]  ">Meat , Eat & Enjoy</span> the
              true taste
            </h1>
            <h4 className="text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Maecenas nunc amet
              sollicitudin odio purus dictumst mauris enim{" "}
            </h4>
          </div>
          <div className="showcase-left-bottom flex items-center md:items-start flex-col gap-3 sm:gap-6 md:gap-8 lg:gap-10">
            <button className="mybtn w-[90%] md:w-[40%] lg:w-[30%] rounded-[7px] h-12 flex items-center justify-center gap-2">
              SEE MORE <MdKeyboardArrowRight />
            </button>

            <form
              className="hidden md:flex w-[90%] shadow-[rgba(0_0_0_0.05)] md:w-[80%] px-4 items-center justify-between h-12 rounded-[7px] border border-[#969191]"
              action=""
            >
              <CiSearch className="text-xl  sm:text-2xl md:text-3xl text-[]" />
              <input
                className="w-full bg-transparent outline-none pl-3"
                type="text"
                placeholder="Search..."
              />
              <button className="text-xl md:text-2xl">
                <VscSettings />
              </button>
            </form>

            <div className="showcase-links flex items-center gap-3 text-xl md:text-2xl lg:text-3xl text-[gray]">
              <a target="_blank" href="">
                <IoLogoInstagram className=" hover:text-[#f46308]" />
              </a>
              <a target="_blank" href="">
                <IoLogoLinkedin className=" hover:text-[#4a4ae2]" />
              </a>
              <a target="_blank" href="">
                <IoLogoTwitter className=" hover:text-[#4c6aff]" />
              </a>
            </div>
          </div>
        </div>
        <div className="showcase-right w-[100%] md:w-[47%] relative">
          <img
            className="showcase-img w-auto  h-[270px] md:h-[400px] lg:h-[500px] "
            src={showacseMainImg}
            alt=""
          />

          <img className=" img1 absolute" src="" alt="" />
          <img className=" img1 absolute" src="" alt="" />
          <img className=" img1 absolute" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
