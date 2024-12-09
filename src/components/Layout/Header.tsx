import React from "react";
import Link from "next/link";

import { Menu }from"lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
           
        <header className="flex justify-between py-4 px-4 bg-gray-400 text-white  max-w-screen-2xl mx-auto">
               <div>
            <h1 className="font-samibold text-6xl text-yellow-800"> PORTFOLIO</h1>
            </div>
            <div>
                <ul className="hidden md:block">
                    <li className="space-x-4 py-4">
              <Link href="/">HOME</Link>
             <Link href="/Aboutme">ABOUTME</Link>
              <Link href="/Skills">SKILLS</Link>
           <Link href="/Contactus">CONTACTUS</Link>
              </li>
              </ul>
              {/* <Menu /> */}
              <Sheet>
  <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
  <SheetContent>

                  <ul >
                    <li className="flex flex-col bg-white text-red-900">
              <Link href="/">HOME</Link>
             <Link href="/Aboutme">ABOUTME</Link>
              <Link href="/Skills">SKILLS</Link>
           <Link href="/Contactus">CONTACTUS</Link>
              </li>
              </ul>

   
  </SheetContent>
</Sheet>

             
  

              </div>
              </header>  
             
  );
}; 
