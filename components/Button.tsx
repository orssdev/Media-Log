interface Props {
    onClick?: () => void
}

export default function Button(prop: Props) {
    return (
        <button 
            className="bg-(--color2) w-[200px] h-[50px] text-[36px] font-e rounded-2xl hover:bg-black hover:border-[#8b0000] hover:text-white border transition-colors duration-200 cursor-pointer"
            onClick={prop.onClick}
        >
            Add
        </button>
    );
}