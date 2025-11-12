export async function searchMovies(query: string) {
  const res = await fetch(`/api/moviesearch?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search movies');

  const data = await res.json();
  return data.results;
}