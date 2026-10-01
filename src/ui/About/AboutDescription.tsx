import type { DescriptionProps } from "../../interfaces/dataDefinitions"


export default function AboutDescription({title, text}: DescriptionProps){
    return (
            <div className="flex flex-col gap-4 px-8 py-12 lg:py-6 xl:px-18 xl:py-12">
                <h1 className="text-xl font-bold uppercase tracking-[0.5rem]">{title}</h1>
                <p className="text-grey-500">{text}</p>
            </div>
    )
}