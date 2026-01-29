import React from "react"
import { assets } from "../assets/assets"
import Skill from "../Components/Skill"
import WorkStack from "../Components/WorkStack"

export default function About() {

  return (
    <section className="scroll-mt-32 max-w-5xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Name */}
        <div className="text-2xl md:text-4xl mb-10 bg-gradient-to-r from-black via-slate-800 to-black bg-clip-text text-transparent transition-all duration-500 animate-fadeIn hover:tracking-wide font-['poppins'] font-[600] uppercase">
          Harshrajsinh Y. Gohil
        </div>

        {/* Description */}
        <p className="text-slate-700 max-w-2xl mb-14 leading-relaxed text-base md:text-lg animate-fadeIn">
          I’m a{" "}
          <span className="relative font-semibold text-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            Full-stack developer
          </span>{" "}
          focused on building reliable, scalable web applications with clean
          architecture and thoughtful UX.
        </p>
      </div>
      <Skill />
      <WorkStack />
    </section>
  )
}
