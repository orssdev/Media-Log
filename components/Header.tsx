import Logo from "./Logo";

export default function Header() {
    return (
        <header className="w-full h-[75px] bg-black items-center border-b-2 border-(--color2) font-bs px-[50px]">
            <Logo />
        </header>
    );
}