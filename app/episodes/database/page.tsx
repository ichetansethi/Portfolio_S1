import EpisodeLayout from "@/components/episodelayout";

export default function DatabaseEpisode() {
  return (
    <EpisodeLayout
      title="Databases & Reliability"
      subtitle="SQL · PostgreSQL · Schema Evolution"
    >
      <p>
        I work with SQL and PostgreSQL to evolve data models in support of new
        system requirements while maintaining data integrity and stability.
      </p>

      <h2 className="text-xl font-semibold">Behind the Scenes</h2>
      <p>
        To support a new hierarchy standard, I added new columns, introduced a
        new table, and created indexes on previously underutilized tables that
        became critical to core workflows.
      </p>
    </EpisodeLayout>
  );
}
