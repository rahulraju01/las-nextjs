import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export interface User {
  id: string,
  name: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
