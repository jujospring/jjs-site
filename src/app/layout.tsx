import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
import MyNav from "./mynav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Spring",
  description: "Software engineer based in Boston",
  icons: 
  {
    icon: './cat.svg'
  },
  // viewport: 
  // {
  //   width: "device-width",
  //   initialScale: 1
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        
        {children}
      </body>
    </html>
  );
}
