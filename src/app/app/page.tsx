import { Poppins } from "next/font/google";
import LandingPage_1 from "./landingpage/landingpage_1/page";
import LandingPage_2 from "./landingpage/landingpage_2/page";
import LandingPage_3 from "./landingpage/landingpage_3/page";
import LandingPage_4 from "./landingpage/landingpage_4/page";
import Button from "./components/button";
import FollowCursor from "./cursor/page";

const fontPoppins = Poppins({ subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
    <div>
      {/* Landing Page 1*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[716.83px] bg-[url('/backgroundpage.png')] bg-cover bg-center bg-no-repeat max-mt:h-[526px]">
          <div className="w-full flex flex-row items-center h-[716.83px] max-mt:h-[526px]">
            <div className="w-[643px] h-[463px] mt-20 bg-white flex justify-center items-center max-xl:w-[600px] max-xl:h-[400px] ml-[128px] max-xl:ml-[54px] max-lg:w-[550px] max-lg:h-[375px] max-lg:ml-[36px] max-lt:w-[450px] max-lt:h-[350px] max-mt:ml-[24px] max-mt:w-[375px] max-mt:h-[325px] max-st:w-[300px] max-st:h-[335px] max-mm:w-[250px] max-mm:ml-[16px]">
              <div className="w-[561px] h-[364px] flex flex-col justify-evenly gap-[12px] max-lg:w-[500px] max-lg:h-[300px] max-lt:w-[400px] max-lt:h-[275px] max-mt:w-[350px] max-mt:h-[300px] max-st:w-[275px] max-st:h-[290px] max-mt:justify-center max-mm:w-[225px]">
                <div className="w-[250px] h-[24px]">
                  <h1 className="w-[250px] h-[24px] font-semibold text-xl text-red-600">SUMMER COLLECTION</h1>
                </div>
                <p className="w-[447px] h-[98px] font-bold text-5xl text-black max-xl:text-[38px] max-lg:text-[32px] max-lg:h-[66px] max-lt:w-[375px] max-lt:text-[32px] max-lt:h-[86px] max-mt:w-[340px] max-mt:text-[26px] max-mt:h-[56px] max-st:w-[275px] max-mm:w-[225px] max-mm:text-[22px] max-mm:h-[45px]">Discover Our New Collection</p>
                <p className="w-[546px] h-[52px] font-medium text-[18px] text-[#333333] max-lg:w-[500px] max-lg:h-[85px] max-lt:w-[400px] max-lt:h-[72px] max-lt:text-[16px] max-mt:w-[340px] max-mt:h-[95px] max-st:w-[275px] max-st:h-[100px] max-mm:w-[225px] max-mm:text-[14px]">A specialist label creating luxury essentials. Ethically crafted with an unwavering
                commitment to exceptional quality.</p>
                <Button value="Shop Now!"></Button>
             </div>
           </div>
         </div>
       </section>
      </div>
      
      {/* Landing Page 2 */}
      <LandingPage_1/>

      {/* Landing Page 3 */}
      <LandingPage_2/>

      {/* Landing Page 4 */}
      <LandingPage_3/>

      {/* Landing Page 5*/}
      <LandingPage_4/>

      <FollowCursor/>
    </div>
  );
}