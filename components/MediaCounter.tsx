interface Props {
    media: String;
    count: number;
}

export default function MediaCounter(prop: Props) {
    return (
        <div className="w-(--MediaCounter) h-full flex flex-col justify-center items-center mt-[25px] gap-[25px] font-bs">
            <h1 className="text-[64px]">{prop.media}</h1>
            <h2 className="text-[48px]">{prop.count}</h2>
        </div>  
    );
}