import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.name || !body.email || !body.password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const user = await User.create(body);
        return NextResponse.json({ user }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}