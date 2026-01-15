import EpisodeLayout from "@/components/episodelayout";

export default function NextSeasonEpisode() {
  return (
    <EpisodeLayout
      title="The Next Season"
      subtitle="React · JavaScript · Full-Stack Growth"
    >
      <p>
        I am expanding into frontend development and have built a full-stack
        personal finance tracker using React and JavaScript.
      </p>

      <h2 className="text-xl font-semibold">Behind the Scenes</h2>
      <p>
        Building and deploying a complete system end to end reinforced the
        importance of clear API contracts and predictable data flow between
        frontend and backend.
      </p>
    </EpisodeLayout>
  );
}
