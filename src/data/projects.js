import project1Img from '../assets/images/project1.jpg';
import project2Img from '../assets/images/project2.jpg';
import project3Img from '../assets/images/project3.jpg';

export const projects = [
  {
    id: 'retailcore-platform',
    title: "RetailCore Platform",
    desc: "A full-scale headless commerce solution built for a global lifestyle brand focusing on speed and checkout conversion.",
    longDesc: "RetailCore is a headless commerce platform designed to handle high-traffic sales events. It integrates with Shopify Plus and Contentful to deliver a seamless shopping experience. Key features include real-time inventory management, personalized product recommendations, and a one-click checkout process.",
    technologies: ["React", "Next.js", "Shopify API", "TailwindCSS", "Redis"],
    img: project1Img,
    link: "#"
  },
  {
    id: 'saas-analytics',
    title: "SaaS Analytics Dashboard",
    desc: "Designing and developing a complex data engine into a clean, intuitive interface for marketing teams.",
    longDesc: "This analytics dashboard aggregates data from multiple marketing channels (Google Ads, Facebook, LinkedIn) into a single view. It allows marketing teams to track KPI performance in real-time and generate automated reports.",
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "AWS"],
    img: project2Img,
    link: "#"
  },
  {
    id: 'neobank-mobile',
    title: "NeoBank Mobile App",
    desc: "A high-fidelity mobile experience focused on personal finance management for the next generation of users.",
    longDesc: "A fintech mobile application that helps users manage their finances with AI-driven insights. Features include automated savings, expense tracking, and peer-to-peer payments.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    img: project3Img,
    link: "#"
  },
  {
    id: 'health-track',
    title: "HealthTrack Pro",
    desc: "A comprehensive health monitoring system for clinics and patients.",
    longDesc: "HealthTrack Pro enables clinics to monitor patient vitals remotely using IoT devices. It provides a dashboard for doctors and a mobile app for patients to track their health progress.",
    technologies: ["React", "Python", "Django", "PostgreSQL"],
    img: project1Img, // Reusing image for demo
    link: "#"
  },
  {
    id: 'crypto-exchange',
    title: "CryptoX Exchange",
    desc: "Secure and fast cryptocurrency exchange platform with real-time trading charts.",
    longDesc: "A high-performance crypto exchange supporting over 50 cryptocurrencies. It features advanced trading charts, limit orders, and a secure wallet system.",
    technologies: ["Angular", "RxJS", "WebSockets", "Go"],
    img: project2Img, // Reusing image for demo
    link: "#"
  },
  {
    id: 'travel-buddy',
    title: "TravelBuddy",
    desc: "An AI-powered travel itinerary planner.",
    longDesc: "TravelBuddy asks users about their preferences and budget, then generates a complete travel itinerary including flights, hotels, and activities using generative AI.",
    technologies: ["React", "OpenAI API", "Google Maps API", "Node.js"],
    img: project3Img, // Reusing image for demo
    link: "#"
  },
  {
    id: 'edu-learn',
    title: "EduLearn LMS",
    desc: "A modern Learning Management System for universities.",
    longDesc: "EduLearn provides a collaborative learning environment with video conferencing, assignment submission, and grade tracking features.",
    technologies: ["Moodle", "PHP", "JavaScript", "MySQL"],
    img: project1Img, // Reusing image for demo
    link: "#"
  },
  {
    id: 'smart-home',
    title: "SmartHome Hub",
    desc: "IoT dashboard for managing smart home devices.",
    longDesc: "A central hub to control lights, thermostats, and security cameras from a single interface. Supports voice commands and automation routines.",
    technologies: ["React", "MQTT", "Node-RED", "Raspberry Pi"],
    img: project2Img, // Reusing image for demo
    link: "#"
  }
];
