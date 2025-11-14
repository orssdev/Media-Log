import { NextRequest, NextResponse } from "next/server";

const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    
    if (!query) {
        return NextResponse.json({ error: 'Game name is required' }, { status: 400 });
    }

    try {
        const res = await fetch(
            `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${encodeURIComponent(query)}`
        );

        if (!res.ok) {
            throw new Error('Failed to fetch games');
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}