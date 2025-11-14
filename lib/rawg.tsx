export async function searchGames(query: string) {
  const res = await fetch(`/api/game/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search games');

  const data = await res.json();
  return data.results;
}

export async function getPopularGames() {
  const res = await fetch(`/api/game/popular`);

  if (!res.ok) throw new Error('Failed to fetch popular games');

  const data = await res.json();
  return data.results;
}