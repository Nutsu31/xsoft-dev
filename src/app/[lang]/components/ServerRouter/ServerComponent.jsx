'use client'
import { usePathname } from "next/navigation";


export const ServerComponent = () => {
    const path = usePathname();

    console.log("replace",path)  
};
  
  