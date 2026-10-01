import desktop1 from "../assets/images/desktop-image-hero-1.jpg";
import desktop2 from "../assets/images/desktop-image-hero-2.jpg";
import desktop3 from "../assets/images/desktop-image-hero-3.jpg";
import mobile1 from "../assets/images/mobile-image-hero-1.jpg";
import mobile2 from "../assets/images/mobile-image-hero-2.jpg";
import mobile3 from "../assets/images/mobile-image-hero-3.jpg";
import angleLeft from "../assets/svg/icon-angle-left.svg";
import angleRight from "../assets/svg/icon-angle-right.svg";
import { useState } from "react";
import HeroButton from "../ui/Hero/HeroButton";
import HeroDescription from "../ui/Hero/HeroDescription";

const heroStates = [
    {
        id: 1,
        desktopImage: desktop1,
        mobileImage: mobile1,
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        id: 2,
        desktopImage: desktop2,
        mobileImage: mobile2,
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        id: 3,
        desktopImage: desktop3,
        mobileImage: mobile3,
        title: "Manufactured with the best materials",
        text: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    }
]

export default function Hero() {
    const [currentId, setCurrentId] = useState(1);
    const currentState = heroStates[currentId - 1];

    function goLeft() {
        if (currentId !== 1) {
            setCurrentId(currentId - 1);
        }
    }

    function goRight() {
        if (currentId < heroStates.length) {
            setCurrentId(currentId + 1);
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === "ArrowLeft") {
            goLeft();
        } else if (event.key === "ArrowRight") {
            goRight();
        }
    }

    return (
        <section
            id="hero"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="flex flex-col lg:grid lg:grid-cols-[59%_41%]"
        >
            <div className="relative h-fit">
                <picture className="block">
                    <source
                        media="(max-width: 576px)"
                        srcSet={currentState?.mobileImage}
                    />

                    <img
                        src={currentState?.desktopImage}
                        alt=""
                        className="block w-full"
                    />
                </picture>

                <div className="absolute bottom-0 right-0 flex xl:translate-x-full">
                    <HeroButton
                        id="left-button"
                        onClick={goLeft}
                        aria="Previous slide"
                        disabled={currentId === 1}
                        image={angleLeft}
                        alt="Previous slide"
                    />

                    <HeroButton
                        id="right-button"
                        onClick={goRight}
                        aria="Next slide"
                        disabled={currentId === heroStates.length}
                        image={angleRight}
                        alt="Next slide"
                    />
                </div>
            </div>

            <div className="lg:flex lg:items-center">
                <HeroDescription
                    title={currentState.title}
                    text={currentState.text}
                />
            </div>
        </section>
    )
}