'use client'

import GameCard from "@/components/Cards/GameCard";
import GameForm from "@/components/Forms/GameForm";
import { searchGames } from "@/lib/rawg";
import { useState } from "react";

export default function AddGame() {
    const [query, setQuery] = useState('')
    const [games, setGames] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (searchQuery: string) => {
        if (!query.trim()) return;

        setLoading(true);
        setError('');
        setGames([]);

        try {
        const results = await searchGames(searchQuery);
            setGames(results);
        } catch (err: any) {
            setError(err.message || 'Error fetching shoews');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[50px] gap-10 font-e">
            <GameForm query={query} setQuery={setQuery} setGames={setGames} setError={setError} onSearch={handleSearch}/>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                {games.map(game => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </div>
    );
}