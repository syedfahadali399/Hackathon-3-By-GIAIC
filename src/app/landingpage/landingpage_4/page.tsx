"use client"
import { client } from "@/sanity/lib/client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import Button from "@/app/components/button";
import Loading from "./loading";
import Link from "next/link";

const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ['700']
})

interface data {
    image: string
    isNew: boolean
}

const gettingProductdata = async () => {
    try{
        const response:data[] = await client.fetch(`*[_type=="product"][26..26]{
            "image": image.asset->url,
            isNew
        }`)
        return response
    } catch(error) {
        console.log("Failed To Fetch Data", error)
        return []
    }
}


const LandingPage_4 = () => {

    const[fetching, UseData] = useState<data[]>([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchingdata = async () => {
            try{
                setLoading(true)
                const fetchdata = await gettingProductdata()
                UseData(fetchdata)
            } catch (error) {
                console.log("Failed To Failed data", error)
            } finally {
                setLoading(false)
            }
        }
        fetchingdata()
    }, [])

    return(
        <div className={fontPoppins.className}>
           <section className="bg-[#f3f2ee] flex items-center justify-center h-[700px] max-xl:h-[550px] max-lt:h-[450px] mt-20 mb-20 max-mt:h-[600px] max-st:h-[850px]">
               <div className="flex flex-row justify-evenly gap-16 max-lg:gap-8 max-mt:flex-col">
                  <div className="flex flex-col gap-6 items-center justify-center">
                      <p className="text-gray-700 font-semibold text-4xl cursor-pointer max-2xl:text-3xl max-lt:text-2xl max-mt:text-3xl max-lm:text-2xl">Men's Shirt</p>
                      <p className="text-red-700 font-bold text-6xl cursor-pointer max-2xl:text-5xl max-xl:text-4xl max-lt:text-3xl max-mt:text-4xl max-lm:text-3xl">Kids Hoodie</p>
                      <p className="text-gray-700 font-semibold text-4xl cursor-pointer max-2xl:text-3xl max-lt:text-2xl max-mt:text-3xl max-lm:text-2xl">Women Pants</p>
                  </div>
                  <div>
                    {loading? (
                        <Loading/>
                    ) : (fetching.map((render:data) => {
                        return(
                            <img className="w-[500px] h-[500px] mix-blend-multiply max-2xl:w-[435px] max-2xl:h-[435px] max-xl:w-[375px] max-xl:h-[375px] max-lg:w-[350px] max-lg:h-[350px] max-lt:w-[300px] max-lt:h-[300px] max-mt:hidden" src={render.image} alt="" />
                        )
                    }))}
                  </div>
                  <div className="flex flex-col gap-6 justify-center max-mt:hidden">
                    <p className="text-red-700 text-2xl font-medium max-lt:text-xl">DEAL OF THE WEEK</p>
                    <h1 className="w-[450px] text-black text-5xl font-bold max-2xl:w-[300px] max-2xl:text-4xl max-xl:text-3xl max-xl:w-[250px] max-lg:w-[205px]">Kid Ultimate Hoodie For Winters</h1>
                    <Link href={`/shopSection`}><Button value="Shop Now!"></Button></Link>
                  </div>
                  <div className="flex flex-row gap-4 justify-center items-center max-st:flex-col max-st:gap-12">
                    <div className="hidden flex-col gap-4 justify-center max-mt:flex max-st:items-center">
                       <p className="text-red-700 text-2xl font-medium max-lt:text-xl max-st:text-2xl max-lm:text-xl">DEAL OF THE WEEK</p>
                       <h1 className="w-[450px] text-black text-5xl font-bold max-2xl:w-[300px] max-2xl:text-4xl max-xl:text-3xl max-xl:w-[250px] max-lg:w-[205px] max-st:w-[300px] max-lm:text-2xl">Kid Ultimate Hoodie For Winters</h1>
                      <Button value="Shop Now!"></Button>
                  </div>
                  {loading? (
                        <Loading/>
                    ) : (fetching.map((render:data) => {
                        return(
                            <img className="hidden w-[500px] h-[500px] mix-blend-multiply max-2xl:w-[435px] max-2xl:h-[435px] max-xl:w-[375px] max-xl:h-[375px] max-lg:w-[350px] max-lg:h-[350px] max-lt:w-[300px] max-lt:h-[300px] max-mt:block" src={render.image} alt="" />
                        )
                    }))}
                  </div>
               </div>
           </section>
        </div>
    )
}

export default LandingPage_4