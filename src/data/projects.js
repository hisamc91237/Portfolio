import { 
  SiReact, SiTailwindcss, SiVercel, 
  SiNodedotjs, SiRedux, SiFirebase, SiOpenai,
  SiPostman, SiJavascript, SiHtml5, SiGithub, SiGit
} from 'react-icons/si';
import cineviaImg from '../assets/cinevia.png';
import snippetVaultImg from '../assets/snippet_vault.png';

export const PROJECTS = [
  {
    id: "cinevia",
    title: "Cinevia",
    tagline: "AI-Powered Movie Discovery Platform",
    description: "Cinevia is a premium AI-powered movie recommendation and streaming discovery platform built to handle large media catalogs and provide personalized suggestions.",
    longDescription: "Cinevia is a dynamic, user-centric media discovery platform that allows users to seamlessly browse, search, and manage movies and TV shows. Built with a focus on performance and user experience, the application mirrors the responsiveness of enterprise-level streaming platforms.",
    problem: "Movie enthusiasts often spend more time browsing than watching due to overwhelming choices and fragmented streaming libraries. Traditional recommendation systems often fail to capture the nuanced preferences of users, leading to 'decision paralysis'.",
    solution: "Cinevia solves this by implementing an AI-driven suggestion engine that analyzes user taste more deeply. It centralizes discovery in a premium, distraction-free environment that prioritizes visual storytelling and intuitive navigation.",
    image: cineviaImg,
    liveUrl: "https://cinevia-gamma.vercel.app/browse",
    githubUrl: "https://github.com/hisamc91237/React-Practice/tree/main/Netflix-Gpt",
    role: "Full Stack Developer",
    date: "2024",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" }
    ],
    impact: [
      "API Optimization & Memoization: Handling large sets of media data originally caused UI lag and rate-limiting issues due to excessive API requests. I solved this by implementing state memoization. This drastically reduced redundant network requests and ensured smooth scrolling and rendering.",
      "Robust Form Validation: To ensure data integrity during user sign-ups and logins, I implemented strict client-side validation logic. This provided real-time feedback to users (e.g., password strength, email formatting) and prevented bad data from ever hitting the backend servers.",
      "State Management Architecture: Managing search filters, paginated API responses, and user preferences simultaneously required a scalable state management solution. I integrated Redux to decouple state from UI components, making the codebase highly modular and easier to scale."
    ],
    keyFeatures: [
      { title: "Dynamic Media Browsing", desc: "Real-time data fetching and rendering of thousands of media titles using the TMDB API." },
      { title: "Secure User Access", desc: "End-to-end authentication flow with strict form validation and error handling." },
      { title: "Responsive Architecture", desc: "A sleek, mobile-first interface that adapts perfectly to any screen size." }
    ]
  },
  {
    id: "snippet-vault",
    title: "SnippetVault",
    tagline: "Secure Developer Code Workspace",
    description: "SnippetVault is a full-stack code management application designed to handle secure snippet storage and structured access for developers.",
    longDescription: "Snippet Vault is a fast web utility built for developers to locally store, organize, and quickly retrieve reusable code snippets. Built entirely on the client side, the application leverages local browser storage to provide a seamless, database-free experience with zero network latency.",
    problem: "Developers frequently find themselves rewriting the same utility functions or searching through old projects for specific logic. Keeping code snippets in random notes or local files leads to fragmentation and wasted time.",
    solution: "SnippetVault provides a centralized, secure vault where code is not just stored, but organized and easily searchable. It treats snippets as first-class citizens, providing syntax highlighting and quick-access tools that integrate into the coding flow.",
    image: snippetVaultImg,
    liveUrl: "https://snippet-vault-blue.vercel.app/",
    githubUrl: "https://github.com/hisamc91237/SnippetVault",
    role: "Frontend Developer",
    date: "2024",
    tech: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "LocalStorage API", icon: SiVercel, color: "#000000", darkColor: "#FFFFFF" }
    ],
    impact: [
      "Managing Complex State & Local Storage: Building a CRUD app without a backend required robust handling of the browser's storage APIs. I created a custom useLocalStorage React hook to seamlessly synchronize the application's state with the browser's storage. This ensured data consistency and prevented data loss upon page refreshes.",
      "Optimizing Client-Side Search Performance: Because all data lives in the client, searching through a large array of snippets could potentially cause UI stuttering. I optimized the search and filter functionality using React's useMemo to memoize the filtered results, ensuring the app remains lightning-fast and only re-renders when absolutely necessary.",
      "Code Rendering & User Feedback: Displaying raw code required careful handling of text formatting. I integrated a syntax highlighting library to ensure code blocks were easily readable. Additionally, I utilized the native DOM Clipboard API to enable the \"copy\" feature, pairing it with custom state-driven toast notifications so users know exactly when an action succeeds."
    ],
    keyFeatures: [
      { title: "100% Client-Side CRUD", desc: "Users can create, edit, and delete snippets instantly with zero server lag." },
      { title: "Persistent Local Storage", desc: "Data is securely saved to the browser's LocalStorage, available even after closing the tab." },
      { title: "Instant Copy-to-Clipboard", desc: "A frictionless workflow allowing developers to grab the code they need with a single click." },
      { title: "Real-Time Filtering", desc: "Instantaneous search capabilities powered by optimized React state management." }
    ]
  }
];
