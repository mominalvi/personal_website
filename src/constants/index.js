import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    queens,
    qdaa,
    qmind,
    compsa,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Scientist",
      icon: web,
    },
    {
      title: "Developer",
      icon: mobile,
    },
    {
      title: "Innovator",
      icon: backend,
    },
    {
      title: "Entrepreneur",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "General Member",
      company_name: "Queen's Data Analytics Association (QDAA)",
      icon: qdaa,
      iconBg: "#383E56",
      date: "October 2023 - April 2024",
      points: [
        "Learning data analytic skills.",
        "Collaborating in a team to innovate and implement data-driven approaches.",
        "Enhancing technical skills in data analytics and software development through hands-on projects.",
      ],
    },
    {
      title: "Design Team Member",
      company_name: "Queen’s AI, Machine Learning, and Disruptive Technologies (QMIND)",
      icon: qmind,
      iconBg: "#E6DEDD",
      date: "November 2023 - April 2024",
      points: [
        "Contributed with 5 team members to develop a machine learning application to predict patients length-of-stay.",
        "Worked with the team to author a research paper detailing the insights and findings from our project.",
        "Acquired machine learning skills to effectively integrate and apply them in the project.",
      ],
    },
    {
      title: "Internship Coordinator",
      company_name: "Queen’s Computing Student’s Association (COMPSA)",
      icon: compsa,
      iconBg: "#383E56",
      date: "November 2023 - April 2024",
      points: [
        "Managed weekly internship listings for 1200+ computer science students on the official COMPSA website.",
        "Organized an event where 50+ students visited Bell and Google offices in Toronto.",
        "Created a JavaScript application to send an HTML email to 100+ alumni.",
        "Organized an event attended by 20+ alumni, who shared their career experiences and insights with students.",
      ],
    },
    {
      title: "Startup Co-Founder",
      company_name: "Queen’s University Innovation Centre Summer Initative (QICSI)",
      icon: queens,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Collaborating within a team to ideate, develop, and implement a startup concept in the senior healthcare space.",
        "Conducting market research to identify opportunities and challenges within the senior healthcare industry.",
        "Engaging with industry experts, mentors, and advisors to gain insights and feedback on our startup concept.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };