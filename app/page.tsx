'use client'

import MediaCounter from "@/components/MediaCounter";

export default function Home() {

  return (
    <div className="bg-linear-to-b to-[#210304] from-[#000000] w-full min-h-[800px] h-auto bg-(--color1) flex justify-center">
      <div className="w-full h-(--MediaCounter) flex justify-around">
        <MediaCounter media={'Movies'} count={372}/>
        <MediaCounter media={'Games'} count={294}/>
        <MediaCounter media={'Series'} count={420}/>
      </div>
    </div>
  );
}
