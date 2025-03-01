"use client"
import Button from "@/app/components/button";
import { client } from "@/sanity/lib/client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react"
import Loading from "./loading";
import Link from "next/link";

const fontPoppins = Poppins({ subsets: ['latin'],
    weight: ['700']
})

interface data {
    title: string
    image: string
    isNew: boolean
}

const getData = async () => {
    try{
        const response:data[] = await client.fetch(`*[_type=="product"][11..11]{
            title,
            "image": image.asset->url,
             isNew
        }`)
        return response
    } catch(err) {
        console.log("Failed To Fetched Data", err)
        return []
    }
}

const LandingPage_2 = () => {

    const[loading, isLoading] = useState(true)
    const[fetching, datafetching] = useState<data[]>([])

    useEffect(() => {
        const fetch = async () => {
            try {
                isLoading(true)
                const fetchData = await getData()
                datafetching(fetchData)
            } catch(err) {
                console.log("Failed To Fetched Data", err)
            } finally {
                isLoading(false)
            }
        }
        fetch()
    }, [])

    return(
        
        <section className={fontPoppins.className}>
            <div className="bg-[#f9f9f9] h-[700px] max-xl:h-[550px] max-lt:h-[450px] w-full max-st:h-[600px]">
                <div className="h-[700px] max-xl:h-[550px] max-lt:h-[450px] flex flex-row gap-12 justify-center items-center max-mt:gap-8 max-st:flex-col max-st:h-[600px]">
                    <div className="flex flex-col gap-3 items-center justify-center max-lt:ml-4 max-lm:ml-0">
                        <p className="text-black">#NEW WINTER COLLECTION 2025</p>
                        <h1 className="text-red-700 text-6xl max-2xl:text-5xl max-lt:text-4xl max-mt:text-3xl">NEW MEN'S JACKET</h1>
                        <Link href={`/shopSection`}><Button value="Shop Now!"></Button></Link>
                    </div>
                    <div>
                        {loading? (
                            <Loading/>
                        ) : (fetching.map((render:data, index) => {
                            return(
                                <img key={index} className="mix-blend-multiply max-2xl:w-[435px] max-2xl:h-[435px] max-xl:w-[375px] max-xl:h-[375px] max-lt:w-[325px] max-lt:h-[325px] max-mt:w-[300px] max-mt:h-[300px] max-lt:mr-2" src={render.image} alt={render.title} />
                            )
                        }))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage_2