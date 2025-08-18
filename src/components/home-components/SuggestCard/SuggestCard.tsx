import star from "../../../images/home-imges/star.svg";
import mouseImg from "../../../images/home-imges/mouse-img.png";

const SuggestCard = () => {
  return (
    <div className="suggest-card  md:hover:-translate-y-3 duration-300 cursor-pointer relative shadow-xl w-[300px] rounded-[12px] overflow-hidden h-[300px] md:h-[389px] ">
      
      <div className="absolute text-white font-[700] w-[20%] flex items-center justify-center  left-0 top-4 rounded-[0px_20px_20px_0px] border-2 border-[#f57474] bg-[#f00000]   ">
          30%
      </div>

      <img className="h-[45%] w-full" src={mouseImg} alt="Mouse img" />

      <div className="card-info flex flex-col gap-2 p-4 ">
        <div className="card-rate flex  items-center  gap-4">
          <img src={star} alt="Star" />
          <p className="text-xl sm:text-2xl font-[500] "> 5.9</p>
          
          <h6 className="review relative  text-xs sm:text-base text-[#808080b1]">+100 review</h6>
        </div>
        <h2 className="card-title font-[600] text-[black] text-lg sm:text-xl md:text-3xl">Mouse</h2>
        <h4 className="font-[300] text-xs text-[#808080]">Made with juicy beef burger, cheese...</h4>
        <div className="price flex flex-col gap-1">
          <p className="old-price text-xs text-[#808080e2] line-through ">9.20$</p>
          <h5 className="price text-[#f00000] font-[600] text-lg sm:text-xl ">8.5 $</h5>
        </div>
      </div>
    </div>
  );
};

export default SuggestCard;
