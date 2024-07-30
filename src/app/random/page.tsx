'use client'
import MyNav from "../mynav";
import Floating from '../Floating'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pokechart from "../Pokechart";
import { getRandomIntInclusive } from "../../lib/utils";
import getPokemon from "@/lib/GetPokemon";
import { Main, Stat, Type } from "@/lib/definitions";
import GetRandomPokemon from "../GetRandomPokemon";

export default function Page() {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 700,
  //     easing: "ease-out-cubic",
  //     once: false, 
  //   });
  // }, []);

  return (
    <main className="flex min-h-screen justify-center items-center flex-col p-4 bg-[url('../../public/crumpled-paper.jpg')] bg-fixed bg-cover">
      <Floating/>
      <MyNav/>
      {/* BULLSHIT ENDS HERE -- JUST KIDDING */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
        {/* <div className="mx-auto mb-20 w-full overflow-hidden rounded-lg p-4 py-8 sm:py-32 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30">  */}

          <Pokechart/>

        {/* </div> */}
      </div>
    </main>
  );
}