import React from "react";
import { assets } from "../assets/assets";
import { useSite } from "../Context/SiteContext";

export default function Skill() {
  const { handleMouseOver, handleMouseLeave } = useSite();

  const skills = ["Frontend", "Backend", "Others"];

  return (
    <div className="mb-16 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
      
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-bold">Skills</h3>
        <img
          className="h-[2rem] w-[3rem]"
          src={assets.RightArrow}
          alt=""
        />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 font-bold rounded-xl bg-blue-200 text-black/60 cursor-pointer transition-all hover:bg-gradient-to-r hover:from-sky-300 hover:to-indigo-600 hover:text-white active:bg-gradient-to-r active:from-sky-300 active:to-indigo-600 active:text-white">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}