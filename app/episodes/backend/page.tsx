import EpisodeLayout from "@/components/episodelayout";

export default function BackendEpisode() {
  return (
    <EpisodeLayout
      title="Backend Engineering"
      subtitle="Java · Spring Boot · Production APIs"
    >
      <p>
        I design and implement backend services with a focus on clean
        architecture, backward compatibility, and production reliability.
      </p>

      <h2 className="text-xl font-semibold">Behind the Scenes</h2>
      <p>
        A late-night production deployment introduced a hierarchy-related bug.
        I implemented a targeted API change to contain impact and restore
        stability without affecting other flows.
      </p>
    </EpisodeLayout>
  );
}
