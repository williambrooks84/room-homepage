import type { DescriptionProps } from "../../interfaces/dataDefinitions"
import HeroShopButton from "./HeroShopButton";
import arrow from "../../assets/svg/icon-arrow.svg";


export default function HeroDescription({title, text}: DescriptionProps){
    return (
            <div className="flex flex-col gap-4 px-8 py-12 lg:px-10 lg:py-6 xl:px-18 xl:py-12">
                <h1 className="text-4xl xl:text-5xl font-bold">{title}</h1>
                <p className="text-grey-500">{text}</p>
                <HeroShopButton id="shop-now" label="Shop now" action={() => console.log("shop")} aria="Shop now" image={arrow} alt="Shop now"/>
            </div>
    )
}