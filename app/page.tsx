// app/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <main className="h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold tracking-wide">
          CHETAN SETHI
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-lg text-gray-300"
        >
          Software Engineer building production-grade systems
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition"
        >
          ▶ ENTER
        </motion.button>
      </motion.div>
    </main>
  );
}
