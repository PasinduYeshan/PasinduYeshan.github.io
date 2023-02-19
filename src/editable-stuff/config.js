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
  message:
    `I'm Pasindu Yeshan, an Undergraduate in the Computer Science and Engineering Department at the University of Moratuwa. 
    I am a highly motivated individual with a passion for full-stack
    development, mobile application development, and DevOps. I
    am committed to giving my best in every project I undertake. I
    thrive on collaboration and enjoy working in teams with a
    commitment to continuous learning and growth in the field, I
    am always seeking out new challenges and opportunities to
    expand my skill set.`,
  resume: "https://drive.google.com/file/d/1kuW4yTnC2qHx9D79diYX9XV6yYOTQP3l/view?usp=share_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "PasinduYeshan", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["sinhala-metaphor-search-engine", "identity-conditional-auth-entgra", "ISEntgra", "union-back-end", "union-front-end", "SpotKube/SpotKube"],
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
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/img2-removebg-preview.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
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
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
