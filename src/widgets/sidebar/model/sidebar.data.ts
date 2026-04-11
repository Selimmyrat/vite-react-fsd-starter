import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      titleKey: "nav.playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          titleKey: "nav.history",
          url: "#",
        },
        {
          titleKey: "nav.starred",
          url: "#",
        },
        {
          titleKey: "nav.settings",
          url: "#",
        },
      ],
    },
    {
      titleKey: "nav.models",
      url: "#",
      icon: Bot,
      items: [
        {
          titleKey: "nav.genesis",
          url: "#",
        },
        {
          titleKey: "nav.explorer",
          url: "#",
        },
        {
          titleKey: "nav.quantum",
          url: "#",
        },
      ],
    },
    {
      titleKey: "nav.documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          titleKey: "nav.introduction",
          url: "#",
        },
        {
          titleKey: "nav.getStarted",
          url: "#",
        },
        {
          titleKey: "nav.tutorials",
          url: "#",
        },
        {
          titleKey: "nav.changelog",
          url: "#",
        },
      ],
    },
    {
      titleKey: "nav.settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          titleKey: "nav.general",
          url: "#",
        },
        {
          titleKey: "nav.team",
          url: "#",
        },
        {
          titleKey: "nav.billing",
          url: "#",
        },
        {
          titleKey: "nav.limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      nameKey: "projects.designEngineering",
      url: "#",
      icon: Frame,
    },
    {
      nameKey: "projects.salesMarketing",
      url: "#",
      icon: PieChart,
    },
    {
      nameKey: "projects.travel",
      url: "#",
      icon: Map,
    },
  ],
};
