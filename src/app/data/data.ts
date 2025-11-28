export const PORTFOLIO_DATA = {

  personal: {
    name: "Kunal S",
    phone: "+91-8830551393",
    email: "kunalshinde0612@gmail.com",
    location: "Pune, IND",
    tagline: "Building reliable and efficient software.",
    title: "Software Engineer",
    isAvailable: true,
    summary: "I’m a software engineer based in Pune, India, with experience in Frontend Development and Robotics. I am pursuing Computer Engineering at Pune Institute of Computer Technology.",
    profileImage: "../../assets/icons/kunal_img.png",
    memojiImage:"../../assets/icons/memoji.png"
  },

  education: [
    {
      institute: "Pune Institute of Computer Technology",
      degree: "B.E. Computer Engineering",
      cgpa: "8.9/10",
      period: "Expected July 2026",
      location: "Pune, Maharashtra"
    }
  ],

  experience: [
    {
      id: "divegen",
      role: "Frontend Dev Intern",
      company: "Divegen Technologies",
      location: "Remote",
      period: "Feb 2025 – Apr 2025",
      points: [
        "Collaborated with client teams to gather and analyze business requirements.",
        "Designed user journeys and solution flows aligned with business objectives.",
        "Created UI/UX designs in Figma and implemented them as responsive React.js components.",
        "Performed accessibility-focused testing following WCAG guidelines.",
        "Iterated on features through continuous client feedback loops to improve usability."
      ],
      logo: "../../assets/icons/divegen.png",
      link: "https://divegentechnologies.com"
    },
    {
      id: "pict-robotics",
      role: "Robotics Design Lead",
      company: "PICT Robotics",
      location: "Pune, Maharashtra",
      period: "Sep 2024 – Jul 2025",
      points: [
        "Led robotics design for Robocon 2025.",
        "Managed and mentored a 15-member team for structure and strategy development.",
        "Built cost-effective and competition-ready robotic designs."
      ],
      logo: "../../assets/icons/robotics.png",
      link: "https://www.linkedin.com/company/pictrobotics/posts/?feedView=all"
    }
  ],

  projects: [
    {
      id: "threatcast",
      title: "ThreatCast",
      tech: [
        "Next.js",
        "Azure",
        "M/L",
      ],
      points: [
        "Built a cyber-threat forecasting tool for Barclays Hack-O-Hire 2024 using real-world threat data.",
        "Developed interactive dashboards in Next.js with Recharts for visualizing trends and ML predictions.",
        "Implemented time-triggered Azure Functions to fetch and process threat intelligence data.",
        "Handled structured and unstructured data storage using Azure SQL and Cosmos DB.",
        "Achieved ~70% prediction accuracy using ML models for pattern detection."
      ],
      logo: "../../assets/icons/threatcast.png",
      link: "https://github.com/Kunals0612/Cyber-Threat-Forecasting" // replace if you have repo
    },
    {
      id: "linkify",
      title: "Linkify",
      tech: [
        "Next.js",
        "Express.js",
        "ORM"
      ],
      points: [
        "Built a full-stack customer engagement platform delivering personalized discounts and recommendations.",
        "Developed a modular backend using Express.js and Sequelize ORM with MySQL.",
        "Integrated Recombee API for AI-based product recommendations.",
        "Used Cohere AI for dynamic ad content generation.",
        "Automated targeted email campaigns using NodeMailer."
      ],
      logo: "../../assets/icons/Linkify.png",
      link: "https://github.com/Kunals0612/Linkify" // replace if you have repo
    },
    {
      id: "agrosense",
      title: "Agrosense",
      tech: [
        "Next.js",
        "IOT",
        "M/L"
      ],
      points: [
        "Developed an IoT-based smart agriculture system that captures real-time soil moisture, humidity, and temperature data.",
        "Built a sensor-to-cloud pipeline using ESP32 nodes for continuous environmental monitoring.",
        "Trained and deployed a machine learning model that recommends optimal fertilizers based on captured field metrics.",
        "Combined real-time sensing with predictive analytics to help farmers make data-driven crop decisions."
      ],
      logo: "../../assets/icons/Agrosense.png",
      link: "https://github.com/orgs/ProjectBasedLearning-2/dashboard" // replace if you have repo
    }
  ]
,

  skills: [
  "React.js",
  "Express.js",
  "Next.js",
  "Docker",
  "SQL",
  "MongoDB",
  "C++",
  "Java",
  "Jest",
  "Git",
  "Javascript",
  "Azure"
  ],

  achievements: [
    "Specialist on Codeforces (1567 max rating)",
    "4★ on CodeChef (1914 max rating)",
    "Top 7% on LeetCode (1815 max rating)",
    "5★ Python on HackerRank",
    "Top 25 / 1200 teams – Barclays Hackathon"
  ],
  socials: [
  {
    name: "LinkedIn",
    icon: "../../assets/icons/Linkedin.png",
      url: "https://www.linkedin.com/in/kunal-s-1ab248264/"
  },
  {
    name: "GitHub",
    icon: "../../assets/icons/github.png",
    url: "https://github.com/Kunals0612"
  },
  {
    name: "LeetCode",
    icon: "../../assets/icons/leetcode.png",
    url: "https://leetcode.com/u/kunals04"
  },
]

};