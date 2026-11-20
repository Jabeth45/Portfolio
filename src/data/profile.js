// EDIT ME: personal info used by the hero, contact section and footer.
// Headline matches the LinkedIn headline. Keep the CV (public/Yabets-Melese-CV.pdf) in sync.
export const profile = {
  name: "Yabets Melese",

  // The headline from the CV, one entry per segment. The hero joins them with " | ".
  role: ["Software Engineer", "Cybersecurity Enthusiast", "Full-Stack Developer"],

  intro:
    "Software Engineer building full-stack apps and security tools, and testing web apps for security gaps. Looking for a software development internship, with a growing focus on cybersecurity.",

  // Paragraphs shown in the About section.
  about: [
    "I'm a Software Engineering student at Arba Minch University with a strong interest in cybersecurity, software development, and cloud computing.",
    "I enjoy exploring technology, building practical solutions, understanding how systems work, and finding ways to make them more secure and reliable.",
  ],

  // Put a square photo (600x600 or bigger) in /public and update src, width and height.
  photo: {
    src: "/profile.webp",
    width: 200,
    height: 200,
    alt: "Portrait of Yabets Melese",
  },

  // CV button shows in the hero and in Contact. Set to null to hide it.
  // The file lives in /public. Note: this CV lists a phone number; swap in a copy without it if you prefer.
  cv: { file: "/Yabets-Melese-CV.pdf", downloadName: "Yabets-Melese-CV.pdf" },

  links: {
    github: "https://github.com/Jabeth45",
    email: "mailto:meleseyabets@gmail.com",
  },

  learning: {
    title: "Currently learning",
    text: "Going deeper into web application security and penetration testing while building full-stack projects. Cybersecurity trained through the INSA Summer Camp (CTC), 5th batch.",
  },

  contact: {
    title: "Let's connect",
    text: "Open to a software development internship and to working on projects together. Get in touch.",
  },

  // Shown in the footer.
  location: "Addis Ababa, Ethiopia",
}