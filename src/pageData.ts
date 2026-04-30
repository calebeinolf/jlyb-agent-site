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
    color: "#FBB030",
  },
  mission: {
    title: "Mission",
    description: "Learn how to share Jesus through the game.",
    iframeUrl: "https://jlybmission.apologetics.bot/en",
    color: "#1f67ff",
  },
  curiosity: {
    title: "Curiosity",
    description: "Learn what the Jesus Loves You Ball is all about.",
    iframeUrl: "https://jlybcuriosity.apologist.bot/en",
    color: "#00A651",
  },
  "skill-development": {
    title: "Skill Development",
    description: "Practical help for players and coaches who want to grow.",
    iframeUrl: "https://jlybskilldevelopment.apologetics.bot/en",
    color: "#e73e52",
  },
} satisfies Record<string, PageDefinition>;

export type PageId = keyof typeof pageData;

export const validPages = Object.keys(pageData) as PageId[];
