'use client'

import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter()
    return (
        <h1 className="text-[48px] cursor-pointer" onClick={() => router.push('/')}><span className="text-(--color3)">Media</span> <span className="text-(--color2)">Log</span></h1>
    );
}