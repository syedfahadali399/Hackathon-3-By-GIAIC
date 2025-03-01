import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const SingleProductSection = () => {
    return(
        <section className={fontPoppins.className}>
            
        </section>
    )
}

export default SingleProductSection