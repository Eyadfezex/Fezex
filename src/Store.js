import { atom } from "nanostores";

export const name = atom("eyad ahmed");
export const position = atom("front-end web developer");
export const bio = atom(
  "I am a front-end developer with one year of experience a passion for creating user-friendly and visually appealing interfaces. I have a strong background in React, Astro, NextJs and I am always looking for ways to improve my skills and stay up-to-date with the latest technologies.",
);

export const aboutContent = [
  {
    id: "about",
    content:
      "// I’m a skilled front-end developer with expertise in HTML, CSS, and JavaScript. I use frameworks like React and Astro to build responsive and visually appealing UIs. My attention to detail ensures high-quality code and a great user experience. I’m eager to contribute my skills to a collaborative team.",
  },
  {
    id: "hobbies",
    content: "// Reading, coding, and exploring new technologies.",
  },
  {
    id: "skills",
    content: "// Proficient in JavaScript, React, HTML, CSS, Astro, Next.js.",
  },
  {
    id: "education",
    content: "// Bachelor's degree in Computer Science from XYZ University.",
  },
];

export const aboutSectionState = atom("about");

export const menuToggle = atom(false);
