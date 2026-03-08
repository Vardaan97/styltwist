export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "stat"; value: string; label: string; source: string }
  | { type: "stats-row"; stats: { value: string; label: string; source: string }[] }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "tip"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  content: ContentBlock[];
}
