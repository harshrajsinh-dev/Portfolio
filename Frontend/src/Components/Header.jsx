import { assets } from "../assets/assets";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full  z-50 ">
      <div className="relative max-w-6xl mx-auto px-10 py-4 flex items-center">


        <div className="flex-1">
          
          <h1 className="font-bold">Gohil Harshrajsinh</h1>
          <p className="text-sm text-gray-500">Designer & Developer</p>
        </div>

        <MobileNav />
        <div className="hidden md:flex">

          <div className="absolute left-1/2 -translate-x-1/2">
            <Nav />
          </div>


          <div className="flex-1 flex justify-end">
            <a
              href={assets.resume} download="Harshrajsinhresume.pdf"
              className="px-3 py-2 bg-black outline-none text-white rounded flex items-center gap-1 text-sm"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
