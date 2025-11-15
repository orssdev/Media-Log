'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";

interface Props {
    media: String;
    count: number;
    route: string;
}

export default function MediaCounter(prop: Props) {
    const router = useRouter();

    const handleClick = () => {
        router.push(prop.route)
    }

    return (
        <div className="w-(--mc) h-(--mc) flex flex-col justify-center items-center gap-[50px] font-bs">
            <span className="flex flex-col justify-center items-center gap-[25px] cursor-pointer " onClick={handleClick}>
                <h1 className="text-[56px]">{prop.media}</h1>
                <h2 className="text-[48px]">{prop.count}</h2>
            </span>
            <Button onClick={() => router.push(prop.route + '/add')}></Button>
        </div>  
    );
}