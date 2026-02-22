import EpisodeLayout from "@/components/episodelayout";

export default function CicdEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={4}
      episodeId="cicd"
      title="CI/CD & Production Awareness"
      subtitle="Jenkins · Docker · Deployment Pipelines"
    >
      <p>
        I build and maintain CI/CD pipelines that take code from commit to
        production — writing Jenkinsfiles, configuring multi-stage build
        pipelines, and automating testing, artifact generation, and
        deployment workflows. I believe shipping fast and shipping safely
        aren&apos;t mutually exclusive.
      </p>

      <p>
        I understand the full deployment lifecycle: build triggers,
        environment-specific configurations, rollback strategies, and
        how infrastructure-as-code ties the whole system together. When
        something goes wrong at 2 AM, I know where to look.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          Writing deployment configurations from scratch taught me something
          no tutorial could — how application code, environment configuration,
          secrets management, and release discipline must work in concert for
          a production system to be truly reliable. I now approach every
          feature with &ldquo;how does this get deployed?&rdquo; as a first-class
          question.
        </p>
      </div>
    </EpisodeLayout>
  );
}
