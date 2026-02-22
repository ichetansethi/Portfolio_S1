import EpisodeLayout from "@/components/episodelayout";

export default function DatabaseEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={3}
      episodeId="database"
      title="Databases & Reliability"
      subtitle="SQL · PostgreSQL · Schema Evolution"
    >
      <p>
        I design and evolve database schemas that keep up with rapidly
        changing product requirements — adding columns, creating new tables,
        and building indexes without breaking existing queries or causing
        downtime. I write migrations that are safe to run in production.
      </p>

      <p>
        Beyond CRUD, I optimize query performance, understand execution
        plans, and design data models that balance normalization with
        practical read performance. I treat the database as a first-class
        part of the system architecture, not just a storage layer.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          When a new hierarchy standard required a fundamental shift in how
          data was organized, I designed the full migration: new columns on
          existing tables, an entirely new relational table, and strategic
          indexes on previously underutilized tables that suddenly became
          critical-path for core workflows. Shipped it with zero data loss.
        </p>
      </div>
    </EpisodeLayout>
  );
}
