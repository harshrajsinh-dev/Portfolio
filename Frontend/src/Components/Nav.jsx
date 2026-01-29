
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [activeTab, setActiveTab] = useState(0);

  const tabsRef = useRef([]);
  const pillRef = useRef(null);

  // 🔹 Move pill when activeTab changes
  useEffect(() => {
    const el = tabsRef.current[activeTab];
    if (!el || !pillRef.current) return;

    pillRef.current.style.width = `${el.offsetWidth}px`;
    pillRef.current.style.height = `${el.offsetHeight}px`;
    pillRef.current.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
  }, [activeTab]);

  // 🔹 Scroll spy logic
  useEffect(() => {
    const sections = tabs.map((tab) =>
      document.getElementById(tab.toLowerCase())
    );

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className="relative flex border border-black/20 bg-white/50 backdrop-blur-xs rounded-full gap-2 text-sm">
      <div
        ref={pillRef}
        className="absolute bg-black/10 rounded-full transition-all duration-300 pointer-events-none"
      />

      {tabs.map((item, i) => (
        <a
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
          href={`#${item.toLowerCase()}`}
          onClick={() => setActiveTab(i)}
          className={`outline-none relative z-10 px-5 py-2 font-medium transition-colors
            ${activeTab === i ? "text-black" : "text-black/50 hover:text-black"}
          `}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
