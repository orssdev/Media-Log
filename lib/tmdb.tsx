export async function searchMovies(query: string) {
  const res = await fetch(`/api/moviesearch?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search movies');

  const data = await res.json();
  return data.results;
}

export async function getPopularMovies() {
  const res = await fetch(`/api/popular`);

  if (!res.ok) throw new Error('Failed to fetch popular movies');

  const data = await res.json();
  return data.results;
}