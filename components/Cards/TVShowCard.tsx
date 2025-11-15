export default function TVShowCard({show}: {show: any}){
    const imageUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : '/no-image-342x513.png';
    return (
        <div className="w-[342px] h-[600px] bg-(--color3) rounded-2xl overflow-hidden text-black border-4 border-(--color2) shrink-0">
            <div className="w-[342] h-[513] bg-black flex items-center justify-center">
                <img src={imageUrl} alt={show.name} className="object-cover" />
            </div>
            <div className="p-2.5">
                <h1><strong>{ show.name }</strong></h1>
                <h2 className="text-[14px]"><strong>{ show.first_air_date }</strong></h2>
            </div>
        </div>
    );
}