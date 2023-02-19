// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Pasindu",
  middleName: "",
  lastName: "Yeshan",
  message: " Creating Positive Change Through Technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/PasinduYeshan",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pasinduyeshan/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/pasinduyeshan/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/img2-removebg-preview.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/img2-removebg-preview.png"),
  imageSize: 375,
  message: `I'm Pasindu Yeshan, an Undergraduate in the Computer Science and Engineering Department at the University of Moratuwa. 
    I am a highly motivated individual with a passion for full-stack
    development, mobile application development, and DevOps. I
    am committed to giving my best in every project I undertake. I
    thrive on collaboration and enjoy working in teams with a
    commitment to continuous learning and growth in the field, I
    am always seeking out new challenges and opportunities to
    expand my skill set.`,
  resume:
    "https://drive.google.com/file/d/1_rgNJf7XjfKVU219dxM1Dg_N7eQdcpm5/view?usp=share_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const projects = {
  show: true,
  heading: "Projects",
  projectArray: [
    {
      id: 1,
      title: `SpotKube: Cost Optimization of Microservices-based application in a Hybrid Cloud Environment (Final Year
    Project)`,
      subtitle: "Final Year Project",
      description: `SpotKube is a cost optimization tool for microservices-based applications in a hybrid cloud 
    environment. It analyze the characteristics of microservice-based applications and provide the best cost-optimal 
    deployment configuration to the container orchestration platform.`,
      technologies: ["Go", "Kubernetes", "Docker", "Terraform"],
      started_at: "September 2022",
      ended_at: "Present",
      project_urls: [
        {
          label: "GitHub",
          url: "https://github.com/SpotKube/SpotKube",
        },
      ],
    },
    {
      title: `Indoor Navigation App`,
      subtitle: "Undergraduate mobile computing project",
      description: `As a member of a dynamic two-person team, I had the opportunity to contribute to the development 
      of a cutting-edge mobile AR app that provides users with seamless navigation within indoor premises. 
      Our app utilized state-of-the-art camera and AR technology to guide users towards locations of interest, 
      making it easy and intuitive for them to search for and find their way around. As a team, we were able to 
      leverage our combined skills and knowledge to create an app that delivers an immersive and engaging user experience, 
      from the initial design stage to final implementation. `,
      technologies: ["Unity", "ArCore", "Firebase"],
      started_at: "February 2023",
      ended_at: "Present",
      project_urls: [
        {
          label: "GitHub",
          url: "https://github.com/PasinduYeshan/indoor-nav/tree/main",
        },
      ],
    },
    {
      title: `Stated Choice Survey Creator`,
      subtitle: "Freelancing project",
      description: `As a member of a dynamic two-person team, I had the opportunity to contribute to the development 
      of a cutting-edge mobile AR app that provides users with seamless navigation within indoor premises. 
      Our app utilized state-of-the-art camera and AR technology to guide users towards locations of interest, 
      making it easy and intuitive for them to search for and find their way around. As a team, we were able to 
      leverage our combined skills and knowledge to create an app that delivers an immersive and engaging user experience, 
      from the initial design stage to final implementation. `,
      technologies: ["React", "Node.js"],
      started_at: "November 2022",
      ended_at: "Present",
      project_urls: [
        {
          label: "Link",
          url: "https://www.statedchoice.com/login",
        },
      ],
    },
    {
      title: `Sinhala Songs & Metaphor Search Engine`,
      description: `I have developed a robust Sinhala songs and metaphor search engine that offers advanced search capabilities, 
      including full-text search, faceted search, and synonym searching. This project incorporates boosting techniques 
      to improve the relevance of search results and ensure users can quickly find the most relevant songs to their query.
      The search engine is optimized to handle a large database of Sinhala songs and delivers fast and accurate search 
      results, making it an excellent tool for anyone looking to discover and explore the rich and diverse world of 
      Sinhala music. As part of this project, I have also implemented a user-friendly interface, making it easy for 
      users to navigate and explore search results. The search engine is scalable and can be easily adapted to include additional search
      features and functionality.`,
      technologies: ["React", "Node.js", "ElasticSearch"],
      started_at: "December 2022",
      ended_at: "January 2023",
      project_urls: [
        {
          label: "GitHub",
          url: "https://github.com/PasinduYeshan/sinhala-metaphor-search-engine",
        },
      ],
    },
    {
      title: `Device - User linking & Device Attribute-Based Authentication`,
      subtitle: "Intern project",
      description: `Nowadays, offering a mobile application for any software solution has become a modern-day necessity. 
      Our goal is to secure the user by considering the security aspects of mobile devices, and based on this device
      information we can decide to authenticate the user with minimal steps, improving the user experience or step up
      or even block access if the device is in an unsecured state. `,
      technologies: ["Java", "React Native", "Maven", "OSGi"],
      started_at: "December 2021",
      ended_at: "August 2022",
      project_urls: [
        {
          label: "Connector",
          url: "https://github.com/wso2-extensions/identity-conditional-auth-entgra",
        },
        {
          label: "Application",
          url: "https://github.com/PasinduYeshan/ISEntgra",
        },
      ],
    },
  ],
};

const repos = {
  show: false,
  heading: "Recent Projects in GitHub",
  gitHubUsername: "PasinduYeshan", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [
    "sinhala-metaphor-search-engine",
    "identity-conditional-auth-entgra",
    "ISEntgra",
    "union-back-end",
    "union-front-end",
    "SpotKube/SpotKube",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/img2-removebg-preview.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/img2-removebg-preview.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Java", value: 65 },
    { name: "Dart", value: 80 },
    { name: "PHP", value: 80 },
    { name: "Node.js", value: 65 },
    { name: "React", value: 65 },
    { name: "Redux", value: 65 },
    { name: "MongoDB", value: 65 },
    { name: "SQL", value: 75 },
    { name: "Firebase", value: 75 },
    { name: "Docker", value: 75 },
    { name: "Kubernetes", value: 75 },
    { name: "Figma", value: 75 },
    { name: "Adobe XD", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Leadership", value: 75 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "pasindua.18@cse.mrt.ac.lk",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  projects,
};
