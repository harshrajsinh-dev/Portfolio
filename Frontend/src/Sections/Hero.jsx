
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef } from "react";
import { assets } from "../assets/assets";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MarqueeText from "../Components/MarqueeText";

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageDivRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    img.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const img = imageRef.current;
    if (!img) return;
    img.style.transform = `translate(0px, 0px) scale(1)`;
  };

  const handleMouseOver = () => {
    console.log("first")
  }

  const imgDiv = document.querySelector("body")

  return (

    <section
      ref={sectionRef}
      className="scroll-mt-32 grid md:grid-cols-2 gap-8 items-center py-20"

    >
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-4xl font-bold">
          Hi, I'm <span className="text-indigo-600">Harshrajsinh</span>
        </h2>

        <p className="mt-4 text-slate-600">
          I build modern full-stack web apps with clean UI.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="outline-none group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-indigo-600 px-6 font-medium text-white duration-500">
            <div

              className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0"
            >
              View projects
            </div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <img src={assets.arrowSvg} alt="" />
            </div></a>
          <a
            href="mailto:harshrajsinhgohil8626@gmail.com"
            className=" outline-none border px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-700 hover:text-white transition"
          >
            <Mail size={14} />
            Contact
          </a>

        </div>
      </motion.div>

      <div
        id="i"
        onMouseMove={handleMouseMove}
        className="relative h-72 rounded-xl overflow-hidden bg-blue-200"
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        ref={imageDivRef}
      >
        <img
          ref={imageRef}
          src={assets.portfolioBg}
          alt="Portfolio bg"
          className="h-full w-full object-contain absolute top-0 left-0 z-10 transition-all grayscale-100 hover:grayscale-0 duration-200 ease-out"
        />
        <MarqueeText text={"Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh"} />
        <MarqueeText text={"Full Stack Developer Full Stack Developer Full Stack Developer Full Stack Developer"} />
        <MarqueeText text={"Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh Harshrajsinh"} />
      </div>
    </section>
  );
}
