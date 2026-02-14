"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-netflix-red font-mono text-xs tracking-widest">
          CONTACT
        </span>
        <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
        <div className="h-[2px] w-16 bg-netflix-red mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10"
      >
        <p className="text-gray-300 leading-relaxed">
          If you&apos;d like to discuss opportunities, system design, or engineering
          problems, feel free to reach out.
        </p>

        <ul className="mt-8 space-y-4">
          {[
            { label: "Email", value: "your.email@example.com" },
            { label: "GitHub", value: "github.com/yourhandle" },
            { label: "LinkedIn", value: "linkedin.com/in/yourprofile" },
          ].map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 text-gray-400"
            >
              <span className="text-netflix-red font-mono text-xs w-20">
                {item.label}
              </span>
              <span className="text-gray-300">{item.value}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </main>
  );
}
