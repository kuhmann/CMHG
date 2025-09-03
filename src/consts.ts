import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "CMHG",
  DESCRIPTION: "Community Mousehunt Guide (Open Source)",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage",
};

export const GUIDE: Metadata = {
  TITLE: "Guide",
  DESCRIPTION: "A collection of MouseHunt guides and tips.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Mousehunt",
    HREF: "https://www.mousehuntgame.com/",
  },
  {
    NAME: "Discord",
    HREF: "https://discord.gg/mousehunt",
  },
  {
    NAME: "Reddit",
    HREF: "https://www.reddit.com/r/mousehunt/",
  },
  {
    NAME: "Forum",
    HREF: "https://www.mousehuntgame.com/forum",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/kuhmann/CMHG",
  },
];
