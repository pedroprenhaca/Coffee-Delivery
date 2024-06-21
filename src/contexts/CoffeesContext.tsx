import { createContext } from "react";
import { coffees } from "../api/coffeeapi";

    export interface CoffeeType {
    id: number;
    image: string;
    tags: string[];
    name: string;
    description: string;
    quantity?:number
}


interface CoffeesContextProviderProps{
    children:React.ReactNode;
}

export const CoffeesContext = createContext<CoffeeType[]>([])



export function CoffeesContextProvider({ children }:CoffeesContextProviderProps){
    return(
    <CoffeesContext.Provider value={coffees}>
        {children}
    </CoffeesContext.Provider>
    )
}