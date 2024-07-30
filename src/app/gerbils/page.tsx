'use client'

import MyNav from "../mynav";
import Floating from '../Floating'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);



  return (
    <main className="flex min-h-screen justify-center items-center flex-col p-4 bg-[url('../../public/crumpled-paper.jpg')] bg-fixed bg-cover">
      <Floating/>
      <MyNav/>
      {/* BULLSHIT ENDS HERE -- JUST KIDDING */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
        <div className="mx-auto mb-20 w-full overflow-hidden rounded-lg p-4 py-8 sm:py-32 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30"> 
          {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
            <div className="">
              <Image
                src={'/gerbils.png'}
                alt=""
                width="1000"
                height="500"
                className="rounded-md"
              />
              <p className="mt-6 text-2xl font-bold text-center bg-gradient-to-b from-lime-500 to-green-500 bg-clip-text text-transparent">DA GERBILS!</p>
            {/* </div> */}
          </div> 
        </div>
      </div>
    </main>
  );
}