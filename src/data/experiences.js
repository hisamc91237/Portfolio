import { 
  SiReact, SiRedux, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiJavascript, SiTestinglibrary 
} from 'react-icons/si';

export const EXPERIENCES = [
  {
    company: "eClerx",
    role: "Front end Developer",
    date: "March 2023 - Present",
    location: "Hybrid",
    isRecent: true,
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Testing", icon: SiTestinglibrary, color: "#E33332" }
    ],
    description: "Spearheaded the frontend optimization of a high-traffic e-commerce platform. Focused on enhancing performance and translating complex product goals into release-ready features with a strong emphasis on maintainability.",
    points: [
      "Developed and maintained 15+ reusable React.js components using functional components and custom hooks (useState, useEffect), reducing UI development time by 35% across multiple product teams.",
      "Optimized application performance using Memoization (React.memo, useMemo), code splitting, and lazy loading, reducing initial page load time from 2.2s to 1.4s.",
      "Introduced and implemented Jest and React Testing Library in collaboration with QA teams, reducing manual testing effort by 70% and production bugs by 45%.",
      "Leveraged AI-assisted development tools (Antigravity IDE) to automate repetitive banner content generation and streamline UI/UX component testing, reducing development time by 75% and improving content review accuracy."
    ]
  },
  {
    company: "DevTown",
    role: "Full Stack Developer Intern",
    date: "January 2023 - April 2023",
    location: "Remote",
    isRecent: false,
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ],
    description: "Contributed primarily to the frontend and UI architecture of a full-stack food delivery application. Focused on engineering scalable pages and supporting backend integration.",
    points: [
      "Engineered multiple core application pages from scratch, ensuring full responsiveness and long-term scalability.",
      "Crafted intuitive and high-performance UI components tailored for a seamless food ordering experience.",
      "Collaborated on backend roles in Node.js and MongoDB to ensure efficient data flow between client and server.",
      "Refined frontend architecture for better asset management and faster initial page loads."
    ]
  }
];
