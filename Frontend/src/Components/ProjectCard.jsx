import { assets } from "../assets/assets";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <div className="p-5 border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map(t => (
          <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <img src={assets.project_img1} className="my-4" alt="" />
    </div>
  )
}
