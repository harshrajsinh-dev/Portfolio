import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <section className="scroll-mt-32 bg-white p-6 rounded-xl shadow min-h-[200vh]">
      <h2 className="relative inline-block text-2xl font-bold mb-6 group">
          CONTACT
       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
         </h2>
      <p className="mt-2 text-slate-600">Let’s work together.</p>

      <a
        href="mailto:harshrajsinhgohil8626@gmail.com"
        className="text-indigo-600 underline mt-4 inline-block outline-none"
      >
        harshrajsinhgohil8626@gmail.com
      </a>
      <ContactForm  />
    </section>
  )
}
