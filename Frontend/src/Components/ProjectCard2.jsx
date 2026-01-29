import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { assets } from "../assets/assets";

const ProjectCardGSAP = () => {
  const itemsRef = useRef([]);
  const defaultIndex = 0;

  const projects = [
    {
      img: assets.project_img1,
      link: "https://harshrajsinh-portfolio.vercel.app/",
    },
    {
      img: assets.project_img2,
      link: "https://coffeeplace.kesug.com/code/",
    },      
    {
      img: assets.project_img3,
      link: "https://todos-seven-xi.vercel.app/",
    },
  ];

  useEffect(() => {
    animateToIndex(defaultIndex);
  }, []);

  const animateToIndex = (activeIndex) => {
    itemsRef.current.forEach((el, i) => {
      const img = el.querySelector("img");
      const cta = el.querySelector(".cta");

      gsap.to(el, {
        flex: i === activeIndex ? 4 : 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(img, {
        scale: i === activeIndex ? 1.12 : 1,
        filter: i === activeIndex ? "grayscale(0%)" : "grayscale(100%)",
        duration: 0.6,
      });

      gsap.to(cta, {
        opacity: i === activeIndex ? 1 : 0,
        y: i === activeIndex ? 0 : 20,
        pointerEvents: i === activeIndex ? "auto" : "none",
        duration: 0.4,
      });
    });
  };

  return (
    <div
      className="w-full md:w-[90%] mx-auto h-[260px] flex overflow-hidden rounded-2xl flex-col md:flex-row"
      onMouseLeave={() => animateToIndex(defaultIndex)}
    >
      {projects.map((project, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          onMouseEnter={() => animateToIndex(i)}
          className="flex-1 relative overflow-hidden cursor-pointer"
        >
          {/* IMAGE */}
          <img
            src={project.img}
            alt=""
            className="w-full h-full object-cover grayscale"
          />

          {/* CTA */}
          <div className="cta absolute inset-0 opacity-0 flex items-center justify-center pointer-events-none">
            <a
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 outline-none rounded-full bg-blue-700 text-white text-sm font-semibold hover:bg-transparent hover:text-blue-700 hover:border hover:border-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardGSAP;
