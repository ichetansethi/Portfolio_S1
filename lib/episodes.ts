export interface Episode {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  behindTheScenes: string[];
}

export const episodes: Episode[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: "Java · Spring Boot · Production APIs",
    content: [],
    behindTheScenes: []
  },
  {
    id: "streaming",
    title: "Streaming & Data",
    subtitle: "Kafka · Apache Flink · Real-time Pipelines",
    content: [],
    behindTheScenes: []
  },
  {
    id: "database",
    title: "Databases & Reliability",
    subtitle: "SQL · PostgreSQL · Schema Evolution",
    content: [],
    behindTheScenes: []
  },
  {
    id: "cicd",
    title: "CI/CD & Production Awareness",
    subtitle: "Jenkins · Docker · Deployment Pipelines",
    content: [],
    behindTheScenes: []
  },
  {
    id: "next-season",
    title: "The Next Season",
    subtitle: "React · Next.js · TypeScript · Full-Stack",
    content: [],
    behindTheScenes: []
  }
];
