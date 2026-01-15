export default function EpisodeLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-400">{subtitle}</p>

      <section className="mt-8 space-y-6">
        {children}
      </section>
    </main>
  );
}
