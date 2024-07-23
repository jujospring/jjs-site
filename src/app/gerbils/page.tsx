'use client'

import MyNav from "../mynav";
import Floating from '../Floating'
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-24 bg-[url('../../public/crumpled-paper.jpg')] bg-fixed bg-cover">
      <Floating/>
      {/* BULLSHIT ENDS HERE -- JUST KIDDING */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
        <div className=" mx-auto overflow-hidden rounded-md p-8 pt-16 pb-8 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30"> 
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-">
              <Image
                src={'/gerbils.png'}
                alt=""
                width="1000"
                height="500"
                className="rounded-md"
              />
              <p className="mt-6 text-2xl font-bold text-center bg-gradient-to-b from-lime-500 to-green-500 bg-clip-text text-transparent">DA GERBILS!</p>
            </div>
          </div> 
        </div>
      </div>
    </main>
  );
}