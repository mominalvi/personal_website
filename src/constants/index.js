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
    scholarpups,
    blog,
    plane,
    threejs,
    qhdt,
    TBA
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
        "Learning data analytic skills",
        "Collaborating in a team to innovate and implement data-driven approaches",
        "Enhancing technical skills in data analytics and software development through hands-on projects",
      ],
    },
    {
      title: "Design Team Member",
      company_name: "Queen’s AI, Machine Learning, and Disruptive Technologies (QMIND)",
      icon: qmind,
      iconBg: "#E6DEDD",
      date: "November 2023 - April 2024",
      points: [
        "Contributed with 5 team members to develop a machine learning application to predict patients length-of-stay",
        "Worked with the team to author a research paper detailing the insights and findings from our project",
        "Acquired machine learning skills to effectively integrate and apply them in the project",
      ],
    },
    {
      title: "Internship Coordinator",
      company_name: "Queen’s Computing Student’s Association (COMPSA)",
      icon: compsa,
      iconBg: "#383E56",
      date: "November 2023 - April 2024",
      points: [
        "Managed weekly internship listings for 1200+ students on the COMPSA website, leading to a 20% rise in site traffic",
        "Organized an event where 50+ students visited Bell and Google offices, fostering career interest and student networking",
        "Automated emailing with JavaScript for 100+ alumni, reducing manual workload and saving 5+ hours per week",
        "Coordinated an event with 20+ alumni, providing students with industry insights and understanding of potential careers",
      ],
    },
    {
      title: "Startup Co-Founder",
      company_name: "Queen’s University Innovation Centre Summer Initative (QICSI)",
      icon: queens,
      iconBg: "#E6DEDD",
      date: "May 2024 - August 2024",
      points: [
        "Co-founded Vita Home, a marketplace for senior accessibility equipment to enhance independence and safety at home",
        "Utilized Next.js, Node.js, and MySQL to develop an MVP, enhancing search ease and receiving positive user feedback",
        "Leading research with 50+ seniors and professionals, gaining 10+ potential customers and validating demand",
        "Engaging with industry experts and mentors to gain feedback on our concept, improving alignment with user needs"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Queen's Data Analytics Association (QDAA)",
      icon: qdaa,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "TBA",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Queen’s Computing Student’s Association (COMPSA)",
      icon: compsa,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Optimizing backend for Mirrorball II with Node.js, Express.js, and Sequelize ORM to automate student club hiring",
        "Designing Sequelize models in MySQL to structure data flow, improving backend efficiency",
        "Integrating Calendly and Postmark APIs to automate interview scheduling and email notifications",
        "Utilizing Git for version control, boosting workflow efficiency by 25%",
      ],
    },
    {
      title: "Electrical Designer",
      company_name: "Queen's Hyperloop Design Team (QHDT)",
      icon: qhdt,
      iconBg: "#383E56",
      date: "October 2024 - Present",
      points: [
        "TBA"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Scholar Pups",
      description:
        "Scholar Pups is an online scholarship counselor that provides personalized recommendations and feedback to help students from disadvantaged backgrounds, including lower-income and Indigenous communities, access post-secondary education opportunities",
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
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "fastapi",
          color: "orange-text-gradient",
        },
        {
          name: "langchain",
          color: "black-text-gradient",
        },
      ],
      image: scholarpups,
      source_code_link: "https://devpost.com/software/hacker-in-progress",
    },
    {
      name: "Personal Blog",
      description:
        "I developed a full-stack blog application, designed to facilitate user engagement on the website. This platform features a secure user registration and login system, allowing visitors to create personal accounts. With these accounts, they can participate in the site's interactive elements, thus contributing to an online community",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "orange-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/mominalvi/personal-blog-website",
    },
    {
      name: "API Flight Deal Finder",
      description:
        "I developed a Python application designed to automate the search for affordable flight options. This application uses Sheety API to retrieve city names. I used Kiwi API to scan for the most cost-effective flight deals for each city. Upon identifying favorable options, it utilizes the Twilio API to promptly notify users via SMS, ensuring they have immediate access to these opportunities",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: plane,
      source_code_link: "https://github.com/mominalvi/flight-deals",
    },
    {
      name: "AI Song Detector",
      description:
        "I am currently developing an application to detect whether a song is AI generated or human made. The backend is being built with FastAPI, handling file uploads and AI model integration, while the frontend is developed using React and styled with Tailwind CSS for a modern and friendly interface. This project is helping me deepen my knowledge of machine learning and full-stack development",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: TBA,
      source_code_link: "https://github.com/mominalvi/ai-song-detector",
    },
  ];
  
  export { services, technologies, experiences, projects };