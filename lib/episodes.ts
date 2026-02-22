export interface Episode {
  id: string;
  title: string;
  subtitle: string;
  preview: string;
  content: string[];
  behindTheScenes: string[];
}

export const episodes: Episode[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: "Java · Spring Boot · Production APIs",
    preview: "RESTful APIs with versioned contracts, layered service architecture, and zero-downtime deployments — built for real production traffic.",
    content: [],
    behindTheScenes: []
  },
  {
    id: "streaming",
    title: "Streaming & Data",
    subtitle: "Kafka · Apache Flink · Real-time Pipelines",
    preview: "Kafka-based event-driven architectures and Apache Flink stream processing jobs handling schema design, stateful processing, and production monitoring.",
    content: [],
    behindTheScenes: []
  },
  {
    id: "database",
    title: "Databases & Reliability",
    subtitle: "SQL · PostgreSQL · Schema Evolution",
    preview: "Production-safe schema migrations, query optimization, and data models that balance normalization with real-world read performance.",
    content: [],
    behindTheScenes: []
  },
  {
    id: "cicd",
    title: "CI/CD & Production Awareness",
    subtitle: "Jenkins · Docker · Deployment Pipelines",
    preview: "Jenkinsfiles, multi-stage build pipelines, and deployment workflows that ship fast without sacrificing safety or rollback readiness.",
    content: [],
    behindTheScenes: []
  },
  {
    id: "next-season",
    title: "Frontend Engineering",
    subtitle: "React · Next.js · TypeScript · Full-Stack",
    preview: "Full-stack development with Next.js and TypeScript — adding a frontend dimension to backend depth to own features end to end.",
    content: [],
    behindTheScenes: []
  },
  {
    id: "dsa",
    title: "Algorithms & Problem Solving",
    subtitle: "DSA · Big O · Data Structures · Pattern Recognition",
    preview: "Actively building from beginner to intermediate — arrays, trees, sorting, and the algorithmic thinking that makes engineers sharper at every level.",
    content: [],
    behindTheScenes: []
  }
];
