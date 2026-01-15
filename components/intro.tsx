"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold tracking-wide">
          CHETAN SETHI
        </h1>

        <p className="mt-4 text-gray-400">
          Software Engineer · Production Systems
        </p>

        <button
          onClick={() => router.push("/episodes")}
          className="mt-10 px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition"
        >
          ▶ ENTER
        </button>
      </motion.div>
    </main>
  );
}
