"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors ${
      pathname.startsWith(href)
        ? "text-white"
        : "text-gray-500 hover:text-white"
    }`;

  return (
    <nav className="w-full border-b border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-widest text-netflix-red"
        >
          CS
        </Link>

        <div className="flex gap-8 text-sm">
          <Link href="/episodes" className={linkClass("/episodes")}>
            Episodes
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
