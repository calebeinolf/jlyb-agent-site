export const validPages = ["1", "2", "3", "4"] as const;

export type PageId = (typeof validPages)[number];

export const pageData: Record<PageId, { title: string; iframeUrl: string }> = {
  "1": { title: "1", iframeUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" },
  "2": { title: "2", iframeUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
  "3": { title: "3", iframeUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
  "4": { title: "4", iframeUrl: "https://www.youtube.com/embed/9bZkp7q19f0" },
};
