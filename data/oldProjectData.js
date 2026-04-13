import logo from "../../public/img1.jpeg"; // Adjust the path as necessary
import dashboardProjectDsiplayImg from "../../public/Proism_dashboard.png";
import LandingPageDisplayImg from "../../public/proism_landing_page.png";
import itsTimeProjectDisplayImg from "../../public/its-time.png";
import noteAppDisplayImg from "../../public/note-app.png";
import ecommerceStoreDisplayImg from "../../public/ecommerce-store.png"; // Adjust the path as necessary

const ProjectData = [
  {
    id: 1,
    title: `Proism - AI-Powered Career Optimization Platform`,
    description:
      `An intelligent job-matching and resume-analysis platform leveraging Machine Learning, NLP, and front-end technologies to streamline the recruitment process for both candidates and employers.`,
    image: logo, // Adjust the path as necessary
    toDisplay: false,
  },
  {
    id: 2,
    title: `Its Time - EdTech JEE Learning Platform`,
    description:
      `A high-performance learning platform with Redux Toolkit, 
      caching strategies, and dynamic forms to optimize student engagement. 
      A responsive web app for quick learning and revision, offering curated 
      questions dynamic quizzes, sleek educational dashboards and 
      notes for students preparing for exams.
      `,
    image: itsTimeProjectDisplayImg,
    toDisplay: true,
    link:"https://www.figma.com/design/vHKciapyIcGmuMdOHRpRbC/Projects?node-id=35-8257&t=6laHn76k2fF2SMD7-1"
  },
  {
    id: 3,
    title: `ReactJS/NextJS eCommerce Website`,
    description:
      `A fully responsive e-commerce built with React site with product 
      listings, filters, shopping cart functionality, user authenticationand
      mock checkout flow — perfect for showcasing e-commerce frontend skills.  `,
    image: ecommerceStoreDisplayImg,
    toDisplay: true,
  },
  {
    id: 4,
    title: `Note-Taking App`,
    description:
      `A minimalistic, user-friendly React website for writing, saving,
      editing, and organizing notes in real time. Fully responsive with
      localStorage support and real-time editing capabilities.`,
    image: noteAppDisplayImg,
    toDisplay: true,
    
  },
  {
    id: 5,
    title: `Image Classification Website`,
    description:
      `A web-based tool that classifies uploaded images into predefined categories using deep learning. Built with a clean UI and real-time feedback.`,
    image: logo,
    toDisplay: false
  },
  {
    id: 6,
    title: `Spam Email Classifier`,
    description:
      `An NLP-based application that filters spam emails using machine learning techniques like Naive Bayes and TF-IDF vectorization.`,
    image: logo,
    toDisplay: false
  },
  {
    id: 7,
    title: `No-Code Business Website`,
    description: 
    `A visually polished and mobile-optimized business website
    created using Webflow. Designed for easy client editing with clean
    structure and CMS blocks.`,
    image: logo,
    toDisplay: true
  },
  {
    id: 8,
    title: `Landing Page - Product Launch`,
    description: 
    `A high-conversion landing page with smooth scroll animations,
    strong CTAs, and responsive design. Built with performance and
    clarity in mind to drive engagement`,
    image: LandingPageDisplayImg,
    toDisplay: true,
    link:"https://www.figma.com/design/vHKciapyIcGmuMdOHRpRbC/Projects?node-id=35-2739&t=6laHn76k2fF2SMD7-1",
  },
  {
    id: 9,
    title: `Admin Dashboard UI`,
    description: 
    `A sleek dashboard UI designed for managing users, products, 
    and analytics. The layout includes sidebar navigation, cards,
    charts, and tables. It focuses on layout complexity, UI logic,
    and a clean admin experience.
    `,
    image: dashboardProjectDsiplayImg,
    toDisplay: true,
    link:"https://www.figma.com/design/vHKciapyIcGmuMdOHRpRbC/Projects?node-id=35-1590&t=6laHn76k2fF2SMD7-1",
  },

]

export default ProjectData;