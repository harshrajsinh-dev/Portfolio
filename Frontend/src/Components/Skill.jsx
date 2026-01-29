import { assets } from "../assets/assets";
import { useSite } from "../Context/SiteContext";

export default function Skill() {
  const { handleMouseOver, handleMouseLeave } = useSite();

  const skills = ["Frontend", "Backend", "Others"];

  return (
    <div className="mb-16 flex justify-between items-center">
      <div className="flex items-center  gap-4 mb-3">
        <h3 className="text-2xl font-bold">Skills</h3>
        <img className="h-[2rem] w-[3rem]" src={assets.RightArrow} alt="" />
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 font-bold rounded-xl bg-blue-200 text-black/60 hover:bg-gradient-to-r from-sky-300 to-indigo-600 hover:text-white transition-all cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
