import EpisodeLayout from "@/components/episodelayout";

export default function BackendEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={1}
      episodeId="backend"
      title="Backend Engineering"
      subtitle="Java · Spring Boot · Production APIs"
    >
      <p>
        I architect and ship backend services that handle real production
        traffic — designing RESTful APIs with clean separation of concerns,
        versioned contracts, and zero-downtime deployments. My systems
        prioritize backward compatibility so upstream consumers never break
        on a release.
      </p>

      <p>
        From request validation and error handling to layered service
        architecture and dependency injection, I build services that are
        testable, maintainable, and ready for scale. I treat production
        reliability as a feature, not an afterthought.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          A late-night production deployment introduced a critical
          hierarchy-related bug that threatened downstream data integrity.
          I diagnosed the root cause under pressure, designed a targeted API
          patch that isolated the blast radius, and shipped the fix — all
          without disrupting existing consumer flows or requiring a rollback.
        </p>
      </div>
    </EpisodeLayout>
  );
}
