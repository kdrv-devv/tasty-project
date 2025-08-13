const FaqSection = () => {
  return (
    <section className="faq-section mt-[30px] sm:mt-[40px] md:mt-[60px]">
      <div className="mc flex flex-col items-center gap-5 sm:gap-8">
        <h2>FAQ</h2>
        <div className=" w-full md:w-[55%] flex flex-col gap-4 sm:gap-5 md:gap-6">

          <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Lorem ipsum dolor sit amet consectetur. Sagittis egestas commodo ? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

           <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Lorem ipsum dolor sit amet consectetur. Sagittis egestas commodo ? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

           <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Lorem ipsum dolor sit amet consectetur. Sagittis egestas commodo ? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
