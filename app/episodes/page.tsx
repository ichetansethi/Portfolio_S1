import EpisodeCard from "@/components/episodecard";

export default function Episodes() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold mb-8">
        Season 01
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <EpisodeCard
          title="Backend Engineering"
          href="/episodes/backend"
        />
        <EpisodeCard
          title="Streaming & Data"
          href="/episodes/streaming"
        />
        <EpisodeCard
          title="Databases & Reliability"
          href="/episodes/database"
        />
        <EpisodeCard
          title="CI/CD & Production"
          href="/episodes/cicd"
        />
        <EpisodeCard
          title="The Next Season"
          href="/episodes/next-season"
        />
      </div>
    </main>
  );
}
