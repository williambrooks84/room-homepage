import logo from "../../assets/svg/logo.svg";

export default function Logo() {
    return (
        <div className="flex items-center">
            <img
                src={logo}
                alt="Room logo"
                className="block h-5 w-auto"
            />
        </div>
    );
}