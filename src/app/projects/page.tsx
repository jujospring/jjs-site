'use client'

import MyNav from "../mynav";
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
import { useEffect } from "react";
import Floating from "../Floating";

export default function Page() {

  const projectCardStyle = "mx-40 my-20 w-4/5 overflow-hidden rounded-md p-4 py-24 sm:py-32 backdrop-blur-sm transition hover:backdrop-blur duration-500 bg-white/30"
  const projectCardButton = "flex mx-auto text-black hover:font-bold bg-gradient-to-b from-lime-500 to-green-500 hover:bg-gradient-to-br hover:from-lime-600 hover:to-green-600"
  const projectCardTitle = "text-6xl pb-6 text-center font-bold tracking-tight bg-gradient-to-br from-lime-400 to-green-400 bg-clip-text text-transparent"
  const projectCardDesc = "text-center p-10 text-xl bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent"


  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false, 
    });
  }, []);


  return (

    <main className="flex min-h-full items-center flex-col justify-between p-24 bg-[url('../../public/crumpled-paper.jpg')] bg-fixed bg-cover">
      {/* <Floating/> */}
      <div>
        <div className="grid grid-cols-2 grid-rows-4 w-9/10">

        <div className="grid-row-start-1 grid-col-start-1" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
          <div className={projectCardStyle}>
            <h3 className={projectCardTitle}>RSS Aggregator</h3>
            <p className={projectCardDesc}>Live RSS markdown data aggregator in Golang</p>
            <Link className="" href="https://github.com/jujospring/rss_aggregator">
              <Button className={projectCardButton}>
                <BrainCircuit className="mr-2 h-4 w-4" /> View Project
              </Button>
            </Link>
          </div>  
        </div>

        <div className="grid-row-start-1 grid-col-start-2 mx-auto">

        </div>


        <div className="grid-row-start-2 grid-col-start-1 mx-auto">

        </div>

        <div className="grid-row-start-2 grid-col-start-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
          <div className={projectCardStyle}>
          <h3 className={projectCardTitle}>Kafka Producer</h3>
          <p className={projectCardDesc}>Apache Kafka message producer using Java and Docker</p>
          <Link href="https://github.com/jujospring/kafka_producer">
            <Button className={projectCardButton}>
              <BrainCircuit className="mr-2 h-4 w-4" /> View Project
            </Button>
          </Link>
          </div>  
        </div>

        <div className="grid-row-start-3 grid-col-start-1" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
          <div className={projectCardStyle}>
          <h3 className={projectCardTitle}>Kafka Consumer</h3>
          <p className={projectCardDesc}>Apache Kafka message consumer using Java and Docker</p>
          <Link href="https://github.com/jujospring/kafka_consumer">
            <Button className={projectCardButton}>
              <BrainCircuit className="mr-2 h-4 w-4" /> View Project
            </Button>
          </Link>
          </div>  
        </div>

        <div className="grid-row-start-3 grid-col-start-2 mx-auto">

        </div>

        <div className="grid-row-start-4 grid-col-start-1 mx-auto">

        </div>

        <div className="grid-row-start-4 grid-col-start-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
          <div className={projectCardStyle}>
          <h3 className={projectCardTitle}>NextJS Customer Dashboard</h3>
          <p className={projectCardDesc}>Dashboard for example customer data from NextJS tutorial</p>
          <Link href="https://github.com/jujospring/learn-nextjs">
            <Button className={projectCardButton}>
              <BrainCircuit className="mr-2 h-4 w-4" /> View Project
            </Button>
          </Link>
          </div>  
        </div>

        </div>
      </div>
    </main>
  );
}