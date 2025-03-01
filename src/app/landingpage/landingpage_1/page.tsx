"use client"
import { client } from "@/sanity/lib/client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import Loading from "./loading";

const fontPoppins = Poppins({ subsets: ['latin'],
    weight: ['700']
})

interface data {
    image: string
    price: number
    id: string
}

const getProduct = async () => {
    try{
        const fetching:data[] = await client.fetch(`*[_type=="product"][33..35]{
            price,
            "image": image.asset->url
            }`)
        return fetching 
    } catch(error) {
        console.error("Failed To Proccess data", error)
        return []
    }
}

const LandingPage_1 = () => {

    const[fetching, UseData] = useState<data[]>([])
    // const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const fetchdata = await getProduct()
                UseData(fetchdata)  
            } catch(err) {
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    return(
      <div className={fontPoppins.className}>
      <section className="w-full h-[825px] flex flex-col gap-[64px] items-center text-center mt-[72px] max-2xl:h-[785px] max-lt:h-[1425px] max-st:h-[1825px] max-lm:h-[1800px] max-mm:h-[1675px] mb-10">
        <div className="w-[575px] h-[99.7px] flex flex-col gap-[24px] text-center items-center max-st:w-[480px] max-st:h-[130px] max-lm:w-[400px] max-mm:w-[340px] max-sm:w-[300px]">
          <h2 className="w-[300px] h-[48px] text-[32px] font-bold text-[#333333] max-mm:text-[28px]">Browse The Range</h2>
          <p className="w-[589px] h-[28px] text-[20px] font-normal text-[#666666] max-st:w-[410px] max-st:h-[60px] max-lm:w-[350px] max-mm:text-[18px] max-sm:w-[300px]">Browse the Ultimate Type of Clothes on our Website</p>
        </div>
        <div className="w-full flex flex-row justify-center gap-[64px] h-[650px] max-2xl:h-[625px] max-xl:gap-[42px] max-lt:grid max-lt:grid-cols-2 max-lt:justify-items-center max-lt:h-[1270px] max-st:flex-col max-st:flex max-st:items-center max-st:h-[1615px] max-lm:h-[1600px] max-mm:h-[1475px]">
          {isLoading?(
            <Loading/>
            ):(fetching.map((render:data) => {
                return(
                    <div className="w-[381px] h-[600px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[610px] max-xl:w-[285px] max-lg:w-[250px] max-lg:h-[615px] max-st:h-[510px] max-mm:h-[455px]">
                       <img className="max-mt:h-[500px] max-st:h-[450px] max-lm:h-[425px] max-mm:h-[400px]" src={render.image} alt={render.id} />
                       <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333] max-lg:text-[20px]">{render.price}$</p>
                       <hr className="bg-black"/>
                    </div>
                )
            }))}
        </div>
      </section>
    </div>
    )
}

export default LandingPage_1