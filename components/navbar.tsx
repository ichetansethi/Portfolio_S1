import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/episodes"
          className="text-lg font-semibold tracking-wide"
        >
          CHETAN
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm text-gray-400">
          <Link
            href="/episodes"
            className="hover:text-white transition"
          >
            Episodes
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
