import Logo from "./Logo";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-(--hh) bg-black items-center border-b-2 border-(--color2) font-bs px-[50px]">
            <Logo />
        </header>
    );
}