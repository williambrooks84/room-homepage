import type { HeroButtonProps } from "../../interfaces/dataDefinitions";

export default function HeroButton({id, onClick, disabled, image, alt, aria }: HeroButtonProps) {
    return (
        <button
            id={id}
            type="button"
            aria-label= {aria}
            onClick={onClick}
            disabled={disabled}
            className="flex items-center justify-center bg-black px-5 py-4 lg:px-7.5 lg:py-6 hover:bg-gray-500 focus:bg-gray-500 transition-colors"
        >
            <img
                src={image}
                alt={alt}
                className="block w-2 h-4 md:w-3.5 md:h-6"
            />
        </button>
    );
}