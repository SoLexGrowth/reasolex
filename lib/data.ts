import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Alex Doe",
  tagline: "Full-Stack Developer & AI Enthusiast Creating Tomorrow's Web",
  location: "San Francisco, CA",
  introduction: "I am a results-driven Full-Stack Developer with a passion for leveraging artificial intelligence to build innovative and user-centric web applications. With a foundation in modern frameworks and a keen eye for design, I transform complex problems into elegant, efficient, and scalable solutions.",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "GenAI",
    "LangChain",
    "UI/UX Design",
    "Cloud Deployment",
  ],
  accomplishments: [
    {
      title: "Lead Developer on Project Phoenix",
      description: "Led a team of 5 engineers to develop and launch a new e-commerce platform, resulting in a 40% increase in user engagement.",
    },
    {
      title: "AI Chatbot Integration",
      description: "Architected and integrated a GenAI-powered customer service chatbot, reducing support ticket volume by 60%.",
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to several popular open-source projects, including documentation and feature development for a UI component library.",
    },
  ],
  projects: [
    {
      title: "AI-Powered Content Platform",
      description: "A web platform that uses generative AI to help users create marketing copy, blog posts, and social media updates.",
      tags: ["Next.js", "GenAI", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
      imageId: "project-1",
    },
    {
      title: "Real-Time Collaborative Code Editor",
      description: "A browser-based code editor that allows multiple users to code together in real-time, with syntax highlighting for various languages.",
      tags: ["React", "WebSockets", "Node.js"],
      liveUrl: "#",
      repoUrl: "#",
      imageId: "project-2",
    },
    {
      title: "Smart Home Automation Dashboard",
      description: "A responsive dashboard to monitor and control various smart home devices, featuring data visualization and custom alerts.",
      tags: ["Vue.js", "IoT", "Firebase"],
      liveUrl: "#",
      repoUrl: "#",
      imageId: "project-3",
    },
    {
      title: "Portfolio Website Generator",
      description: "A tool for developers to quickly generate and deploy their own portfolio websites using a simple, intuitive interface.",
      tags: ["Gatsby", "GraphQL", "Netlify"],
      liveUrl: "#",
      repoUrl: "#",
      imageId: "project-4",
    },
  ],
  values: [
    {
      title: "Innovation",
      description: "I am driven by a constant desire to explore new technologies and push the boundaries of what's possible on the web.",
    },
    {
      title: "User-Centricity",
      description: "I believe the best products are built with a deep understanding of the people who use them. Empathy is at the core of my process.",
    },
    {
      title: "Collaboration",
      description: "I thrive in team environments, believing that shared knowledge and diverse perspectives lead to superior outcomes.",
    },
    {
      title: "Integrity",
      description: "I am committed to writing clean, maintainable code and building products that are reliable, secure, and accessible to all.",
    },
  ],
  contact: {
    email: "alex.doe@example.com",
    socials: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
};
