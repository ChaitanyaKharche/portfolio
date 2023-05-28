/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import React, { useState } from 'react';
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { Document, Page } from 'react-pdf';


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chaitanya Kharche",
  title: "Hi all, I'm Chaitanya",
  subTitle: emoji(
    "I am an enthusiastic Full-stack Software Developer💻, ambitiously working at the crossroads of numerous sectors like Healthcare, Civil Engineering, Robotics and many more, integrating them seamlessly with Computer Science."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ChaitanyaKharche/",
  github: "https://github.com/ChaitanyaKharche",
  gmail: "ckharche226@gmail.com",
  instagram: "https://www.instagram.com/chaitanyakharche",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Why me?!",
  subTitle: "I can Build Awesome Things",
  skills: [
    emoji(
      "⚡ A passionate full stack Software Developer🚀 working on Intersection of various fields such as Healthcare, Civil Engineering, Robotics & much more! & combining them with CS & ML. "
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."),
    emoji(
      "⚡ Developing robust Convolutional Neural Networks (CNN) based architecture's for precise Object and pattern recognition tasks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/NEU logo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - August 2025",
      desc: "Relevant Courses: OOD, Data Structures, Algorithms, Mobile App Development, Database Systems",
      descBullets: [
        "Got Accepeted into MIT DHIVE to bridge the gap between 2 fields especially Software & Healthcare to find long-term scalable solution for Covid/Lyme Disease. ",
        "Used Python, Pytorch, CNN, Tensorflow, OpenCV, and Raspberry Pi to create a self-driving car capable of real-time lane navigation & traffic sign recognition through Inception-v3 implementation for object detection and behavior cloning.",
        "Implemented a adaptive 2D maze game featuring dynamic levels via procedural generation algorithms and real-time gameplay adaptation using Python, tailored to player performance."
      ]
    },
    {
      schoolName: "University of Pune",
      logo: require("./assets/images/SPPULOGO.jpg"),
      subHeader: "Bachelor of Engineering in Civil Engineering",
      duration: "September 2018 - July 2022",
      desc: "Ranked top 5% in the program. Took courses about Linear Algebra, Calculus I, II, III & Programming",
      descBullets: ["Developed a Pothole Detection System using Yolov5x in real-time integrating it with car dashcam."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning/AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern",
      company: "MIT Dhive",
      companylogo: require("./assets/images/MIT.png"),
      date: "June 2023 – August 2023",
      desc: "",
      descBullets: [
        "Will work for MIT DHIVE to bridge the gap between technology especially Software & Healthcare to find long-term scalable solution for Covid/Lyme Disease.",
      ]
    },
    {
      role: "Android Developer Intern",
      company: "Acropolis Systems",
      companylogo: require("./assets/images/ASPL.jpeg"),
      date: "May 2022 – August 2022",
      desc: "",
      descBullets: [
        "Designed and developed an Android App for Crop Disease Detection using Flutter and Dart Stream.",
        "Boosted app performance by integrating NodeJS with Firebase, reducing runtime, and improving multitasking capabilities.",
        "Implemented real-time crop disease detection and verification using NodeJS and in-app photo capturing.",
        "Enhanced farmers' support by integrating real-time video call capabilities with agronomists using Flutter SDK.",
      ]
    },
    {
      role: "Java Developer Intern",
      company: "GTL Software's",
      companylogo: require("./assets/images/GTL.jpeg"),
      date: "September 2021 – December 2021",
      desc: "",
      descBullets: [
        "Streamlined data storage and retrieval, reducing times by 25% using Spring JPA framework for employee data management.",
        "Monitored and reported key performance metrics, provided insights on service-level agreements and efficiency.",
        "Developed an appraisal-based incentive system, resulting in increased employee performance and engagement.",
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {/*
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cubyne.jpeg"),
      projectName: "CUBYNE",
      projectDesc: "A freelance startup where me & my team of 4 students undertook independent various software & web development projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
      }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ROBOT.jpeg"),
      projectName: "Self Driving Car",
      projectDesc: "Created a self-driving car capable of real-time lane navigation & traffic sign recognition through Inception-v3 implementation for object detection and behavior cloning",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
*/};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {/*
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
*/};

// Blogs Section

const blogSection = {/*
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
*/};

// Talks Sections

const talkSection = {/*
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
*/};

// Podcast Section

const podcastSection = {/*
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
*/};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8573130545",
  email_address: "ckharche226@gmail.com"
};

// Twitter Section


function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="./assets/images/CHAITANYA_RESUME.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default MyApp;

const twitterDetails = {/*
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
*/};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
