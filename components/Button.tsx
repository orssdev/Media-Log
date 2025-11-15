interface Props {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

export default function Button({ className, onClick, children }: Props) {
    return (
        <button 
            className={`${className} bg-(--color2) font-e rounded-2xl hover:bg-black hover:border-[#8b0000] hover:text-white border transition-colors duration-200 cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}