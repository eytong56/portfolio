import { Experience, Project } from "@/app/lib/definitions";

export const contacts = {
  email: "mailto:emmatong56@gmail.com",
  linkedin: "https://www.linkedin.com/in/emma-tong",
  github: "https://github.com/eytong56",
};

export const taglines = [
  "Recent graduate of the <span className='bold'>Carnegie Mellon University School of Computer Science</span>.",
];

export const education: Experience[] = [
  {
    company: "Carnegie Mellon University",
    description: [
      "BS in Computer Science",
      "Minor in Music Technology",
      "3.90 / 4.00",
    ],
    date: "2021 - 2025",
  },
];

export const experiences: Experience[] = [
  {
    company: "Carnegie Mellon University, School of Computer Science",
    description: ["Functional Programming Course Teaching Assistant"],
    date: "2022 - 2025",
  },
  {
    company: "Carnegie Mellon University, School of Computer Science",
    description: ["Functional Programming Course Head Teaching Assistant"],
    date: "2024",
  },
];

export const development_projects: Project[] = [
  {
    title: "Custom NYT Games Leaderboard Website",
    description:
      "Full-stack web application built using Next.js with Typescript, PostgreSQL, and Tailwind CSS, hosted on Vercel.",
    tags: ["2025", "personal project", "solo"],
    image_url: "/images/nyt-leaderboard.png",
    link_url: "https://nyt-games-leaderboard.vercel.app/",
  },
  {
    title: "Daily Task Management Application",
    description:
      "Full-stack web application built using React with Tailwind CSS frontend and Node.js / Express.js / PostgreSQL backend.",
    tags: ["2025", "personal project", "solo"],
    image_url: "/images/task-app.png",
    link_url: "https://github.com/eytong56/task-app",
  },
  {
    title: "Raft Consensus Algorithm Implementation",
    description:
      "Implementation of Raft, a fault-tolerant distributed consensus system, in Go with RPC-based peer communication, leader elections, and log replication.",
    tags: ["2024", "course project", "solo"],
    image_url: "/images/raft.png",
  },
  {
    title: "Hackathon Social Application",
    description:
      "Social app prototype that analyzes personality quizzes to strengthen friendships. Won “Best Hack for a More Connected World” at HackCMU 2022.",
    tags: ["2022", "hackathon project", "team"],
    image_url: "/images/personalate.png",
    link_url:
      "https://docs.google.com/presentation/d/1_1kVrmnP_gW4BS1sxEE3zkYLk3F6pprJv_8Bs2Nz354/edit?usp=sharing",
  },
  {
    title: "CMU Japanese Student Association Website",
    description:
      "The official website for the Japanese Student Association at Carnegie Mellon University, translated from Figma mockups using HTML, CSS, JavaScript, and Bootstrap.",
    tags: ["2022", "personal project", "solo"],
    image_url: "/images/cmu-jsa.png",
    link_url: "https://github.com/cmujsa/cmujsa-web",
  },
  {
    title: "Virasa: A Galaga Remix",
    description:
      "Remix of the classic arcade game Galaga, built using Unity with C# as part of Carnegie Mellon University’s National High School Game Academy.",
    tags: ["2020", "course project", "team"],
    image_url: "/images/virasa.png",
    link_url:
      "https://docs.google.com/presentation/d/1YeIVLPhrF0065LEgl1T9zKwikLjSC4emd-cWe01DGAo/",
  },
];

export const design_projects: Project[] = [
  {
    title: "Interactive Children's Museum Exhibit",
    description:
      "An interactive exhibit for the Children's Museum of Pittsburgh, designed to develop active listening habits and curiosity in children.",
    tags: ["2025", "course project", "team"],
    image_url: "/images/museum.png",
    link_url:
      "https://drive.google.com/file/d/1yFpwp7BoS45ZG9L80E5TtFdEdWEff-gx/view?usp=sharing",
  },
  {
    title: "Complex Editorial System",
    description:
      "A print magazine article and an online magazine article page based on an existing story.",
    tags: ["2024", "personal project", "solo"],
    image_url: "/images/editorial.png",
    link_url: "https://medium.com/@eytong/project-4-b72e8108e9a2",
  },
  {
    title: "Branded Digital Communication",
    description:
      "A redesign of the Oregon Food Bank digital newsletter on multiple devices.",
    tags: ["2024", "course project", "solo"],
    image_url: "/images/newsletter.png",
    link_url: "https://medium.com/@eytong/project-3-c7ce1b0261a0",
  },
  {
    title: "Typographic Event Series Poster",
    description:
      "Typographic posters for Just Films, an organization committed to using film to educate and promote conversations and actions in the realm of gender equity and social justice.",
    tags: ["2024", "course project", "solo"],
    image_url: "/images/poster.png",
    link_url: "https://medium.com/@eytong/project-1-44ba43192cc8",
  },
];
