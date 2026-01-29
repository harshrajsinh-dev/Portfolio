import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // ✅ Admin credentials (TEMPORARY)
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // ✅ Credential check
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true"); // simple auth flag
      navigate("/admin-dashboard"); // next page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-slate-900">
            Admin Login
          </h2>
          <p className="text-center text-slate-500 text-sm mt-1 mb-6">
            Access dashboard
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-sky-500
                         hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
