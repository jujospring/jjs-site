import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const rand = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  console.log("getRandomIntInclusive just ran with result ", rand);
  return rand;// The maximum is inclusive and the minimum is inclusive
}
