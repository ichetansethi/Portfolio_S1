import EpisodeLayout from "@/components/episodelayout";

export default function StreamingEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={2}
      title="Streaming & Data"
      subtitle="Kafka · Apache Flink · Real-time Pipelines"
    >
      <p>
        I build real-time data pipelines from the ground up — designing
        Kafka-based event-driven architectures and Apache Flink stream
        processing jobs that transform, enrich, and route data at scale.
        These aren&apos;t toy projects; they run in production under sustained
        load.
      </p>

      <p>
        I handle the full lifecycle: schema design for event payloads,
        producer/consumer configuration, stateful stream processing with
        checkpointing, and monitoring pipeline health with alerting for
        lag and throughput anomalies.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          I stood up Apache Flink jobs from scratch in a codebase that had
          none — learning execution models, state backends, and windowing
          semantics on the fly. The hardest part wasn&apos;t writing the code;
          it was debugging subtle ordering and state issues that only
          surfaced once real production data started flowing through.
        </p>
      </div>
    </EpisodeLayout>
  );
}
