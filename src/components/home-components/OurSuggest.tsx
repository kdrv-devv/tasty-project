import SuggestCard from "./SuggestCard/SuggestCard";

const OurSuggest = () => {
  return (
    <section className="our-suggest mt-[30px] sm:mt-[40px] md:mt-[60px] lg:mt-[88px]">
      <div className="mc w-full md:!w-[70%] flex flex-col gap-2 sm:gap-3 md:gap-14">
        <div className="suggest-top flex flex-col gap-1 sm:gap-4 md:gap-5 items-center">
          <h2 className="font-[600] text-2xl md:text-3xl lg:text-4xl">
            Our Suggest
          </h2>
          <h4 className="font-[400] text-lg text-center sm:text-2xl ">
            Lorem ipsum dolor sit amet consectetur. Maecenas nunc{" "}
          </h4>
        </div>

        <div
          className="suggest-bottom   "
        >
          {Array.from({ length:5 }).map((_, idx) => (
            <SuggestCard key={idx} />
          ))}
        </div>

        {/* <div className="flex items-center justify-center flex-col md:flex-row gap-10 md:gap-14">
          <div className="w-full md:w-[300px]">
            <SuggestCard />
          </div>
          <div className="w-full md:w-[300px]">
            <SuggestCard />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurSuggest;
