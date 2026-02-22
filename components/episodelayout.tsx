"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { episodes } from "@/lib/episodes";

export default function EpisodeLayout({
  episodeNumber,
  episodeId,
  title,
  subtitle,
  children,
}: {
  episodeNumber?: number;
  episodeId?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const currentIndex = episodeId
    ? episodes.findIndex((ep) => ep.id === episodeId)
    : -1;
  const nextEpisode =
    currentIndex >= 0 && currentIndex < episodes.length - 1
      ? episodes[currentIndex + 1]
      : null;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Top nav: back link + next episode button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between gap-4"
      >
        <Link
          href="/episodes"
          className="text-gray-500 text-sm hover:text-netflix-red transition-colors shrink-0"
        >
          &larr; Back to Episodes
        </Link>

        {nextEpisode && (
          <Link
            href={`/episodes/${nextEpisode.id}`}
            className="group flex items-center gap-3 bg-netflix-red hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]"
          >
            <span className="text-sm">
              Next: {nextEpisode.title}
            </span>
            <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
              &#9654;
            </span>
          </Link>
        )}
      </motion.div>

      {/* Episode header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10"
      >
        {episodeNumber && (
          <span className="text-netflix-red font-mono text-base font-bold tracking-widest">
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