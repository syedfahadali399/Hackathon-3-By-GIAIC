"use client"
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/addtocart/cartContext";
import { product } from "@/sanity/schemaTypes/product";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/app/wishlist/wishlistContext";
import ServicePage from "@/app/servicepage/page";
import Link from "next/link";
import Loading from "./loading";
import Button from "@/app/components/button";
import FollowCursor from "@/app/cursor/page";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

interface product {
    id: number
    title: string,
    price: number,
    description: string,
    discountPercentage: number,
    image: string,
    isNew: boolean
    quantity: number
}

const navLinks = [
  { name: "Default", href: "/shopSection"},
  { name: "Mens", href: "/shopSection/mens"},
  { name: "Womens", href: "/shopSection/womens"},
  { name: "Kids", href: "/shopSection/kids"},
]

const importingData = async () => {
    try{
        const response:product[] = await client.fetch(`*[_type=="product"][0..17]{
            title,
            price,
            description,
            discountPercentage,
            "image": image.asset->url,
            isNew
        }`)
        return response
    } catch(error) {
        console.log("Failed to Fetch Data", error)
        return []
    }
}

const MenSection = () => {

  const[fetching, useData] = useState<product[]>([])
  const[isloading, setLoading] = useState(true)
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true)
        const fetchdata = await importingData()
        useData(fetchdata)
      } catch(error) {
        console.error("Failed to fetch data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const PathName = usePathname()
  
  return (
    <section className={fontPoppins.className}>
      {/* Landing Page 1 */}
      <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] max-lt:h-[250px]">
        <div className="flex flex-col h-[300px] items-center justify-center max-lt:h-[250px]">
          <div className="w-[124px] h-[72px]">
            <h1 className="w-[124px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">
              Shop
            </h1>
          </div>
          <div className="flex flex-row gap-[8px]">
            <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">
              Home
            </p>
            <img
              className="w-[20px] h-[20px]"
              src="/shopicon/sidearrow.png"
              alt="sidearrow"
            />
            <p className="w-[41px] h-[24px] font-light text-[14px] text-[#000000]">
              Shop
            </p>
          </div>
        </div>
      </div>

      {/* Landing Page 2 */}
      <div className="w-full bg-[#f3f2ee] h-[100px] flex items-center justify-around max-lt:flex-col max-lt:h-[175px] max-lm:h-[200px] max-mm:h-[250px]">
        <div className="flex flex-row gap-[34px] items-center max-lg:gap-[24px] max-lt:pt-[24px] max-lm:grid max-lm:grid-cols-2 max-lm:items-center max-lm:justify-center max-lm:justify-items-center max-mm:pt-[12px] max-mm:w-[340px] max-sm:w-[280px]">
          <div className="w-[105px] h-[30px] flex flex-row gap-[8px] items-center">
            <img
              className="w-[25px] h-[25px]"
              src="/shopicon/iconone.png"
              alt="iconone"
            />
            <p className="w-[68px] h-[30px] font-normal text-[24px] text-[#000000]">
              Filter
            </p>
          </div>
          <img
            className="w-[28px] h-[28px]"
            src="/shopicon/icontwo.png"
            alt="icontwo"
          />
          <img
            className="w-[24px] h-[24px]"
            src="/shopicon/iconthree.png"
            alt="iconthree"
          />
          <div className="w-[215px] h-[24px] max-lm:w-[185px] max-mm:w-[156px] max-sm:w-[80px] max-sm:h-[38px]">
            <p className="w-[215px] h-[24px] font-normal text-[16px] text-[#000000] max-lm:text-[14px] max-lm:w-[185px] max-mm:w-[156px] max-mm:text-[12px] max-sm:w-[80px] max-sm:h-[38px]">
              Showing 1–18 of 44 results
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[34px] max-lg:gap-[24px] max-mm:justify-between max-lm:w-[400px] max-mm:w-[340px] max-sm:w-[280px] max-lm:justify-items-center">
          <div className="h-[55px] flex flex-row items-center gap-[12px] max-mm:flex-col max-mm:h-[75px]">
            <p className="w-[54px] h-[30px] font-normal text-[20px] text-[#000000]">
              Show
            </p>
            <div className="w-[55px] flex flex-col items-center justify-center bg-[#FFFF]">
              <p className="w-[30px] h-[30px] font-normal text-[20px] text-[#9F9F9F]">
                18
              </p>
            </div>
          </div>

          <div className="h-[55px] flex flex-row items-center gap-[12px] max-mm:flex-col max-mm:h-[75px]">
            <p className="w-[85px] h-[30px] font-normal text-[20px] text-[#000000]">
              Short by
            </p>
            <div className="w-[116px] flex flex-col items-center justify-center bg-[#FFFF] max-sm:w-[125px]">
              <p className="w-[72px] h-[30px] font-normal text-[20px] text-[#9F9F9F]">
              <select name="slection" id="">choose
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="default">default</option>
              </select>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-12 text-center m-12 max-lg:gap-9 max-lt:gap-7 max-mt:grid max-mt:grid-cols-2 max-mt:justify-items-center max-lm:flex max-lm:flex-col max-lm:items-center">
               {navLinks.map((link) => {
                   const isActive = PathName.startsWith(link.href)
                   return(
                      <div>
                        <div className={isActive ? "flex flex-row justify-center items-center text-center border-2 border-white  rounded-xl w-[180px] h-[80px] max-lg:w-[160px] max-lg:h-[60px] max-lt:w-[130px] bg-red-600 text-white" : "flex flex-row justify-center items-center rounded-xl border-2 border-sky-100 text-center w-[150px] h-[80px] max-lg:w-[110px] max-lg:h-[60px] bg-black text-white hover:bg-red-600 hover:transition-all"}>
                          <Link href={link.href} className={isActive ? "font-semibold text-white" : "font-medium text-white"}>{link.name}</Link>
                        </div>
                      </div>  
                    )
                })}
            </div>

      {/* Landing Page 3 */}
      <section className="w-full flex flex-col gap-[64px] mt-24 mb-14">
        <div className="grid grid-cols-4 gap-[42px] justify-items-center max-2xl:gap-[24px] max-xl:grid-cols-3 max-lt:grid-cols-2 max-lt:gap-[36px] max-st:flex max-st:flex-col max-st:items-center">

        {isloading? (
                <Loading/>
             ): (fetching.map((render:product) => {
                return(
        
                 <div className="relative group w-[285px] h-[545px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
                      <div className="w-[48px] h-[48px] flex items-center justify-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-lg:left-52">
                            <div className="w-[26px] h-[24px] text-[#FFFF] text-[16px] font-medium">{render.discountPercentage}%</div>
                       </div>
                      {/* Background Image */}
                       <div className="w-[285px] h-[301px] max-lg:w-[260px]">
                         <img src={render.image} alt="Product" className="w-[285px] h-[301px] max-lg:w-[260px]"/>
                      </div>
  
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col gap-3 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Add to Cart Button */}
                          <button onClick={() => addToCart(render)} className="mb-4 px-6 py-2 bg-[#FFFF] text-red-600 font-semibold shadow-md hover:bg-[#FFFF]">
                            Add to Cart
                          </button>
                          {/* Share, Compare, Like */}
                         <div className="flex space-x-6 text-white">
                             <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                                <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconone.png" alt="iconone" />
                                <span>Share</span>
                             </div>
                             <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                                <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageicontwo.png" alt="icontwo" />
                                <span>Compare</span>
                             </div>
                             <div onClick={() => addToWishlist(render)} className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                                <img className="w-[28px] h-[28px]" src="/cartsectionicon/imageiconthree.png" alt="iconthree" />
                                <span>Like</span>
                             </div>
                         </div>
                         <div className="flex flex-row gap-1 items-center">
                              <p className="text-sm font-semibold text-white cursor-pointer underline">Click Here To See Product Detail</p>
                              <img className="w-6" src="/link.png" alt="link-icon"/>
                         </div>
                       </div>
                       {/* Product Details */}
                       <div className="w-[285px] h-[245px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
                          <div className="w-[250px] h-[90px] flex flex-col gap-[12px]">
                             <h1 className="font-semibold text-[14px] text-[#3A3A3A] w-[250px] h-[85px]">{render.title}</h1>
                         </div>
                         <div className="w-[250px] h-[30px] flex flex-row gap-[12px] items-center">
                             <p className="w-[250px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">{render.price}$</p>
                             <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-lg:text-[14px] max-lg:w-[100px]">{render.discountPercentage}% OFF</p>
                         </div>
                         <Button value="Add to Cart!"></Button>
                      </div>
                   </div>
                )
             }))}

        </div>

        <div className="w-full h-[90px] flex flex-row items-center justify-center gap-[24px]">
          <div className="w-[60px] h-[60px] max-mm:w-[50px] max-mm:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black hover:bg-red-600 cursor-pointer">
            <p className="w-[7px] h-[30px] text-[#FFFF]">1</p>
          </div>
          <div className="w-[60px] h-[60px] max-mm:w-[50px] max-mm:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black hover:bg-red-600 cursor-pointer">
            <p className="w-[7px] h-[30px] font-semibold text-white">2</p>
          </div>
          <div className="w-[60px] h-[60px] max-mm:w-[50px] max-mm:h-[50px] max-sm:w-[40px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black hover:bg-red-600 cursor-pointer">
            <p className="w-[7px] h-[30px] text-white">3</p>
          </div> hover:bg-red-600
          <div className="w-[98px] h-[60px] max-mm:w-[85px] max-mm:h-[50px] max-sm:w-[75px] max-sm:h-[40px] flex flex-col items-center justify-center bg-black hover:bg-red-600 cursor-pointer">
            <p className="w-[43px] h-[30px] text-[20px] font-light text-white">
              Next
            </p>
          </div>
        </div>
      </section>

      {/* Landing Page 4*/}
      <ServicePage></ServicePage>

      <FollowCursor/>
    </section>
  );
};

export default MenSection;