import type { HeroShopButtonProps } from "../../interfaces/dataDefinitions";

export default function HeroShopButton({ id, action, label, aria, image, alt }: HeroShopButtonProps) {
    return (
        <button
            type="button"
            id={id}
            aria-label={aria}
            onClick={action}
            className="group flex items-center gap-4 py-4 cursor-pointer"
        >
            <span className="text-black group-hover:text-grey-500 group-focus:text-grey-500 uppercase tracking-[1rem] transition-colors">
                {label}
            </span>

            <img
                src={image}
                alt={alt}
                className="block w-10 h-auto shrink-0 transition-opacity group-hover:opacity-50"
            />
        </button>
    );
}