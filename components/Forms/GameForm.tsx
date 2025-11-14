'use client'

import { getPopularGames } from "@/lib/rawg";
import { useEffect } from "react";

interface GameFormProps {
    query: string;
    setQuery: (value: string) => void;
    setGames: (Games: any[]) => void;
    setError: (error: string) => void;
    onSearch: (query: string) => void;
}

export default function GameForm({ query, setQuery, setGames, setError, onSearch }: GameFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(query)
    }

    useEffect(() => {
        if (query === '') {
            const fetchPopular = async () => {
                setError('');
                try {
                    const results = await getPopularGames();
                    setGames(results);
                } catch (err: any) {
                    setError(err.message || 'Error fetching popular games');
                }
            }

            fetchPopular();
        }
    }, [query]);

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search for game"
                className="pl-2.5 text-[24px] mr-2.5 border border-(--color2) w-[600px]"
            />
            <button type="submit" className="bg-(--color2) px-5 py-2">Search</button>
        </form>
    );
}