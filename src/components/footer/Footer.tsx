import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import img1 from '../../images/alo-comp-footer-img1.png'
import img2 from '../../images/home-imges/img3.png'

const Footer = () => {
  return (
    <footer className="relative bg-[#ff5b00] mt-[30px] md:mt-[50px]">
      <img className=" footer-img1 absolute h-[300px] rotate-90 opacity-15 bottom-8 u left-0" src={img1} alt="" />
      <img className=" footer-img1 absolute h-[300px]  opacity-15 bottom-16 u right-0" src={img2} alt="" />
      <div className="mc flex flex-col items-center gap-5 md:gap-8  py-8 md:py-12">
        <h2 className="text-xl w-[50%] text-white text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5x ">
          get the{" "}
          <span className="text-4xl text-[#FFC821] md:text-6xl lg:text-7xl">
            Best & Tasty
          </span>{" "}
          Foods <br />
          with Hight Quality
        </h2>

        <button className="h-14 font-[700] text-base md:text-xl rounded-[50px] bg-[white] text-[#ff5b00] flex items-center justify-center  w-[70%] md:w-[20%]">
          Order Now
        </button>

        <div className="social-media text-2xl md:text-3xl lg:text-4xl flex items-center justify-center gap-4 md:gap-8">
          <a target="_blank" href="https://www.instagram.com/alocomputers.uz">
            <AiFillInstagram />
          </a>
          <a target="_blank" href="https://www.facebook.com/alocomputersuz">
            <IoLogoFacebook />
          </a>
          <a target="_blank" href="https://t.me/alocomputers">
            <FaTelegram />
          </a>
        </div>
      </div>

        <div className="mc z-30 py-2 md:py-6 flex items-center justify-center  bg-black rounded-[70px_70px_0px_0px]">
            <p className="text-white text-xs md:text-lg flex items-center gap-2"><FaRegCopyright /> Developed by FN2 TEAM at Najot Ta'lim </p>
        </div>


    </footer>
  );
};

export default Footer;
