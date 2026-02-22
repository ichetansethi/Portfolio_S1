import EpisodeLayout from "@/components/episodelayout";

export default function DsaEpisode() {
  return (
    <EpisodeLayout
      episodeNumber={6}
      episodeId="dsa"
      title="Algorithms & Problem Solving"
      subtitle="DSA · Big O · Data Structures · Pattern Recognition"
    >
      <p>
        I&apos;m actively building this skill — going from beginner to
        intermediate in Data Structures and Algorithms. Arrays, linked lists,
        stacks, queues, trees, and sorting algorithms are no longer abstract
        concepts; they&apos;re tools I&apos;m learning to reach for at the right moment.
      </p>

      <p>
        I understand Big O notation and think about time and space complexity
        when I write code — not just &ldquo;does it work&rdquo; but &ldquo;how does it scale.&rdquo;
        That shift in thinking is already changing how I approach engineering
        problems at work, not just on a whiteboard.
      </p>

      <p>
        I&apos;m not where I want to be yet — and I&apos;m not pretending to be.
        But I&apos;m consistent, I&apos;m building pattern recognition, and I&apos;m
        getting better every week. This is in motion.
      </p>

      <div className="border-l-2 border-netflix-red/40 pl-5 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Behind the Scenes</h2>
        <p className="text-gray-400">
          Starting DSA after working in production systems was humbling in the
          best way. I had written code that worked — but studying algorithms
          made me realize I had been solving problems without truly understanding
          the mechanics underneath. That gap bothered me enough to fix it.
          Now I&apos;m fixing it.
        </p>
      </div>
    </EpisodeLayout>
  );
}