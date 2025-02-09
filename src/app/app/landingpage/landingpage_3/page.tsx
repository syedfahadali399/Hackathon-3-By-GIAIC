"use client"
import Link from "next/link";
import { Poppins } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { useCart } from "@/app/addtocart/cartContext";
import { useWishlist } from "@/app/wishlist/wishlistContext";
import Loading from "./loading";
import Button from "@/app/components/button";

const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ['700']
})

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

const getProduct = async () => {
    try{
        const response:product[] = await client.fetch(`*[_type=="product"][0..11]{
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

const LandingPage_3 = () => {

    const[fetching, useData] = useState<product[]>([])
    const[isloading, setLoading] = useState(true)
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const fetchdata = await getProduct()
                useData(fetchdata)
            } catch(error) {
                console.error("Failed to fetch data", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return(
        <div className={fontPoppins.className}>
          <section className="w-full flex flex-col gap-[64px] mt-[64px]">

            <div className="w-full h-[48px] text-center flex flex-row items-center justify-center justify-items-center">
              <h1 className="w-[309px] h-[48px] text-[40px] text-[#3A3A3A] font-bold max-mm:text-[36px] max-sm:text-[32px]">Our Collection</h1>
            </div>

            <div className="grid grid-cols-4 gap-[48px] justify-items-center max-xl:grid-cols-3 max-lt:grid-cols-2 max-st:flex max-st:flex-col max-st:items-center">

             {isloading? (
                <Loading/>
             ): (fetching.map((render:product) => {
                return(
        
                 <div className="relative group w-[285px] h-[490px] bg-gray-100 overflow-hidden rounded-lg shadow-md max-lg:w-[260px]">
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
                       <div className="w-[285px] h-[200px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-lg:w-[260px]">
                          <div className="w-[250px] h-[90px] flex flex-col gap-[12px]">
                             <h1 className="font-semibold text-[14px] text-[#3A3A3A] w-[250px] h-[85px]">{render.title}</h1>
                         </div>
                         <div className="w-[250px] h-[30px] flex flex-row gap-[12px] items-center">
                             <p className="w-[250px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-lg:text-[18px] max-lg:w-[125px]">{render.price}$</p>
                             <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-lg:text-[14px] max-lg:w-[100px]">{render.discountPercentage}% OFF</p>
                         </div>
                         
                      </div>
                   </div>
                )
             }))}

            </div>

             <div className="w-full flex flex-row text-center items-center justify-center justify-items-center">
               <Link href={`/shopSection`}><Button value="Show More"></Button></Link>
             </div>
           </section>
         </div>
    )
}

export default LandingPage_3;