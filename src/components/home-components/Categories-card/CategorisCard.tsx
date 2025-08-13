import categoryBG from '../../../images/home-imges/categoriesbg.png'


const CategorisCard = () => {
  return (
    <div  className="w-full relative h-[302px] md:h-[352px] rounded-[12px] overflow-hidden  ">
        <img className="w-full h-full  bg-[#000000]  opacity-80"  src={categoryBG} alt="BG" />
         <div className="absolute inset-0 bg-black/60  "></div>

        <div className='flex  flex-col gap-2 absolute bottom-4 left-4'>
                <h4 className='font-[500] text-2xl text-white sm:text-3xl '>Macbook Pro </h4>
                <h5 className='text-white'>from <span className='text-xl text-[#ff5b00] sm:text-2xl font-[700] '>800$</span></h5>
                <button className='mybtn h-8 w-[130px] rounded-[7px] text-lg flex items-center justify-center font-[600] '>Order now</button>
        </div>

    </div>
  )
}

export default CategorisCard