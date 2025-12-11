import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to merge Tailwind CSS classes
 * Uses clsx to handle conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
