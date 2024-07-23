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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {children}
        {<MyNav/>}
      </body>
    </html>
  );
}
