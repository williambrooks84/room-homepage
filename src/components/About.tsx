import imageDark from "../assets/images/image-about-dark.jpg";
import imageLight from "../assets/images/image-about-light.jpg";
import AboutDescription from "../ui/About/AboutDescription";

const aboutContent = {
    title: "About our furniture",
    text: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
};

export default function About() {
    return (
        <section id="about" className="flex flex-col lg:flex-row">
            <img src={imageDark} alt="Dark about illustration" className="w-full h-fit lg:w-1/3" />
            <AboutDescription title={aboutContent.title} text={aboutContent.text} />
            <img src={imageLight} alt="Light about illustration" className="w-full h-fit lg:w-1/3" />
        </section>
    )
}