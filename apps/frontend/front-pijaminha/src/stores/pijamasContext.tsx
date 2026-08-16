import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Pijama } from "../Types/Pijama";

export interface PijamasContextData {
  pijamas: Pijama[];
  setPijamas: Dispatch<SetStateAction<Pijama[]>>;
}

export const PijamasContext = createContext<PijamasContextData | null>(null);
