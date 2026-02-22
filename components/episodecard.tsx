"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface EpisodeCardProps {
  number: number;
  title: string;
  subtitle: string;
  preview: string;
  href: string;
  index: number;
}

export default function EpisodeCard({
  number,
  title,
  subtitle,
  preview,
  href,
  index,
}: EpisodeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * index, duration: 0.6, ease: "easeOut" }}
    >
      <Link href={href}>
        <div className="group relative border border-gray-800 rounded-sm p-6 cursor-pointer transition-all duration-300 hover:border-netflix-red/60 hover:bg-white/[0.03] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,9,20,0.15)]">
          {/* Episode number */}
          <span className="text-netflix-red font-mono text-base font-bold tracking-widest">
            E{String(number).padStart(2, "0")}
          </span>

          {/* Title */}
          <h2 className="text-xl font-semibold mt-2 group-hover:text-white transition-colors">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
            {subtitle}
          </p>

          {/* Hover preview — slides in smoothly */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300 ease-in-out">
            <div className="pt-3 mt-3 border-t border-gray-800/70">
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                {preview}
              </p>
            </div>
          </div>

          {/* Play indicator on hover */}
          <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-netflix-red text-lg">&#9654;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}