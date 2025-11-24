import { getMovie } from "@/lib/tmdb";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params } : PageProps) {
    const { id } = await params;
    const movie = await getMovie(id);
    const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : '/no-image-342x513.png';

    return (
        <div className="page">
          <div className="flex items-center justify-center flex-col gap-[50px] lg:flex-row py-[50px]">
            <div>
              <h1>{movie.title}</h1>
              <div className="w-[400px] h-[600px] rounded-2xl overflow-hidden">
                <img src={imageUrl} className="w-full h-full object-cover"/>
              </div>
            </div>
            <form className="flex flex-col gap-[25px] items-center lg:items-baseline">
              <input type="text" className="w-[300px] border-[#ff0000] border-2"/>
              <input type="date" className="w-[115px]"/>
              <textarea placeholder="thoughts?" className="xl:w-[800px] lg:w-[500px] w-[400px] h-[400px] border-[#ff0000] border-2 p-2"></textarea>
            </form>
          </div>
        </div>
    );
}