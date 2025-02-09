import { Poppins } from "next/font/google";
import ServicePage from "../servicepage/page";
import FollowCursor from "../cursor/page";
import Link from "next/link";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const BlogSection = () => {
    return(
        <section className={fontPoppins.className}>
             {/* Landing Page 1 */}
             <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
              <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
                  <div className="w-[115px] h-[72px]">
                     <h1 className="w-[115px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Blog</h1>
                 </div>
                 <div className="flex flex-row gap-[8px] items-center">
                     <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
                     <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
                     <p className="w-[42px] h-[20px] font-light text-[14px] text-[#000000]">Blog</p>
                 </div>
             </div>
           </div>

           {/* Landing Page 2 */}
           <section className="h-[3000px] mt-[100px] max-xl:h-[2800px] max-lt:h-[2525px] max-mt:p-[16px] max-st:h-[3575px] max-sm:h-[3700px]">
            <div className="flex flex-row gap-[32px] justify-evenly max-st:flex-col">
               <div className="flex flex-col gap-[48px]">
                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[775px] max-lt:gap-[26px] max-lt:h-[750px] max-mt:h-[725px] max-st:items-center max-sm:h-[775px]">
                       <div className="w-[800px] h-[517px] max-xl:w-[550px] max-xl:h-[355px] max-lg:w-[475px] max-lg:h-[308px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]">
                         <img className="w-[800px] h-[517px] max-xl:w-[550px] max-xl:h-[355px] max-lg:w-[475px] max-lg:h-[308px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]" src="/blogimg/imgone.jpg" alt="imgone" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">14 Dec 2024</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[42px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Ideas</p>  
                           </div>
                       </div>
                       <h1 className="h-[85px] font-medium text-[30px] text-red-600 max-lg:text-[26px] max-lg:h-[75px] max-lt:text-[22px] max-lt:h-[65px] max-mt:text-[18px] max-mt:h-[50px] max-sm:text-[16px] max-xl:w-[550px] max-lg:w-[475px] max-lt:w-[425px] max-mt:w-[325px] max-sm:w-[280px]">Why Jacquard Fabric is a Must-Have for Your Winter</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F] max-lg:w-[425px] max-lg:h-[225px] max-lt:w-[375px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[325px] max-sm:w-[280px] max-sm:h-[360px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000] cursor-pointer hover:text-red-600">Read more</p>
                          <hr className="w-[89px] border border-[#000000] hover:text-red-600"/>
                       </div>
                   </div>

                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[950px] max-lt:gap-[26px] max-lt:h-[750px] max-mt:h-[725px] max-st:items-center max-sm:h-[775px]">
                       <div className="w-[800px] max-xl:w-[550px] h-[517px] max-lg:w-[475px] max-lg:h-[517px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]">
                         <img className="w-[800px] h-[517px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]" src="/blogimg/imgtwo.jpg" alt="imgtwo" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[100px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[90px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">25 Jan 2025</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[97px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Gul Ahmed</p>  
                           </div>
                       </div>
                       <h1 className="h-[85px] font-medium text-[30px] text-red-600 max-lg:text-[26px] max-lg:h-[75px] max-lt:text-[22px] max-lt:h-[65px] max-mt:text-[18px] max-mt:h-[55px] max-sm:text-[16px] max-xl:w-[550px] max-lg:w-[475px] max-lt:w-[425px] max-mt:w-[325px] max-sm:w-[280px]">Discover the Best Unstitched Winter Dresses</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F] max-lg:w-[425px] max-lg:h-[225px] max-lt:w-[375px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[325px] max-sm:w-[280px] max-sm:h-[360px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000] cursor-pointer hover:text-red-600">Read more</p>
                          <hr className="w-[89px] border border-[#000000] hover:text-red-600"/>
                       </div>
                   </div>

                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[775px] max-lt:gap-[26px] max-lt:h-[750px] max-mt:h-[725px] max-st:items-center max-sm:h-[775px]">
                       <div className="w-[800px] max-xl:w-[550px] h-[517px] max-xl:h-[355px] max-lg:w-[475px] max-lg:h-[308px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]">
                         <img className="w-[800px] h-[517px] max-xl:w-[550px] max-xl:h-[355px] max-lg:w-[475px] max-lg:h-[308px] max-lt:w-[425px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[225px] max-sm:w-[280px]" src="/blogimg/imgthree.jpg" alt="imgthree" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">3 feb 2025</p>  
                           </div>
                           <div className="flex flex-row gap-[8px] items-center">
                             <img className="w-[20px] h-[20px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F] max-lt:text-[14px] max-lt:w-[42px] max-lt:h-[20px] hover:text-red-600 cursor-pionter">Wood</p>  
                           </div>
                       </div>
                       <h1 className="h-[45px] font-medium text-[30px] text-red-600 max-lg:text-[26px] max-lg:h-[40px] max-lt:text-[22px] max-lt:h-[35px] max-mt:text-[18px] max-mt:h-[30px] max-sm:text-[16px] max-xl:w-[550px] max-lg:w-[475px] max-lt:w-[425px] max-mt:w-[325px] max-sm:w-[280px]">The Ultimate Guide to the 11.11 Sale</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F] max-lg:w-[425px] max-lg:h-[225px] max-lt:w-[375px] max-lt:h-[275px] max-mt:w-[325px] max-mt:h-[325px] max-sm:w-[280px] max-sm:h-[360px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000] cursor-pointer hover:text-red-600">Read more</p>
                          <hr className="w-[89px] border border-[#000000] hover:text-red-600"/>
                       </div>
                   </div>
               </div>  
               <div className="flex flex-col gap-[48px] max-st:items-center">
                  <div className="w-[360px] h-[537px] flex flex-col gap-[16px] items-center max-lg:w-[320px] max-lt:w-[275px] max-mt:w-[250px] max-st:h-[453px]">
                    <div className="w-[320px] h-[52px] border border-[#9F9F9F] rounded-[12px] p-[14px] max-lg:w-[300px] max-lt:w-[250px] max-mt:w-[225px]">
                        <input type="text" placeholder="Sreach Here" required/>
                    </div>
                    <div className="w-[320px] h-[353px] flex flex-col gap-[32px] mt-[32px] max-lg:w-[300px] max-lt:w-[250px] max-mt:w-[225px]">
                        <h2 className="w-[134px] h-[36px] font-medium text-[24px] text-red-600">Categories</h2>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between max-lg:w-[280px] max-lt:w-[250px] max-mt:w-[225px]">
                            <Link href={`/shopSection/mens`} className="w-[49px] h-[24px] font-normal text-[16px] text-[#9F9F9F] hover:text-red-600">Mens</Link>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">2</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between max-lg:w-[280px] max-lt:w-[250px] max-mt:w-[225px]">
                            <Link href={`/shopSection`} className="w-[55px] h-[24px] font-normal text-[16px] text-[#9F9F9F] hover:text-red-600">Default</Link>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">8</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between max-lg:w-[280px] max-lt:w-[250px] max-mt:w-[225px]">
                            <Link href={`/shopSection/womens`} className="w-[91px] h-[24px] font-normal text-[16px] text-[#9F9F9F] hover:text-red-600">Womens</Link>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">7</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between max-lg:w-[280px] max-lt:w-[250px] max-mt:w-[225px]">
                            <p className="w-[57px] h-[24px] font-normal text-[16px] text-[#9F9F9F] hover:text-red-600">Interior</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">1</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between max-lg:w-[280px] max-lt:w-[250px] max-mt:w-[225px]">
                            <Link href={`/shopSection/kids`} className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F] hover:text-red-600">Kids</Link>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">6</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="w-[360px] h-[650px] flex flex-col gap-[32px] max-lg:w-[320px] max-lt:w-[275px] max-mt:w-[250px] max-st:h-[548px]">
                    <h2 className="w-[174px] h-[36px] font-medium text-[24px] text-red-600">Recent Posts</h2>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px] max-lg:w-[70px] max-lg:h-[70px]" src="/blogimg/smimgone.jpg" alt="icon-img-one" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[129px] h-[42px] font-normal text-[14px] text-[#000000] hover:text-red-600 cursor-pointer">Going all-in with millennial design</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px] max-lg:w-[70px] max-lg:h-[70px]" src="/blogimg/smimgtwo.jpg" alt="icon-img-two" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[149px] h-[42px] font-normal text-[14px] text-[#000000] hover:text-red-600 cursor-pointer">Exploring new ways of decorating</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px] max-lg:w-[70px] max-lg:h-[70px]" src="/blogimg/smimgthree.jpg" alt="icon-img-three" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[162px] h-[42px] font-normal text-[14px] text-[#000000] hover:text-red-600 cursor-pointer">Handmade pieces that took time to make</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px] max-lg:w-[70px] max-lg:h-[70px]" src="/blogimg/smimgfour.jpg" alt="icon-img-four" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[119px] h-[42px] font-normal text-[14px] text-[#000000] hover:text-red-600 cursor-pointer">Modern home in Milan</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px] max-lg:w-[70px] max-lg:h-[70px]" src="/blogimg/smimgfive.jpg" alt="icon-img-five" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[119px] h-[42px] font-normal text-[14px] text-[#000000] hover:text-red-600 cursor-pointer">Colorful office redesign</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                  </div>
               </div>
            </div>
            <div className="w-full h-[90px] flex flex-row items-center justify-center gap-[24px] mt-[48px]">
          <div className="w-[60px] h-[60px] max-st:w-[50px] max-st:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black cursor-pointer hover:bg-red-600">
            <p className="w-[7px] h-[30px] text-[#FFFF]">1</p>
          </div>
          <div className="w-[60px] h-[60px] max-st:w-[50px] max-st:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black cursor-pointer hover:bg-red-600">
            <p className="w-[7px] h-[30px] font-semibold text-white">2</p>
          </div>
          <div className="w-[60px] h-[60px] max-st:w-[50px] max-st:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black cursor-pointer hover:bg-red-600">
            <p className="w-[7px] h-[30px] text-white">3</p>
          </div>
          <div className="w-[98px] h-[60px] max-st:h-[50px] max-st:w-[75px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black cursor-pointer hover:bg-red-600">
            <p className="w-[43px] h-[30px] text-[20px] font-light text-white">
              Next
            </p>
          </div>
        </div>
        </section>

        {/* Landing Page 3*/}
        <ServicePage></ServicePage>

        <FollowCursor/>
            
        </section>
    )
}

export default BlogSection