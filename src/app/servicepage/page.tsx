let ServicePage = () => {
    return(
        <section className="h-[270px] bg-[#f3f2ee] max-lg:h-[300px] max-st:h-[400px]">
        <div className="h-[270px] flex flex-row gap-[42px] items-center justify-center max-2xl:gap-[24px] max-xl:grid max-xl:grid-cols-2 max-xl:justify-items-center max-lg:h-[300px] max-st:flex max-st:flex-col max-st:h-[400px]">
            <div className="h-[70px] gap-[10px] flex flex-row items-center">
                <img className="w-[60px] h-[60px] max-lt:w-[45px] max-lt:h-[45px]" src="/shopicon/imagefour.png" alt="imgfour" />
                <div className="w-full h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424] max-lt:text-[20px]">High Quality</p>
                    <p className="w-[275px] h-[30px] font-medium text-[20px] text-[#898989] max-lt:text-[16px] max-lt:w-[188px] max-st:w-[214px]">Crafted from top materials</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center max-lt:ml-[11px] max-st:ml-[0px]">
                <img className="w-[60px] h-[60px] max-lt:w-[45px] max-lt:h-[45px]" src="/shopicon/imagefive.png" alt="imgfive" />
                <div className="h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[278px] h-[38px] font-semibold text-[25px] text-[#242424] max-lt:text-[20px] max-lt:w-[215px]">Warranty Protection</p>
                    <p className="w-[136px] h-[30px] font-medium text-[20px] text-[#898989] max-lt:text-[16px]">Over 1 Month</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center max-st:mr-[28px]">
                <img className="w-[60px] h-[60px] max-lt:w-[45px] max-lt:h-[45px]" src="/shopicon/imagesix.png" alt="imgsix" />
                <div className="w-full h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[180px] h-[38px] font-semibold text-[25px] text-[#242424] max-lt:text-[20px]">Free Shipping</p>
                    <p className="w-[163px] h-[30px] font-medium text-[20px] text-[#898989] max-lt:text-[16px]">Order over 150 $</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center max-st:mr-[16px]">
                <img className="w-[60px] h-[60px] max-lt:w-[45px] max-lt:h-[45px]" src="/shopicon/imageseven.png" alt="imgseven" />
                <div className="h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424] max-lt:text-[20px]">24 / 7 Support</p>
                    <p className="w-[189px] h-[30px] font-medium text-[20px] text-[#898989] max-lt:text-[16px]">Dedicated support</p>
                </div>
            </div>
        </div>
      </section>
    )
}

export default ServicePage