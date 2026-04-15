type PageDefinition = {
  title: string;
  description: string;
  iframeUrl: string;
  color: string;
};

export const pageData = {
  questions: {
    title: "General Questions",
    description: "Ask broad, everyday faith questions.",
    iframeUrl: "https://jlybquestions.apologetics.bot/en",
    color: "#fcb130",
  },
  mission: {
    title: "Mission",
    description: "Explore purpose, calling, and direction.",
    iframeUrl: "https://jlybmission.apologetics.bot/en",
    color: "#0081c7",
  },
  curiosity: {
    title: "Curiosity",
    description: "Follow interesting ideas and what-ifs.",
    iframeUrl: "https://jlybcuriosity.apologist.bot/en",
    color: "#00910a",
  },
  "skill-development": {
    title: "Skill Development",
    description: "Build practical habits and communication skills.",
    iframeUrl: "https://jlybskilldevelopment.apologetics.bot/en",
    color: "#ed324e",
  },
} satisfies Record<string, PageDefinition>;

export type PageId = keyof typeof pageData;

export const validPages = Object.keys(pageData) as PageId[];
