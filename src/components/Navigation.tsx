import { useState } from "react";
import NavigationButton from "../ui/Navigation/NavigationButton";
import Logo from "../ui/Navigation/Logo";
import iconHamburger from "../assets/svg/icon-hamburger.svg";
import iconClose from "../assets/svg/icon-close.svg";

const buttons = [
    { id: "home", label: "home", aria: "Home page", action: () => console.log("home") },
    { id: "shop", label: "shop", aria: "Shop page", action: () => console.log("shop") },
    { id: "about", label: "about", aria: "About page", action: () => console.log("about") },
    { id: "contact", label: "contact", aria: "Contact page", action: () => console.log("contact") },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="absolute top-0 left-0 z-20 w-full bg-transparent px-6 py-12 md:px-12">
            <div className="flex items-center md:gap-12">
                <input
                    id="menu-toggle"
                    type="checkbox"
                    className="sr-only"
                    onChange={handleMenuToggle}
                />

                <label
                    htmlFor="menu-toggle"
                    className="relative z-30 flex cursor-pointer items-center md:hidden"
                >
                    <img
                        src={isMenuOpen ? iconClose : iconHamburger}
                        alt={isMenuOpen ? "Close menu" : "Open menu"}
                        className="block h-4 w-auto"
                    />
                </label>

                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <Logo />
                </div>

                <nav aria-label="Main navigation">
                    <ul className="hidden gap-6 md:flex">
                        {buttons.map((button) => (
                            <NavigationButton
                                key={button.id}
                                id={button.id}
                                label={button.label}
                                aria={button.aria}
                                action={button.action}
                            />
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className={`absolute inset-0 z-20 flex items-center justify-end gap-5 bg-white px-6 py-12 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"}`}>
                {buttons.map((button) => (
                    <NavigationButton
                        key={button.id}
                        id={button.id}
                        label={button.label}
                        aria={button.aria}
                        action={button.action}
                    />
                ))}
            </ul>
        </header>
    );
}