export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
        <span>
          © {new Date().getFullYear()} Chetan Sethi
        </span>
        <span>
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}