// import { useState, useRef, useEffect } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaPaperPlane,
// } from "react-icons/fa";
// import { gsap } from "gsap";
// import Swal from "sweetalert2";

// export default function ContactForm() {
//   const sectionRef = useRef(null);
//   const leftCardRef = useRef(null);
//   const rightCardRef = useRef(null);
//   const socialRefs = useRef([]);
//   const inputRefs = useRef([]);
//   const buttonRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   /* ---------------- GSAP ENTRY ---------------- */
//   useEffect(() => {
//     gsap.from([leftCardRef.current, rightCardRef.current], {
//       opacity: 100,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "power3.out",
//     });

//     gsap.from(socialRefs.current, {
//       opacity: 100,
//       y: 10,
//       stagger: 0.12,
//       duration: 0.5,
//       delay: 0.4,
//       ease: "power2.out",
//     });
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       Swal.fire("Oops!", "All fields are required", "error");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fetch(
//         "https://portfolio-rh2g.onrender.com/api/contact/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!res.ok) throw new Error("Something went wrong");

//       Swal.fire("Sent!", "I'll get back to you soon 🚀", "success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err) {
//       Swal.fire("Error", err.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section ref={sectionRef} id="contact" className="py-20 px-4">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* LEFT – CONTACT INFO */}
//         <div
//           ref={leftCardRef}
//           onMouseEnter={() =>
//             gsap.to(leftCardRef.current, { y: -6, duration: 0.3 })
//           }
//           onMouseLeave={() =>
//             gsap.to(leftCardRef.current, { y: 0, duration: 0.3 })
//           }
//           className="rounded-2xl p-8 bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-xl"
//         >
//           <h3 className="text-3xl font-bold mb-3">Let’s Connect</h3>
//           <p className="text-white/80 mb-8">
//             Have a project or idea? Reach out anytime.
//           </p>

//           <div className="space-y-5">
//             <a
//               href="tel:+917984794500"
//               onMouseEnter={(e) =>
//                 gsap.to(e.currentTarget, { x: 6, duration: 0.25 })
//               }
//               onMouseLeave={(e) =>
//                 gsap.to(e.currentTarget, { x: 0, duration: 0.25 })
//               }
//               className="flex items-center gap-4 bg-white/10 p-4 rounded-xl"
//             >
//               <FaPhoneAlt className="text-xl" />
//               <span>+91 7984794500</span>
//             </a>

//             <a
//               href="mailto:harshrajsinhgohil8626@gmail.com"
//               onMouseEnter={(e) =>
//                 gsap.to(e.currentTarget, { x: 6, duration: 0.25 })
//               }
//               onMouseLeave={(e) =>
//                 gsap.to(e.currentTarget, { x: 0, duration: 0.25 })
//               }
//               className="flex items-center gap-4 bg-white/10 p-4 rounded-xl"
//             >
//               <FaEnvelope className="text-xl" />
//               <span>harshrajsinhgohil8626@gmail.com</span>
//             </a>
//           </div>

//           <div className="flex gap-5 mt-8 text-2xl">
//             {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
//               <a
//                 key={i}
//                 ref={(el) => (socialRefs.current[i] = el)}
//                 href="harshrajsinh_alampar"
//                 onMouseEnter={(e) =>
//                   gsap.to(e.currentTarget, { y: -4, scale: 1.15, duration: 0.2 })
//                 }
//                 onMouseLeave={(e) =>
//                   gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.2 })
//                 }
//               >
//                 <Icon />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT – FORM */}
//         <div ref={rightCardRef} className="bg-white rounded-2xl shadow-xl p-8">
//           <h3 className="text-2xl font-bold text-slate-900 mb-6">
//             Send a Message
//           </h3>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {["name", "email", "message"].map((field, i) =>
//               field !== "message" ? (
//                 <input
//                   key={field}
//                   ref={(el) => (inputRefs.current[i] = el)}
//                   type={field === "email" ? "email" : "text"}
//                   name={field}
//                   placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   onFocus={(e) =>
//                     gsap.to(e.target, { scale: 1.02, duration: 0.2 })
//                   }
//                   onBlur={(e) =>
//                     gsap.to(e.target, { scale: 1, duration: 0.2 })
//                   }
//                   className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
//                 />
//               ) : (
//                 <textarea
//                   key={field}
//                   rows="4"
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   onFocus={(e) =>
//                     gsap.to(e.target, { scale: 1.02, duration: 0.2 })
//                   }
//                   onBlur={(e) =>
//                     gsap.to(e.target, { scale: 1, duration: 0.2 })
//                   }
//                   className="w-full px-4 py-3 rounded-lg border resize-none focus:ring-2 focus:ring-indigo-400 outline-none"
//                 />
//               )
//             )}

//             <button
//               ref={buttonRef}
//               disabled={loading}
//               onMouseDown={() =>
//                 gsap.to(buttonRef.current, { scale: 0.95, duration: 0.1 })
//               }
//               onMouseUp={() =>
//                 gsap.to(buttonRef.current, { scale: 1, duration: 0.1 })
//               }
//               className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold
//                          bg-gradient-to-r from-indigo-500 to-sky-500"
//             >
//               <FaPaperPlane />
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { gsap } from "gsap";
import Swal from "sweetalert2";

export default function ContactForm() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const socialRefs = useRef([]);
  const buttonRef = useRef(null);

  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  /* ---------------- GSAP ENTRY (MOBILE SAFE) ---------------- */
  useEffect(() => {
    gsap.from([leftCardRef.current, rightCardRef.current], {
      opacity: 0,          // ✅ FIXED
      y: 30,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    });

    gsap.from(socialRefs.current, {
      opacity: 0,
      y: 12,
      stagger: 0.1,
      duration: 0.4,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      Swal.fire("Oops!", "All fields are required", "error");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        "https://portfolio-rh2g.onrender.com/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Something went wrong");

      Swal.fire("Sent!", "I'll get back to you soon 🚀", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-20 px-4"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* LEFT – CONTACT INFO */}
        <div
          ref={leftCardRef}
          onMouseEnter={
            !isTouch
              ? () => gsap.to(leftCardRef.current, { y: -6, duration: 0.3 })
              : undefined
          }
          onMouseLeave={
            !isTouch
              ? () => gsap.to(leftCardRef.current, { y: 0, duration: 0.3 })
              : undefined
          }
          className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
            Let’s Connect
          </h3>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Have a project or idea? Reach out anytime.
          </p>

          <div className="space-y-4 sm:space-y-5">
            <a
              href="tel:+917984794500"
              onMouseEnter={
                !isTouch
                  ? (e) => gsap.to(e.currentTarget, { x: 6, duration: 0.25 })
                  : undefined
              }
              onMouseLeave={
                !isTouch
                  ? (e) => gsap.to(e.currentTarget, { x: 0, duration: 0.25 })
                  : undefined
              }
              className="flex items-center gap-3 sm:gap-4 bg-white/10 p-4 rounded-xl"
            >
              <FaPhoneAlt className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base">
                +91 7984794500
              </span>
            </a>

            <a
              href="mailto:harshrajsinhgohil8626@gmail.com"
              onMouseEnter={
                !isTouch
                  ? (e) => gsap.to(e.currentTarget, { x: 6, duration: 0.25 })
                  : undefined
              }
              onMouseLeave={
                !isTouch
                  ? (e) => gsap.to(e.currentTarget, { x: 0, duration: 0.25 })
                  : undefined
              }
              className="flex items-center gap-3 sm:gap-4 bg-white/10 p-4 rounded-xl break-all"
            >
              <FaEnvelope className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base">
                harshrajsinhgohil8626@gmail.com
              </span>
            </a>
          </div>

          <div className="flex gap-6 mt-6 sm:mt-8 text-xl sm:text-2xl">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                ref={(el) => (socialRefs.current[i] = el)}
                href="#"
                onMouseEnter={
                  !isTouch
                    ? (e) =>
                        gsap.to(e.currentTarget, {
                          y: -4,
                          scale: 1.15,
                          duration: 0.2,
                        })
                    : undefined
                }
                onMouseLeave={
                  !isTouch
                    ? (e) =>
                        gsap.to(e.currentTarget, {
                          y: 0,
                          scale: 1,
                          duration: 0.2,
                        })
                    : undefined
                }
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div
          ref={rightCardRef}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
            Send a Message
          </h3>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border resize-none focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <button
              ref={buttonRef}
              disabled={loading}
              onTouchStart={() =>
                gsap.to(buttonRef.current, { scale: 0.96, duration: 0.1 })
              }
              onTouchEnd={() =>
                gsap.to(buttonRef.current, { scale: 1, duration: 0.1 })
              }
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold
                         bg-gradient-to-r from-indigo-500 to-sky-500"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
