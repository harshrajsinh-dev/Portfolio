import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import "./../index.css";

const Preloader = ({ setLoading }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Match SVG animation duration (2.5s)
        const timer = setTimeout(() => {
            console.log("timer ")
            setShowButton(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#F9FAF8] flex items-center justify-center z-[1000] flex-col gap-10">
            <div className="relative h-56 w-56 flex items-center justify-center">
                {/* SVG Border */}
                <svg
                    viewBox="0 0 210 210"
                    className="absolute inset-0 h-full w-full"
                    style={{ rotate: "-90deg" }}
                >
                    <defs>
                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                    </defs>

                    <circle
                        cx="105"
                        cy="105"
                        r="100"
                        stroke="url(#circleGradient)"
                        strokeWidth="4"
                        fill="none"
                        style={{
                            strokeDasharray: 628,
                            strokeDashoffset: 628,
                            animation: "draw-border 2.5s ease-out forwards",
                        }}
                    />
                </svg>

                {/* Center GIF */}
                <img
                    src={assets.preloaderGif}
                    alt="Harshrajsinh Gohil"
                    className="relative z-10 h-48 w-48 object-contain rounded-full"
                />
            </div>

            {/* Start Button (appears after loading) */}

            <button
                onClick={() => {
                    setLoading(false);
                }}
                className={`${showButton ? "opacity-100 animate-fadeUp" : "opacity-0"} flex outline-none relative items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-sky-300 to-indigo-600`}
            >
                <span
                    /* Text Gradient CSS */
                    className="px-10 py-2 rounded-full bg-[#F9FAF8] text-slate-900 font-semibold">
                    <span className="text-gradient font-bold ">
                        Start
                    </span>
                </span>
            </button>

            {/* Animations */}
            <style>{`
            .text-gradient {
            color: #b36f14;
           background: linear-gradient(to right, #7DD3FC, #4F46E5);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            }

        @keyframes draw-border {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Preloader;
