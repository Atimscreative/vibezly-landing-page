export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const colorClassMap = {
  red: {
    text: "text-red-400",
    description: "text-red-300/80",
    heading: "text-red-300",
    bgFrom: "from-red-500/10",
    bgTo: "to-red-600/5",
    border: "border-red-500",
    bgSoft: "bg-red-500/10",
  },
  yellow: {
    text: "text-yellow-400",
    description: "text-yellow-300/80",
    heading: "text-yellow-300",
    bgFrom: "from-yellow-500/10",
    bgTo: "to-yellow-600/5",
    border: "border-yellow-500",
    bgSoft: "bg-yellow-500/10",
  },
  pink: {
    text: "text-pink-400",
    description: "text-pink-300/80",
    heading: "text-pink-300",
    bgFrom: "from-pink-500/10",
    bgTo: "to-pink-600/5",
    border: "border-pink-500",
    bgSoft: "bg-pink-500/10",
  },
  blue: {
    text: "text-blue-400",
    description: "text-blue-300/80",
    heading: "text-blue-300",
    bgFrom: "from-blue-500/10",
    bgTo: "to-blue-600/5",
    border: "border-blue-500",
    bgSoft: "bg-blue-500/10",
  },
};

export const personaColors = {
  red: ["#fca5a5", "#f87171", "#ef4444"], // red
  yellow: ["#fde68a", "#facc15", "#eab308"], // yellow
  pink: ["#f9a8d4", "#f472b6", "#ec4899"], // pink
  blue: ["#93c5fd", "#60a5fa", "#3b82f6"], // blue
};

export type PersonaColor = keyof typeof personaColors;
