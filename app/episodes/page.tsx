"use client";
import { motion } from "framer-motion";
import EpisodeCard from "@/components/episodecard";
import { episodes } from "@/lib/episodes";

export default function Episodes() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Season header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-netflix-red text-xs font-mono tracking-widest mb-2">
          NOW STREAMING
        </p>
        <h1 className="text-4xl font-bold tracking-wide">Season 01</h1>
        <p className="mt-2 text-gray-500 text-sm">
          {episodes.length} Episodes &middot; Backend &middot; Data &middot; Systems
        </p>
        <div className="h-[1px] bg-gray-800 mt-6 mb-10" />
      </motion.div>

      {/* Episode grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {episodes.map((ep, i) => (
          <EpisodeCard
            key={ep.id}
            number={i + 1}
            title={ep.title}
            subtitle={ep.subtitle}
            href={`/episodes/${ep.id}`}
            index={i}
          />
        ))}
      </div>
    </main>
  );
}
