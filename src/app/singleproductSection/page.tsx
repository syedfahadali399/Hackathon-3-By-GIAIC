import { Poppins } from "next/font/google";
import Link from "next/link";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let SingleProductSection = () => {
    return(
        <section className={fontPoppins.className}>
            
        </section>
    )
}

export default SingleProductSection