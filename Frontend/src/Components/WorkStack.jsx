import { assets } from "../assets/assets";
import { useSite } from "../Context/SiteContext";

export default function WorkStack() {
  const { activeField } = useSite();

  return (
    <section className="text-slate-900 rounded-2xl">
      <h3 className="text-2xl font-bold flex items-center gap-4">
        Work Stack
        <img className="h-[2rem] w-[3rem]" src={assets.RightArrow} alt="" />
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        {assets.stack.map(({ icon: Icon, name, field, color }) => {
          const isActive = !activeField || activeField === field;

          return (
            <div
              key={name}
              className={`flex items-center gap-3 transition-all duration-300
                ${isActive
                  ? "opacity-100 grayscale-0 scale-105"
                  : "opacity-25 grayscale"
                }
              `}
            >
              {name === "GSAP" ? (
                <img src={Icon} alt="GSAP" className="w-5 h-5" />
              ) : (
                <Icon
                  className="text-3xl"
                  color={isActive ? color : "#94a3b8"}
                />
              )}
              <span className="text-sm font-medium">{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
