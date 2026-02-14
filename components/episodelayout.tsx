"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EpisodeLayout({
  episodeNumber,
  title,
  subtitle,
  children,
}: {
  episodeNumber?: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/episodes"
          className="text-gray-500 text-sm hover:text-netflix-red transition-colors"
        >
          &larr; Back to Episodes
        </Link>
      </motion.div>

      {/* Episode header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8"
      >
        {episodeNumber && (
          <span className="text-netflix-red font-mono text-xs tracking-widest">
            EPISODE {String(episodeNumber).padStart(2, "0")}
          </span>
        )}
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
        <p className="mt-2 text-gray-500">{subtitle}</p>
        <div className="h-[2px] w-16 bg-netflix-red mt-6" />
      </motion.div>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 space-y-6 text-gray-300 leading-relaxed"
      >
        {children}
      </motion.section>
    </main>
  );
}
