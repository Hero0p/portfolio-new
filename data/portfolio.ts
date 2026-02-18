export const portfolioData = {
  basics: {
    name: "Nishant Chaudhary",
    phone: "+91 62654 24813",
    email: "nishantc3110@gmail.com",
    github: "https://github.com/Hero0p",
    portfolio: "https://portfolio-nish-eta.vercel.app",
    location: {
      country: "India",
    },
  },
  education: [
    {
      institution: "Bennett University",
      location: "Greater Noida, India",
      degree: "Bachelor of Technology",
      startYear: 2023,
      endYear: 2027,
    },
    {
      institution: "Gyan Ganga International School",
      location: "Madhya Pradesh, India",
      degree: "Higher Secondary Education (Class XII)",
      startYear: 2022,
      endYear: 2023,
    },
  ],
  projects: [
    {
      name: "CourtClerk",
      type: "AI-Powered Legal Assistant",
      techStack: ["MongoDB", "Express.js", "Node.js", "EJS", "Gemini API"],
      description:
        "An AI-powered legal assistant designed to simplify access to central Indian laws for laymen, students, and legal professionals.",
      features: [
        "AI-based legal query handling",
        "Contextual legal search",
        "Legal document summarization",
        "Structured legal data pipelines",
      ],
      uniqueValue:
        "Bridges AI, law, and accessibility by connecting users with reliable legal knowledge and real legal assistance.",
      imageUrl: "/images/court-clerk.png",
      githubUrl: "https://github.com/Hero0p/CourtClerk",
      liveUrl: "https://courtclerk.onrender.com",
    },
    {
      name: "TourCraze",
      type: "Full-Stack Vacation Rental Platform (Airbnb Clone)",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Bootstrap",
      ],
      description: "A scalable full-stack vacation rental platform inspired by Airbnb.",
      features: [
        "Property listings",
        "Booking system",
        "Image uploads",
        "Reviews and ratings",
        "User authentication",
      ],
      uniqueValue:
        "Clean architecture, modular backend, REST APIs, and complete CRUD implementation.",
      imageUrl: "/images/tour-craze.png",
      githubUrl: "https://github.com/Hero0p/TourCraze",
      liveUrl: "https://tourcraze.onrender.com/listings",
    },
    {
      name: "HungerHeaven",
      type: "Full-Stack Food Service Platform",
      techStack: ["Node.js", "Express", "React", "MongoDB", "ImageKit"],
      description:
        "A Zomato-inspired food service platform with reels-style short video integration.",
      features: [
        "Real-time food browsing",
        "Short-form video content",
        "Media uploads",
        "Efficient content delivery",
      ],
      uniqueValue:
        "Combines short-video food discovery with a scalable backend architecture.",
      imageUrl: "/images/hunger-heaven.png",
      githubUrl: "https://github.com/Hero0p/hunger-heaven",
      liveUrl: "https://hunger-heaven-two.vercel.app/",
    },
  ],
  skills: {
    languages: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    coreDomains: ["Web Development", "Machine Learning", "Deep Learning", "Agentic AI"],
    frameworks: ["React", "Node.js", "Flask", "LangChain", "LangGraph"],
    developerTools: [
      "Git",
      "Docker",
      "Postman",
      "VS Code",
      "PyCharm",
      "Cursor",
      "Google Cloud Platform",
    ],
    libraries: ["NumPy", "Pandas", "Matplotlib", "Tensorflow"],
  },
  achievements: [
    "Solved 350+ Data Structures and Algorithms problems on LeetCode",
    "3-Star CodeChef rating (1700+)",
    "1500+ rating on LeetCode",
  ],
  certifications: [
    {
      name: "Agentic-AI Course",
      provider: "Krish Naik",
      platform: "Udemy",
    },
    {
      name: "Delta: Full-Stack Development",
      provider: "Apna College",
    },
    {
      name: "Deep Neural Networks",
      provider: "Coursera",
    },
    {
      name: "Dynamic Programming in C++",
      provider: "Coursera",
    },
    {
      name: "Data Structures & Algorithms in C++",
      provider: "Coursera",
    },
  ],
  extracurricular: [
    {
      role: "House Prefect",
      duration: "Class XI–XII",
      description:
        "Led and coordinated 50+ junior students during inter-house events and guided the team to secure second position in the annual function.",
    },
    {
      role: "National Service Scheme (NSS) Volunteer",
      duration: "1 Year",
      description:
        "Participated in 7+ social service events focused on helping underprivileged communities.",
    },
    {
      achievement: "Inter-School Spell Bee Semi-Finalist",
    },
    {
      achievement: "Intra-School Chess Champion",
    },
  ],
};
