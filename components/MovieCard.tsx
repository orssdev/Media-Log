
interface MovieCardProps {
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: string;
}

export default function MovieCard({ title, posterPath, overview, releaseDate }: MovieCardProps) {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/no-image.png'; // fallback

  return (
    <div className='w-[250px] border border-[#333] rounded-[10px] overflow-hidden bg-[#111] text-white'>
      <img src={imageUrl} alt={title} className='w-full h-[375px] object-cover' />
      <div className='p-2.5'>
        <h3 className='m-[px]'> </h3>
        <p><strong>Release:</strong> {releaseDate}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}