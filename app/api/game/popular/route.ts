import { NextRequest, NextResponse } from "next/server";

const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function GET(req: NextRequest) {
    try {
        // Fetch popular games (ordered by popularity)
        const res = await fetch(
            `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=-added&page_size=20`
        );

        if (!res.ok) {
            throw new Error('Failed to fetch popular games');
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}