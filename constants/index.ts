export const technologies =[
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      glowClass: "hover:border-[#61dafb] hover:shadow-[0_0_25px_rgba(97,218,251,0.25)]"
     },
{ name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  glowClass:"hover:border-foreground dark:hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
 },
{ name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  glowClass: "hover:border-[#3178c6] hover:shadow-[0_0_25px_rgba(49,120,198,0.25)]"
 },
{ name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  glowClass: "hover:border-[#22c55e] hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
 },
// { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
// //   glowClass: "hover:border-[#4169e1] hover:shadow-[0_0_25px_rgba(65,105,225,0.25)]" },
{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  glowClass: "hover:border-[#47a248] hover:shadow-[0_0_25px_rgba(71,162,72,0.25)]"
 },
{ name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  glowClass: "hover:border-[#2496ed] hover:shadow-[0_0_25px_rgba(36,150,237,0.25)]"
 },
{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  glowClass: "hover:border-[#f05032] hover:shadow-[0_0_25px_rgba(240,80,50,0.25)]"
 },
// { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
// { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
{ name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  glowClass: "hover:border-[#3776ab] hover:shadow-[0_0_25px_rgba(55,118,171,0.25)]"
 },
{name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  glowClass: "hover:border-[#ff9900] hover:shadow-[0_0_25px_rgba(255,153,0,0.25)]"
},
]
export const projects =[
    {
  title: "Smart Air Quality Monitoring & Forecasting System",
  description: "An end-to-end IoT solution that captures real-time environmental telemetry and utilizes Long Short-Term Memory (LSTM) neural networks to accurately forecast future Air Quality Index (AQI) levels.",
  image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
  technologies: ["Python", "TensorFlow/Keras", "ESP32 / NodeMCU", "MQTT", "Pandas"],
  features: [
    "Real-time edge telemetry via IoT sensors (PM2.5, gases, weather)",
    "Time-series predictive forecasting using deep learning (LSTM)",
    "Automated data pipeline with missing value interpolation",
  ]
}
]
