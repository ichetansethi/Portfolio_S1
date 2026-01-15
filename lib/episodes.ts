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
    content: [
      "I design and implement backend services with a focus on clean architecture, backward compatibility, and production reliability."
    ],
    behindTheScenes: [
      "A late-night production deployment introduced a hierarchy-related bug. I implemented a targeted API change to contain impact and restore stability without affecting other flows."
    ]
  },
  {
    id: "streaming",
    title: "Streaming & Data",
    subtitle: "Kafka · Apache Flink · Real-time Pipelines",
    content: [
      "I have built and integrated real-time data pipelines using Kafka and Apache Flink, starting from scratch and stabilizing them under production workloads."
    ],
    behindTheScenes: [
      "Designing and integrating Flink jobs from the ground up required deep understanding of execution models, state handling, and debugging streaming behavior once data was live."
    ]
  },
  {
    id: "database",
    title: "Databases & Reliability",
    subtitle: "SQL · PostgreSQL · Schema Evolution",
    content: [
      "I work with SQL and PostgreSQL to evolve data models in support of new system requirements while maintaining data integrity and stability."
    ],
    behindTheScenes: [
      "To support a new hierarchy standard, I added new columns, introduced a new table, and created indexes on previously underutilized tables that became critical to core workflows."
    ]
  },
  {
    id: "cicd",
    title: "CI/CD & Production Awareness",
    subtitle: "Jenkins · Deployment Pipelines",
    content: [
      "I have worked with Jenkins to define and support automated build and deployment workflows using configuration files and job DSL scripts."
    ],
    behindTheScenes: [
      "Writing deployment configurations and job definitions helped me understand how application code, environment configuration, and release discipline come together in production systems."
    ]
  },
  {
    id: "next-season",
    title: "The Next Season",
    subtitle: "React · JavaScript · Full-Stack Growth",
    content: [
      "I am expanding into frontend development and have built a full-stack personal finance tracker using React and JavaScript."
    ],
    behindTheScenes: [
      "Building and deploying a complete system end to end reinforced the importance of clear API contracts and predictable data flow between frontend and backend."
    ]
  }
];
