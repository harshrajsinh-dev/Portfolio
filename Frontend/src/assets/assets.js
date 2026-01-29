// images
import portfolioBg from "./images/portfolio.png";
import arrowSvg from "./images/arrow.svg";
import RightArrow from "./images/RightArrow.svg";
import project_img1 from "./images/project-img-1.png";
import project_img2 from "./images/project-img-2.png";
import project_img3 from "./images/project-img-3.png";
import preloaderGif from "./images/cropped-gif.gif";

// files
import resume from "./files/Harshrajsinhresume.pdf";
import gsapIcon from "./images/gsap-icon.svg";

// icons
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    SiGithub,
    SiVercel,
    SiCplusplus,
    SiPostman,
    SiGreensock
} from "react-icons/si";

// tech stack with hover colors
const stack = [
    { icon: SiHtml5, name: "HTML", field: "Frontend", color: "#f00" },
    { icon: SiCss3, name: "CSS", field: "Frontend", color: "#00f" },
    { icon: SiJavascript, name: "JavaScript", field: "Frontend", color: "#F7DF1E" },
    { icon: SiReact, name: "React.js", field: "Frontend", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind CSS", field: "Frontend", color: "#38BDF8" },
    { icon: SiBootstrap, name: "Bootstrap", field: "Frontend", color: "#7952B3" },
    { icon: gsapIcon, name: "GSAP", field: "Frontend", color: "red" },

    { icon: SiNodedotjs, name: "Node.js", field: "Backend", color: "#339933" },
    { icon: SiExpress, name: "Express.js", field: "Backend", color: "#000" },
    { icon: SiMongodb, name: "MongoDB", field: "Backend", color: "#47A248" },
    { icon: SiMysql, name: "MySQL", field: "Backend", color: "#4479A1" },

    { icon: SiGit, name: "Git", field: "Others", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", field: "Others", color: "#181717" },
    { icon: SiVercel, name: "Vercel", field: "Others", color: "#000" },
    { icon: SiPostman, name: "Postman", field: "Others", color: "#FF6C37" },
    { icon: SiCplusplus, name: "C / C++", field: "Others", color: "#00599C" },
];

const assets = {
    portfolioBg,
    arrowSvg,
    RightArrow,
    project_img1,
    project_img2,
    project_img3,
    resume,
    preloaderGif,
    stack,
};

export { assets };
