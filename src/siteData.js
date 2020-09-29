import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";


//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

// import recrootBox from "../images/recrootBox_site.png";
// import campRank from "../images/camprank_site.png";
// import blogApp from "../images/blogapp-site.png";
// import taskyv from "../images/taskyv_site.png";
// import bookThinks from "../images/bookThinks.png";

import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;
let accent = "#003344"

// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
const selfie = "IMG_2062.jpg";
const search = "search.jpg";
const traffic = "traffic.jpg";
const hippocampus = "hippocampus.png";


// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Matthew";
let lastName = "Lim";
let title = "USC Student / Software Developer";
let bio = `I'm currently a sophomore CS major at the University of Southern California. I'm highly
passionate about backend development, as well as applied analytics and cloud computing.
Check out some of my past projects and social media below, and feel free to reach out!`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:mklim@usc.edu",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/mattlim1207",
    icon: FaGithub

  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mklim1/",
    icon: FaLinkedin

  },
  {
    name: "Resume",
    link: resume,
    icon: FaFileAlt
  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

let portfolioTitle = "Recent Projects"
let portfolioSectionBackgroundColor = "#94B0DA"
let portfolioItems = [
  {
    imageUrl: search,
    title: "Search Engine",
    description: "Simple search engine simulation modeled after Google Search, written in C++",
    link: "https://github.com/mattlim1207/hw-mklim/tree/master/hw4"
  },
  {
    imageUrl: hippocampus,
    title: "Hippocampus Model",
    description: "Hippocampus model altered to model the effects of Alzheimer's, written in Python and Java",
    link: ""
  },
  {
    imageUrl: traffic,
    title: "Traffic Simulation",
    description: "Traffic event simulation with optimal pathfinding, written in C++",
    link: "https://github.com/mattlim1207/hw-mklim/tree/master/hw5"
  },
];

let showEmailCapture = false;

// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = false;




let blogName = "Blog";
let renderBlog = false;
let gistUrl = `https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showEmailCapture,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode,
  accent,
  blogName,
  renderBlog,
  gistUrl,
};