'use client'

import Link from "next/link"
import {
  AppWindow,
  BrainCircuit,
  Cat,
  Radar,
  Ghost,
  Bug,
  Squirrel,
  TreePine,
  Tornado,

} from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyNav() {
  const iconClass = "h-5 w-5"
  const linkClass = "mx-[-0.65rem] flex gap-2 rounded-xl px-3 py-2 text-gray-800 hover:font-bold invisible sm:visible md:visible md:text-sm"
  const selectedClass = "bg-muted font-bold"

    useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);

  return (
    <div>
      <nav className="md:hidden backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="items-center justify-between gap-4 md:hidden flex w-auto order-1" id="navbar-sticky">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/unown-j-logo-sized.png" alt="Unown J" width={32} height={32}/>
            </a>
            <ul className="flex p-0 font-small gap-2 border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse flex-row mt-0 border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-1 px-3 text-white rounded bg-gradient-to-b from-lime-400 to-green-400 hover:scale-105 hover:shadow-xl p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/projects" className="block py-1 px-3 text-white rounded bg-gradient-to-b from-lime-400 to-green-400 hover:scale-105 hover:shadow-xl p-0" aria-current="page">Projects</a>
              </li>
              <li>
                <a href="/gerbils" className="block py-1 px-3 text-white rounded bg-gradient-to-b from-lime-400 to-green-400 hover:scale-105 hover:shadow-xl p-0" aria-current="page">Gerbils</a>
              </li>
              <li>
                <a href="/random" className="block py-1 px-2 text-white rounded bg-gradient-to-b from-lime-400 to-green-400 hover:scale-105 hover:shadow-xl p-0" aria-current="page">Random</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <aside className="hidden md:visible fixed inset-y-0 left-0 z-10 w-16 md:w-32 sm:w-32 flex-col bg-gradient-to-b from-lime-400 to-green-400 sm:flex" data-aos="zoom-y-out" data-aos-delay="150"> 
        <nav className=" flex flex-col items-start gap-4 px-4 sm:mt-4 sm:py-10">
          <Link
            href="/"
            className={linkClass}
          >
            <AppWindow className={iconClass} />
            Home
          </Link>
          <Link
              href="/projects"
              className={linkClass}
          >
            <Radar className={iconClass} />
            Projects
          </Link>

          <Link
            href="/random"
            className={linkClass}          
          >
            <Ghost className={iconClass} />
            Random
          </Link>

          <Link
            href="/gerbils"
            className={linkClass}          
          >
            <Cat className={iconClass} />
            Gerbils
          </Link>
        </nav>
      </aside>
    </div>
  );
}