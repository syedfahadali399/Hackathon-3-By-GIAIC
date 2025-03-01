import { Poppins } from "next/font/google";
import ServicePage from "../servicepage/page";
import Button from "../components/button";
import FollowCursor from "../cursor/page";
import { FormProvider } from "sanity";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let ContactSection = () => {
    return(
        <section className={fontPoppins.className}>
            {/* Landing Page 1 */}
            <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
              <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
                  <div className="w-[202px] h-[72px]">
                     <h1 className="w-[202px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Contact</h1>
                 </div>
                 <div className="flex flex-row gap-[8px] items-center">
                     <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
                     <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
                     <p className="w-[62px] h-[24px] font-light text-[14px] text-[#000000]">Contact</p>
                 </div>
             </div>
           </div>

           {/* Landing Page 2 */}
           <section className="w-full">
              <div className="h-[112px] flex flex-col gap-[16px] text-center justify-center items-center mt-[64px] max-mt:h-[137px] max-st:h-[160px] max-sm:h-[195px]">
                <h1 className="w-[340px] h-[54px] font-semibold text-[32px] text-red-600 max-mm:text-[26px] max-mm:h-[40px] max-sm:w-[280px]">Get In Touch With Us</h1>
                <p className="w-[644px] h-[48px] font-normal text-[16px] text-[#9F9F9F] max-mt:w-[480px] max-mt:h-[75px] max-st:w-[410px] max-st:h-[95px] max-mm:w-[320px] max-sm:w-[280px] max-sm:h-[115px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
              </div>
              <div className="h-[823px] flex flex-row gap-[42px] bg-[#FFFF] justify-evenly mt-[100px] max-lt:mt-[50px] max-mt:flex-col max-mt:items-center max-mt:h-[1250px]">

                <div className="h-[537px] flex flex-col gap-[48px] justify-center">

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[28px] h-[32px]" src="/contacticon/iconone.png" alt="iconone" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[99px] h-[36px] font-semibold text-[24px] text-red-600 max-lt:text-[20px] max-lt:h-[30px]">Address</h2>
                         <p className="w-[212px] h-[72px] font-normal text-[16px] text-[#000000] max-lt:text-[14px] max-lt:h-[45px]">236 5th SE Avenue, New York NY10000, United States</p>
                      </div>  
                    </div>

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[28px] h-[32px]" src="/contacticon/icontwo.png" alt="icontwo" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[76px] h-[36px] font-semibold text-[24px] text-red-600 max-lt:text-[20px] max-lt:h-[30px]">Phone</h2>
                         <p className="w-[212px] h-[48px] font-normal text-[16px] text-[#000000] max-lt:text-[14px] max-lt:h-[40px]">Mobile: +(84) 546-6789
                         Hotline: +(84) 456-6789</p>
                      </div>  
                    </div>

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[32px] h-[32px]" src="/contacticon/iconthree.png" alt="iconthree" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[175px] h-[36px] font-semibold text-[24px] text-red-600 max-lt:text-[20px] max-lt:h-[30px]">Working Time</h2>
                         <p className="w-[214px] h-[50px] font-normal text-[16px] text-[#000000] max-lt:text-[14px]">Monday-Friday: 9:00 - 22:00
                          Saturday-Sunday: 9:00 - 21:00</p>
                      </div>  
                    </div>
                </div>
                <div className="h-[923px]">
                    <div className="h-[741px] flex flex-col gap-[24px] max-mt:items-center">
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between max-lt:justify-evenly">
                          <p className="w-[111px] h-[24px] font-semibold text-[16px] text-red-600 max-lt:font-medium">Address</p>
                          <input className="w-[340px] h-[75px] max-lt:w-[300px] max-lt:h-[55px] border border-[#9F9F9F] rounded-[12px] pl-[24px] max-sm:w-[280px]" type="text" placeholder="Abc" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between max-lt:justify-evenly">
                          <p className="w-[143px] h-[24px] font-semibold text-[16px] text-red-600 max-lt:font-medium">Email address</p>
                          <input className="w-[340px] h-[75px] max-lt:w-[300px] max-lt:h-[55px] border border-[#9F9F9F] rounded-[12px] pl-[24px] max-sm:w-[280px]" type="text" placeholder="AAbc@gmail.com" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between max-lt:justify-evenly">
                          <p className="w-[75px] h-[24px] font-semibold text-[16px] text-red-600 max-lt:font-medium">Subject</p>
                          <input className="w-[340px] h-[75px] max-lt:w-[300px] max-lt:h-[55px] border border-[#9F9F9F] rounded-[12px] pl-[24px] max-sm:w-[280px]" type="text" placeholder="This is an optional" required/>
                        </div>
                        <div className="h-[155px] flex flex-col gap-[8px] justify-between max-lt:justify-evenly">
                          <p className="w-[76px] h-[24px] font-semibold text-[16px] text-red-600 max-lt:font-medium">Message</p>
                          <textarea className="w-[340px] h-[105px] max-lt:w-[300px] max-lt:h-[105px] border border-[#9F9F9F] rounded-[12px] p-[24px] max-lt:p-[14px] max-sm:w-[280px]" placeholder="Hi! i’d like to ask about" required></textarea>
                        </div>
                        <Button value="Submit"></Button>
                    </div>
                </div>
              </div>
           </section>


           {/* Landing Page 3*/}
           <ServicePage></ServicePage>

           <FollowCursor/>
        </section>
    )
}

export default ContactSection