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

export default function MyNav() {
  const iconClass = "h-5 w-5"
  const linkClass = "mx-[-0.65rem] flex gap-2 rounded-xl px-3 py-2 text-gray-800 hover:font-bold text-sm"
  const selectedClass = "bg-muted font-bold"
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-32 flex-col bg-gradient-to-b from-lime-400 to-green-400 sm:flex" data-aos="zoom-y-out" data-aos-delay="150"> 
        <nav className=" flex flex-col items-start gap-4 px-4 sm:py-5">
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

          {/* <Link
            href="/random"
            className={linkClass}          
          >
            <Ghost className={iconClass} />
            Random
          </Link> */}

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