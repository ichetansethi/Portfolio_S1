import Link from "next/link";

interface EpisodeCardProps {
  title: string;
  href: string;
}

export default function EpisodeCard({
  title,
  href,
}: EpisodeCardProps) {
  return (
    <Link href={href}>
      <div className="border border-gray-700 rounded-lg p-6 cursor-pointer hover:border-red-600 transition">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-gray-400">
          View episode
        </p>
      </div>
    </Link>
  );
}
