import EpisodeLayout from "@/components/episodelayout";

export default function NextSeasonEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={5}
      episodeId="next-season"
      title="Frontend Engineering"
      subtitle="React · Next.js · TypeScript · Full-Stack"
    >
      <p>
        I&apos;m leveling up into full-stack development — and this portfolio
        is the proof. Built with Next.js 13, TypeScript, Tailwind CSS, and
        Framer Motion, it represents my approach to frontend: component-driven
        architecture, smooth animations, and clean responsive design.
      </p>

      <p>
        Beyond this site, I&apos;ve built a full-stack personal finance tracker
        with React on the frontend and a custom API layer on the backend —
        handling authentication, state management, and real-time data
        synchronization between client and server.
      </p>

      <p>
        I&apos;m not pivoting away from backend — I&apos;m adding a second dimension.
        A full-stack engineer who understands Kafka internals <em>and</em> React
        rendering is someone who can own features end to end.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          Building and deploying a complete system end to end — from database
          schema to API design to UI components — taught me that the hardest
          problems live at the boundaries. Clear API contracts, predictable
          data flow, and type safety across the stack aren&apos;t nice-to-haves;
          they&apos;re what separate a working prototype from a product you can
          actually maintain.
        </p>
      </div>
    </EpisodeLayout>
  );
}
