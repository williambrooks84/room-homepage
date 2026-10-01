import type { NavigationButtonProps } from "../../interfaces/dataDefinitions";

export default function NavigationButton({id, action, label, aria}: NavigationButtonProps) {
    return (
        <li className="group">
            <button
                type="button"
                id={id}
                onClick={action}
                aria-label={aria}
                className="text-black md:text-white"
            >
                {label}
            </button>

            <span className="block h-0.5 max-w-0 mx-auto bg-black transition-all duration-500 group-hover:max-w-1/2 group-focus-within:max-w-1/2 md:bg-white"></span>
        </li>
    );
}