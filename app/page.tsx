"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();

  return (
    <main className="h-screen bg-black text-white flex items-center justify-center overflow-hidden relative scanlines">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-netflix-red/5 via-black to-black" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 text-center">
        {/* "A PORTFOLIO BY" small text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6"
        >
          A Portfolio By
        </motion.p>

        {/* Main name — Netflix zoom-in effect */}
        <motion.h1
          initial={{ scale: 1.8, opacity: 0, letterSpacing: "0.5em" }}
          animate={{ scale: 1, opacity: 1, letterSpacing: "0.2em" }}
          transition={{ delay: 1, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-8xl font-bold text-glow-red"
        >
          CHETAN
          <br />
          <span className="text-netflix-red">SETHI</span>
        </motion.h1>

        {/* Red divider line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-netflix-red mx-auto mt-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-6 text-sm md:text-base tracking-[0.2em] text-gray-400 font-light"
        >
          SOFTWARE ENGINEER &middot; PRODUCTION SYSTEMS
        </motion.p>

        {/* ENTER button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/episodes")}
          className="mt-12 px-10 py-4 bg-netflix-red text-white font-semibold tracking-widest text-sm hover:bg-red-700 transition-colors duration-300 animate-pulse-glow"
        >
          &#9654; ENTER
        </motion.button>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mt-16 text-[10px] tracking-[0.3em] uppercase text-gray-600"
        >
          Season 01 &middot; Now Streaming
        </motion.p>
      </div>
    </main>
  );
}
