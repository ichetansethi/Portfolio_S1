export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/50 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-6 text-xs text-gray-600 flex justify-between">
        <span>&copy; {new Date().getFullYear()} Chetan Sethi</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
