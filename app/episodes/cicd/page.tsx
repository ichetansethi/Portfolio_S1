import EpisodeLayout from "@/components/episodelayout";

export default function CicdEpisode() {
  return (
    <EpisodeLayout
      title="CI/CD & Production Awareness"
      subtitle="Jenkins · Deployment Pipelines"
    >
      <p>
        I have worked with Jenkins to define and support automated build and
        deployment workflows using configuration files and job DSL scripts.
      </p>

      <h2 className="text-xl font-semibold">Behind the Scenes</h2>
      <p>
        Writing deployment configurations and job definitions helped me
        understand how application code, environment configuration, and release
        discipline come together in production systems.
      </p>
    </EpisodeLayout>
  );
}
