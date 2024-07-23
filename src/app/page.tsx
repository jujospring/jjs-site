'use client';

import Image from "next/image";
import unown from "../../public/unown-binary.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  AppWindow,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  BrainCircuit,
  Cat,
  Radar,
  Ghost,
  Bug,
  Squirrel,
  TreePine,
  Tornado,

} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MyNav from "./mynav";
import { useEffect } from "react";
import Floating from "./Floating";


export default function Home() {
  // const projectCardStyle = "mx-40 my-20 overflow-hidden rounded-md p-4 py-24 sm:py-32 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30"
  // const projectCardButton = "flex mx-auto bg-black"
  // const projectCardTitle = "text-center text-3xl leading-8 text-white font-bold"
  // const projectCardDesc = "text-center p-10 text-xl text-white"


  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);
  
  return (
    <main className="flex min-h-screen items-center flex-col justify-between p-24 bg-[url('../../public/crumpled-paper.jpg')] bg-fixed bg-cover">
      <Floating/>
      {/* BULLSHIT ENDS HERE -- JUST KIDDING */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
        <div className="mb-20 ml-32 overflow-hidden rounded-md p-4 py-24 sm:py-32 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30"> 
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-6xl pb-6 text-center font-bold tracking-tight bg-gradient-to-br from-lime-400 to-green-400 bg-clip-text text-transparent">Julian Spring</h2>
              <p className="mt-6 text-2xl text-center leading-8 bg-gradient-to-b from-lime-500 to-green-500 bg-clip-text text-transparent">
                Software engineer working in Boston on front-end and back-end projects using Go, Java, and Javascript/Typescript languages, and React, NextJS, and Apache Kafka frameworks. Reach me at: julian@gohyper.ai
              </p>
            </div>
          </div> 
        </div>
      </div>
      <footer className="ml-32 overflow-hidden rounded-md backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="items-center mx-auto mt-auto sm:justify-center md:justify-center lg:justify-center">
            <a href="https://github.com/jujospring" className="text-green-500 hover:text-green-600 dark:hover:text-white ms-5">
              <svg className="mx-auto w-9 h-9 fill-green-500 hover:fill-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              <span className="text-center">GitHub account</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
