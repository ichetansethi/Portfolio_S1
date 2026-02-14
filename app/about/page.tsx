"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-netflix-red font-mono text-xs tracking-widest">
          ABOUT
        </span>
        <h1 className="text-4xl font-bold mt-2">The Creator</h1>
        <div className="h-[2px] w-16 bg-netflix-red mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 space-y-5 text-gray-300 leading-relaxed"
      >
        <p>
          I&apos;m a full-stack engineer who started in the backend trenches —
          building production APIs with Java and Spring Boot, designing
          real-time data pipelines with Kafka and Flink, and evolving
          PostgreSQL schemas under live traffic — and grew into someone
          who can own features from database to UI.
        </p>

        <p>
          I care about the things that don&apos;t show up in demos: backward
          compatibility, zero-downtime deployments, safe migrations, and
          systems that hold up at 2 AM without anyone babysitting them.
        </p>

        <p>
          I also work with Python for scripting, automation, and data
          processing — building tools with Django, Flask, FastAPI, and
          leveraging Pandas and DuckDB for fast analytical workloads.
        </p>

        <p>
          I&apos;m looking for teams that ship real products and value engineers
          who think across the stack. If that sounds like yours, let&apos;s talk.
        </p>
      </motion.div>

      {/* Tech stack summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-14"
      >
        <h2 className="text-sm font-mono text-netflix-red tracking-widest mb-6">
          TECH STACK
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
          {[
            "Java & Spring Boot",
            "Python",
            "Django & Flask",
            "FastAPI",
            "Kafka & Flink",
            "PostgreSQL & SQL",
            "DuckDB",
            "Pandas & NumPy",
            "Jenkins & CI/CD",
            "React & JavaScript",
            "AWS",
            "Git & GitHub",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
              className="border border-gray-800 rounded-sm px-4 py-2 hover:border-netflix-red/40 hover:text-gray-300 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
