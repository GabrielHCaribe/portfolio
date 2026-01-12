// data/projects.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Used for the Gallery cards
  content: string[];        // Array of strings to allow multiple paragraphs
  tags: string[];
  image: string;
  link?: string;            // Optional: for external links (GitHub, Live site)
}

export const projects: Project[] = [
  {
    id: "0",
    title: "CAN-RXG Team Cristar",
    shortDescription: "Electrical lead for team Cristar testing laser-induced crystallization.",
    content: [
      "This project involved a deep dive into numerical analysis, specifically exploring wave function collapse using Python and NumPy.",
      "As the Electrical Lead, my primary focus was component selection and ensuring the stability of the laser system under varying gravitational loads.",
      "The results provided significant data for our research into microgravity physics."
    ],
    tags: ["Electrical Engineering", "Python", "Physics"],
    image: "/project-placeholder.jpg"
  },
  {
    id: "1",
    title: "PID Heating System",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Engineering", "MATLAB", "Statics"],
    image: "/project-placeholder.jpg"
  }
  // Add more projects here as needed...
];