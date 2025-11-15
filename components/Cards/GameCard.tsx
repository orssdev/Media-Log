export default function GameCard({game}: {game: any}){
    const imageUrl = game.background_image
        ? game.background_image
        : '/no-image-342x513.png';
    return (
        <div className="w-[400px] h-[300px] bg-(--color3) rounded-2xl overflow-hidden text-black border-4 border-(--color2) shrink-0">
            <div className="w-full h-[200] overflow-hidden bg-black flex items-center justify-center">
                <img src={imageUrl} alt={game.name} className="object-cover" />
            </div>
            <div className="p-2.5">
                <h1><strong>{ game.name }</strong></h1>
                <h2 className="text-[14px]"><strong>{ game.released}</strong></h2>
            </div>
        </div>
    );
}