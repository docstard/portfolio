import dashboardProjectDsiplayImg from "../public/image/Proism_dashboard.png";
import itsTimeProjectDisplayImg from "../public/image/its-time.png";
import proismWebsiteDisplayImg from "../public/image/proism_landing_page.png";
import proismWebsiteDisplayImg2 from "../public/image/proism_landing_page_2.png";
import proismWebsiteDisplayImg3 from "../public/image/proism_landing_page_3.png";
import proismWebsiteDisplayImg4 from "../public/image/proism_landing_page_4.png";
import proismWebsiteDisplayImg5 from "../public/image/proism_landing_page_5.png";
import proismWebsiteDisplayImg6 from "../public/image/proism_landing_page_6.png";
import proismWebsiteDisplayImg7 from "../public/image/proism_landing_page_7.png";



const projectData = [
    {
        "id": "go-solo-ecommerce",
        "title": "Go-Solo eCommerce",
        "description": "A high-performance D2C eCommerce website for a functional nutrition brand, focused on conversion-driven design, smooth user experience, and immersive scroll-based interactions.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329954/go-solo-landing_page_kz8kts.png",
        "tags": [
            "Next.js",
            "Tailwind CSS",
            "GSAP",
            "E-commerce",
            "Vercel"
        ],
        "languages": [
            "JavaScript",
            "TypeScript"
        ],
        "challenges": "Creating a visually engaging and high-performance eCommerce experience while maintaining fast load times on mobile devices. Implementing complex scroll-based animations without affecting performance and ensuring smooth UX across devices was a major challenge.",
        "solution": "Used GSAP ScrollTrigger to build controlled, performant animations while conditionally disabling heavy effects on mobile. Optimized images using Next.js Image component, implemented lazy loading, and structured reusable components to maintain scalability and performance.",
        "overview": {
            "Heading": "Building a High-Performance D2C Experience",
            "text": [
                "Go-Solo is a modern eCommerce platform built for a performance-focused nutrition brand, targeting gamers, students, and high-performance individuals.",
                "The goal was to create a visually immersive experience while maintaining speed, responsiveness, and conversion optimization.",
                "The platform combines smooth animations, clean UI, and optimized performance to deliver a premium digital product experience."
            ]
        },
        "stats": [
            ["Conversion Rate Increase", "+28%"],
            ["Revenue Growth", "+32%"],
            ["Active Users", "12K+"]
        ],
        "features": [
            {
                "title": "Custom Scroll Animations",
                "description": "Implemented advanced GSAP-based scroll animations where the hero product dynamically transitions across sections for an immersive experience."
            },
            {
                "title": "Responsive & Mobile Optimized",
                "description": "Designed a fully responsive layout with mobile-first optimizations, ensuring fast loading and smooth performance across devices."
            },
            {
                "title": "Dynamic Cart Flow",
                "description": "Built an interactive cart system with quantity selection using Drawer/Dialog UI for improved user experience."
            },
            {
                "title": "Performance Optimization",
                "description": "Optimized images, reduced render-blocking resources, and conditionally disabled heavy animations on mobile to improve speed and usability."
            }
        ],
        "categories": [
            "ecommerce",
            "websites"
        ],
        "github": "https://github.com/docstard",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329954/go-solo-landing_page_kz8kts.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776334460/Screenshot_2026-04-16_154313_smmaws.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776334460/Screenshot_2026-04-16_154147_lypr4s.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776334461/Screenshot_2026-04-16_154249_zcga91.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776334461/Screenshot_2026-04-16_154206_cevi1h.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776334460/Screenshot_2026-04-16_154400_hmf3m2.png"

        ],
        "status": "In Progress"
    },
    {
        "id": "legal-ladder-edtech",
        "title": "The Legal Ladder",
        "description": "A full-stack EdTech platform for judiciary and law aspirants, featuring structured courses, advanced mock test engine (MCQ + descriptive), performance analytics, and dynamic learning resources.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318809/Screenshot_2026-04-28_005324_ysqwtz.png",
        "tags": [
            "Next.js",
            "Prisma",
            "PostgreSQL",
            "Clerk Auth",
            "Tailwind CSS",
            "EdTech",
            "Full Stack"
        ],
        "languages": [
            "TypeScript",
            "JavaScript"
        ],
        "challenges": "Designing a scalable test engine that supports both MCQ and descriptive questions with separate timers, multi-attempt handling, and real-time state persistence. Managing complex Prisma schema migrations, relational consistency, and performance while ensuring seamless UX across long test sessions was a key challenge.",
        "solution": "Built a modular test architecture separating MCQ and descriptive flows with independent timers and submission pipelines. Implemented robust backend APIs with Prisma relations for attempts, answers, and results. Optimized database queries, handled migrations carefully, and ensured smooth frontend state management with persistent test progress.",
        "overview": {
            "Heading": "Building a Scalable EdTech Platform for Law Aspirants",
            "text": [
                "The Legal Ladder is a comprehensive EdTech platform designed for judiciary and law entrance preparation.",
                "It includes structured courses, dynamic test series, and a powerful test engine supporting both MCQ and descriptive formats.",
                "The platform focuses on performance analytics, personalized learning, and real-world exam simulation.",
                "It also introduces advanced features like custom test package creation, teacher evaluation workflows, and monetized descriptive answer checking."
            ]
        },
        "stats": [
            ["Tests Supported", "500+"],
            ["Question Capacity", "10K+"],
            ["Modules Built", "15+"]
        ],
        "features": [
            {
                "title": "Advanced Test Engine (MCQ + Descriptive)",
                "description": "Supports hybrid tests with separate timers for MCQ and descriptive sections, sequential flow, and real exam simulation."
            },
            {
                "title": "Multi-Attempt System",
                "description": "Users can attempt the same test multiple times with separate attempt tracking, state persistence, and result history."
            },
            {
                "title": "Custom Test Package Builder",
                "description": "Allows users to create their own test bundles and dynamically calculates pricing, with smart upsell suggestions for pre-made packages."
            },
            {
                "title": "Teacher Evaluation Workflow",
                "description": "Descriptive answers can be submitted for paid evaluation, enabling a monetized review system with feedback and scoring."
            },
            {
                "title": "Admin Dashboard",
                "description": "Full admin control to manage courses, mock tests, questions, pricing, and content dynamically."
            },
            {
                "title": "Authentication & Access Control",
                "description": "Integrated Clerk authentication with protected routes ensuring only authorized users can access tests and courses."
            }
        ],
        "categories": [
            "edtech",
            "saas",
            "fullstack"
        ],
        "github": "https://github.com/docstard",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318809/Screenshot_2026-04-28_005324_ysqwtz.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318809/Screenshot_2026-04-28_005621_xcohvc.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318808/Screenshot_2026-04-28_005343_egf82v.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318808/Screenshot_2026-04-28_005509_cieik8.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777318808/Screenshot_2026-04-28_005830_ilnrj8.png"
        ],
        "status": "In Progress"
    },
    {
        "id": "proism",
        "title": "Proism - AI-Powered Career Optimization Platform",
        "description": "An intelligent job-matching and resume-analysis platform leveraging Machine Learning, NLP, and front-end technologies to streamline the recruitment process for both candidates and employers.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319469/Screenshot_2026-04-28_011741_pxggwk.png",
        "tags": [
            "Next.js",
            "React",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
            "Machine Learning",
            "NLP",
            "Full Stack",
            "AI"
        ],
        "languages": [
            "NodeJS",
            "Python",
            "JavaScript",
        ],
        "challenges": "Building accurate job-resume matching at scale while handling unstructured resume and job description data was a major challenge. Designing an NLP pipeline for skill extraction, ensuring high-quality job scraping, and maintaining performance in similarity computations required careful optimization. Additionally, integrating AI outputs seamlessly into a real-time frontend UX posed architectural complexity.",
        "solution": "Developed a modular AI pipeline using TF-IDF, cosine similarity, and NER-based skill extraction to match resumes with job descriptions. Implemented Selenium-based scraping for job aggregation and optimized preprocessing pipelines. Built scalable backend APIs and integrated them with a responsive frontend dashboard to deliver real-time insights and recommendations to users.",
        "overview": {
            "Heading": "Building an AI-Driven Career Automation Platform",
            "text": [
                "Proism is an end-to-end AI-powered platform designed to simplify and automate the job search process.",
                "It enables users to generate optimized resumes, extract and analyze skills, and match them with relevant job opportunities.",
                "The platform leverages machine learning and NLP techniques to create personalized job recommendations and improve application efficiency.",
                "It bridges the gap between job seekers and recruiters by combining automation, intelligence, and a seamless user experience."
            ]
        },
        "stats": [
            ["Resumes Processed", "4000+"],
            ["Jobs Scraped", "5000+"],
            ["Model Accuracy", "85%+"]
        ],
        "features": [
            {
                "title": "AI Resume Skill Extraction",
                "description": "Custom NER model built using spaCy to extract technical skills, tools, and frameworks from resumes."
            },
            {
                "title": "Job-Resume Matching Engine",
                "description": "Uses TF-IDF vectorization and cosine similarity to calculate match percentage between resumes and job descriptions."
            },
            {
                "title": "Job Scraping Pipeline",
                "description": "Automated job data extraction from platforms like Glassdoor using Selenium and preprocessing pipelines."
            },
            {
                "title": "Job Classification Model",
                "description": "Naive Bayes classifier to categorize job descriptions into multiple domains with high accuracy."
            },
            {
                "title": "Similar Job Recommendation System",
                "description": "Nearest Neighbors-based model to recommend related job roles based on skill similarity."
            },
            {
                "title": "Interactive Frontend Dashboard",
                "description": "Responsive UI built with React and Tailwind displaying job matches, skill insights, and recommendations."
            }
        ],
        "categories": [
            "saas",
            "fullstack"
        ],
        "github": "#",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319469/Screenshot_2026-04-28_011741_pxggwk.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319467/Screenshot_2026-04-28_012034_kdqkna.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319467/Screenshot_2026-04-28_011833_duu5ov.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319467/Screenshot_2026-04-28_011915_ecfhwz.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319467/Screenshot_2026-04-28_011944_gxoeqk.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319468/Screenshot_2026-04-28_011628_y8pyau.png"
        ],
        "status": "Completed"
    },
    {
        "id": "proism-website",
        "title": "Proism Website",
        "description": "A high-conversion SaaS landing website designed to showcase Proism’s AI-powered resume builder and job automation platform, focused on user acquisition, storytelling, and product clarity.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329955/proism_landing_page_aixihc.png",
        "tags": [
            "Next.js",
            "React",
            "Tailwind CSS",
            "UI/UX",
            "SEO",
            "SaaS",
            "Landing Page",
            "Frontend"
        ],
        "languages": [
            "TypeScript",
            "JavaScript"
        ],
        "challenges": "Designing a website that clearly communicates a complex AI product like Proism in a simple, engaging way was a major challenge. Balancing storytelling, UI clarity, and conversion optimization while maintaining performance and SEO required careful planning. Structuring content for user trust, engagement, and action (sign-ups) was critical.",
        "solution": "Built a modern SaaS landing website using Next.js and Tailwind CSS with a strong focus on conversion-driven design. Structured the content into clear sections including problem, solution, features, and CTA. Optimized performance with server-side rendering and implemented SEO best practices to improve discoverability and user acquisition.",
        "overview": {
            "Heading": "Designing a High-Conversion SaaS Website for an AI Product",
            "text": [
                "The Proism website serves as the primary entry point for users to understand and engage with the platform.",
                "It communicates the value proposition of AI-driven resume building and job automation in a clear and compelling way.",
                "The website is designed with a strong focus on user experience, storytelling, and conversion optimization.",
                "It plays a key role in user acquisition, brand positioning, and early product validation."
            ]
        },
        "stats": [
            ["Pages Built", "10+"],
            ["Sections Designed", "25+"],
            ["Performance Score", "90+"]
        ],
        "features": [
            {
                "title": "SaaS Landing Page Architecture",
                "description": "Structured layout including hero section, problem-solution narrative, feature highlights, testimonials, and call-to-action sections."
            },
            {
                "title": "Conversion-Focused Design",
                "description": "Designed UI/UX with strong emphasis on user flow, CTA placements, and engagement to maximize sign-ups."
            },
            {
                "title": "SEO Optimization",
                "description": "Implemented meta tags, structured content, and performance optimization to improve search engine visibility."
            },
            {
                "title": "Responsive Design",
                "description": "Fully responsive across devices with optimized layouts for mobile, tablet, and desktop experiences."
            },
            {
                "title": "Reusable Component System",
                "description": "Built modular UI components using React and Tailwind for scalability and maintainability."
            },
            {
                "title": "Performance Optimization",
                "description": "Optimized loading speed using Next.js features like SSR, image optimization, and code splitting."
            }
        ],
        "categories": [
            "frontend",
            "websites",
            "uiux"
        ],
        "github": "#",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329955/proism_landing_page_aixihc.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329956/proism_landing_page_6_fyb8jk.png",
            'https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329956/proism_landing_page_3_e7p4em.png',
            'https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329956/proism_landing_page_4_jmhxum.png',
            'https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329955/proism_landing_page_5_kja7x4.png',
            'https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329956/proism_landing_page_7_m3lpdx.png',

        ],
        "status": "In Progress"
    },
    {
        "id": "its-time-edtech-platform",
        "title": "Its Time - EdTech JEE Learning Platform",
        "description": "A high-performance EdTech platform for JEE aspirants featuring dynamic quizzes, structured learning modules, performance dashboards, and optimized frontend architecture for seamless learning.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329954/its-time_fffowa.png",
        "tags": [
            "React",
            "Redux Toolkit",
            "Frontend",
            "EdTech",
            "Performance Optimization",
            "UI/UX",
            "Web App"
        ],
        "languages": [
            "JavaScript",
            "TypeScript"
        ],
        "challenges": "Ensuring high performance while handling dynamic quizzes, large datasets, and real-time state updates was a key challenge. Managing global state efficiently, reducing unnecessary re-renders, and optimizing user experience across different devices required careful frontend architecture decisions.",
        "solution": "Implemented Redux Toolkit for efficient global state management and caching strategies to minimize API calls. Designed modular components and optimized rendering using memoization techniques. Built dynamic forms for quizzes and ensured a responsive, fast-loading UI for better user engagement.",
        "overview": {
            "Heading": "Building a Performance-Optimized Learning Platform for JEE Aspirants",
            "text": [
                "Its Time is a responsive EdTech platform designed to help students prepare for competitive exams like JEE.",
                "It focuses on quick learning, revision, and practice through curated questions and dynamic quizzes.",
                "The platform includes interactive dashboards, structured notes, and performance tracking.",
                "Special emphasis was placed on frontend performance optimization and seamless user experience."
            ]
        },
        "stats": [
            ["Modules Built", "10+"],
            ["Quiz Engine", "Dynamic"],
            ["Performance Boost", "Optimized Rendering"]
        ],
        "features": [
            {
                "title": "Dynamic Quiz Engine",
                "description": "Interactive quizzes with real-time state updates and performance tracking."
            },
            {
                "title": "Redux-Based State Management",
                "description": "Efficient global state handling using Redux Toolkit with optimized data flow."
            },
            {
                "title": "Caching & Performance Optimization",
                "description": "Implemented caching strategies and minimized re-renders for faster user experience."
            },
            {
                "title": "Educational Dashboard",
                "description": "User-friendly dashboard displaying progress, analytics, and learning insights."
            },
            {
                "title": "Responsive UI",
                "description": "Fully responsive design optimized for mobile, tablet, and desktop users."
            },
            {
                "title": "Structured Learning Resources",
                "description": "Organized notes and curated question sets for efficient exam preparation."
            }
        ],
        "categories": [
            "edtech",
            "saas",
            "websites"
        ],
        "github": "#",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776329954/its-time_fffowa.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776339586/Screenshot_2026-04-16_170807_klfahk.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776339586/Screenshot_2026-04-16_170829_sm98ph.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776339587/Screenshot_2026-04-16_170849_udl1cj.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776339586/Screenshot_2026-04-16_170909_dkp4hj.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1776339586/Screenshot_2026-04-16_170928_inqx9y.png"
        ],
        "status": "Completed"
    },
    {
        "id": "admin-dashboard-ui",
        "title": "Admin Dashboard UI",
        "description": "A sleek and modern admin dashboard interface built for managing users, products, analytics, and business operations with a clean and intuitive user experience.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319839/Screenshot_2026-04-28_012440_se6uvf.png",
        "tags": [
            "Dashboard UI",
            "Admin Panel",
            "Figma",
            "Analytics",
            "UI/UX Design"
        ],
        "languages": [
            "Design System",
            "UI Prototyping"
        ],
        "challenges": "Designing a complex dashboard layout that balances large amounts of data, navigation, charts, and tables while maintaining clarity, usability, and a premium visual experience was the main challenge.",
        "solution": "Created a structured layout with clear sidebar navigation, reusable card components, clean typography hierarchy, and responsive sections for analytics, tables, and user management. Focused on intuitive user flow and scalable UI patterns.",
        "overview": {
            "Heading": "Modern Dashboard for Business Management",
            "text": [
                "Admin Dashboard UI is a professional interface concept designed for businesses and SaaS platforms to manage internal operations efficiently.",
                "The dashboard combines charts, tables, cards, and sidebar navigation into a clean and easy-to-use system.",
                "It focuses on improving productivity, simplifying data visualization, and delivering a polished admin experience."
            ]
        },
        "stats": [
            ["Modules Designed", "8+"],
            ["Dashboard Screens", "15+"],
            ["UI Consistency", "100%"]
        ],
        "features": [
            {
                "title": "Sidebar Navigation",
                "description": "Built a structured sidebar navigation system for smooth access to different admin modules and pages."
            },
            {
                "title": "Analytics Dashboard",
                "description": "Designed interactive analytics cards and chart sections to visualize business performance and KPIs."
            },
            {
                "title": "User & Product Management",
                "description": "Created clean table layouts for managing users, products, orders, and business records efficiently."
            },
            {
                "title": "Scalable Design System",
                "description": "Used reusable components and consistent spacing, typography, and colors for future scalability."
            }
        ],
        "categories": [
            "uiux",
            "saas"
        ],
        "github": "",
        "imageGallery": [
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319839/Screenshot_2026-04-28_012440_se6uvf.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319839/Screenshot_2026-04-28_012537_o3purp.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319838/Screenshot_2026-04-28_012510_b8l6ru.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319838/Screenshot_2026-04-28_012621_fku6gw.png",
            "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1777319838/Screenshot_2026-04-28_012650_e7hgxi.png"
        ],
        "status": "Completed"
    },
    {
        "id": "airtel-forgery-detection-system",
        "title": "Bharti Airtel - Aadhaar Forgery Detection System",
        "description": "An AI-powered forgery detection and image classification system developed during a Data Science Internship at Bharti Airtel to identify forged Aadhaar cards submitted during SIM card issuance using deep learning, computer vision, GANs, and image forensics.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1779534530/ChatGPT_Image_May_23_2026_04_38_32_PM_savzbf.png",
        "tags": [
            "Python",
            "Data Science",
            "Computer Vision",
            "Deep Learning",
            "CNN",
            "GANs",
            "YOLOv8",
            "OpenCV",
            "Image Forensics",
            "Forgery Detection",
            "Machine Learning"
        ],
        "languages": [
            "Python"
        ],
        "challenges": "Detecting forged Aadhaar cards in real-time during SIM issuance was challenging due to sophisticated image manipulations, varying image quality, and the need for accurate detection with minimal processing delay.\nHandling forged regions, inconsistent document layouts, and limited datasets required advanced computer vision and deep learning techniques.",
        "solution": "Developed a multi-stage forgery detection pipeline using CNNs, GAN-based data augmentation, YOLOv8 object detection, SLIC segmentation, and ORB/SURF feature matching. Implemented image forensic techniques such as Error Level Analysis, thresholding, contour detection, and homography estimation to identify manipulated regions and classify documents as genuine or forged.",
        "overview": {
            "Heading": "AI-Based Forgery Detection System for Secure SIM Issuance",
            "text": [
                "This project was developed during a Data Science Internship at Bharti Airtel focusing on telecom security and identity verification.",
                "The system was designed to detect forged Aadhaar cards submitted during SIM card issuance using deep learning and image processing techniques.",
                "Multiple forgery detection methodologies including CNNs, GANs, YOLOv8, SLIC segmentation, and feature matching were researched and implemented.",
                "The project combined image forensics, object detection, and machine learning to improve fraud detection accuracy and automate document verification workflows."
            ]
        },
        "stats": [
            ["Internship Duration", "3 Months"],
            ["Detection Accuracy", "99%"],
            ["Models Used", "CNN, GANs, YOLOv8"]
        ],
        "features": [
            {
                "title": "Aadhaar Forgery Detection",
                "description": "Automated detection of forged Aadhaar cards during SIM card issuance."
            },
            {
                "title": "CNN-Based Image Classification",
                "description": "Deep learning model for classifying documents as genuine or forged."
            },
            {
                "title": "GAN-Based Data Augmentation",
                "description": "Generated synthetic training samples to improve dataset diversity and model generalization."
            },
            {
                "title": "YOLOv8 Object Detection",
                "description": "Real-time object detection and localization of suspicious regions within documents."
            },
            {
                "title": "SLIC Image Segmentation",
                "description": "Segmented document images into superpixels for region-wise forgery analysis."
            },
            {
                "title": "Feature Matching & Homography",
                "description": "Used ORB/SURF feature matching and homography estimation to identify manipulated regions."
            },
            {
                "title": "Image Forensics Analysis",
                "description": "Implemented ELA, JPEG artifact analysis, blockiness analysis, and thresholding for forgery detection."
            },
            {
                "title": "Document Validation",
                "description": "Explored OCR, QR code verification, and geometric analysis for authenticity checks."
            }
        ],
        "categories": [
            "data-science",
            "machine-learning",
            "deep-learning",
            "computer-vision",
            "cyber-security",
            "ai"
        ],
        "github": "#",
        "imageGallery": null,
        "status": "Completed"
    },
    {
        "id": "proism-ai-career-optimization-platform",
        "title": "Proism - AI-Powered Career Optimization Platform",
        "description": "An AI-driven recruitment intelligence platform designed to automate resume analysis, skill extraction, job classification, and personalized job matching using Natural Language Processing and Machine Learning.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1779534239/ChatGPT_Image_May_23_2026_02_06_10_PM_hy7v0l.png",
        "tags": [
            "Python",
            "Machine Learning",
            "NLP",
            "spaCy",
            "Scikit-learn",
            "TF-IDF",
            "Cosine Similarity",
            "Naive Bayes",
            "Recommendation System",
            "Selenium",
            "Data Science",
            "AI"
        ],
        "languages": [
            "Python",
            "JavaScript"
        ],
        "challenges": "Building an intelligent recruitment platform required handling large amounts of unstructured resume and job description data while maintaining accurate matching and recommendation quality. Challenges included extracting technical skills from inconsistent resume formats, improving semantic understanding between jobs and resumes, automating job aggregation pipelines, and optimizing recommendation systems for scalability and real-time performance.",
        "solution": "Developed multiple AI-powered NLP and machine learning pipelines using spaCy, TF-IDF vectorization, cosine similarity, Naive Bayes classification, and Nearest Neighbors recommendation systems. Implemented automated Selenium-based job scraping pipelines, custom preprocessing workflows, and scalable recommendation architectures to automate resume analysis, job classification, and personalized job discovery.",
        "overview": {
            "Heading": "Building an AI-Powered Recruitment Intelligence Platform",
            "text": [
                "Proism was designed to simplify and automate the job search and recruitment process using Artificial Intelligence and Natural Language Processing.",
                "The platform analyzes resumes and job descriptions to extract technical skills, classify job domains, and calculate intelligent matching scores.",
                "Multiple AI systems including custom Named Entity Recognition models, recommendation engines, and job classification pipelines were developed to enhance recruitment workflows.",
                "The project combines machine learning, NLP, data engineering, and automation to create a scalable career optimization ecosystem for both job seekers and employers."
            ]
        },
        "stats": [
            ["Resumes Processed", "4000+"],
            ["Jobs Analyzed", "5000+"],
            ["Classification Accuracy", "85%+"]
        ],
        "features": [
            {
                "title": "Custom NER Skill Extraction",
                "description": "Built a custom spaCy Named Entity Recognition model trained on 3000+ resumes to identify technical skills, frameworks, libraries, and tools."
            },
            {
                "title": "AI Job-Resume Matching",
                "description": "Implemented TF-IDF vectorization and cosine similarity algorithms to calculate semantic similarity between job descriptions and resumes."
            },
            {
                "title": "Job Classification System",
                "description": "Developed a Naive Bayes classification model trained on 5000+ job descriptions to categorize jobs into multiple professional domains."
            },
            {
                "title": "Similar Jobs Recommendation Engine",
                "description": "Built a recommendation system using Nearest Neighbors algorithms to suggest similar job opportunities based on semantic similarity and skill overlap."
            },
            {
                "title": "Automated Job Scraping Pipeline",
                "description": "Created Selenium-based automation pipelines to scrape, preprocess, and structure job data from platforms like Glassdoor."
            },
            {
                "title": "NLP Preprocessing Workflow",
                "description": "Implemented tokenization, stopword removal, normalization, and N-grams pipelines for improved semantic understanding."
            },
            {
                "title": "Vector Similarity Computation",
                "description": "Generated similarity matrices and ranking systems to intelligently prioritize relevant job recommendations."
            },
            {
                "title": "Scalable AI Workflow",
                "description": "Designed modular AI pipelines capable of handling large-scale resume analysis and recommendation workflows."
            }
        ],
        "categories": [
            "data-science",
            "machine-learning",
            "nlp",
            "recommendation-system",
            "ai",
            "automation",
            "saas"
        ],
        "github": "#",
        "imageGallery": null,
        "status": "In Progress"
    },


    {
        "id": "ai-cold-email-generator",
        "title": "AI Cold Email Generator",
        "description": "An end-to-end Generative AI application that generates personalized cold emails for software and AI service companies using Llama 3.1, LangChain, ChromaDB, and Streamlit.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1779534239/ChatGPT_Image_May_23_2026_02_07_27_PM_wplplx.png",
        "tags": [
            "Generative AI",
            "LLM",
            "Llama 3.1",
            "LangChain",
            "ChromaDB",
            "RAG",
            "Prompt Engineering",
            "Streamlit",
            "Python"
        ],
        "languages": [
            "Python"
        ],
        "challenges": "The project required generating highly personalized cold emails while maintaining contextual relevance and scalability for different industries.",
        "solution": "Implemented a Retrieval-Augmented Generation pipeline using LangChain and ChromaDB with prompt engineering workflows to automate high-quality cold email generation.",
        "overview": {
            "Heading": "Building an AI-Powered Cold Outreach System",
            "text": [
                "Developed a Generative AI application capable of creating personalized cold outreach emails.",
                "The project integrates vector embeddings, retrieval systems, and prompt engineering workflows.",
                "Streamlit was used to build an interactive interface for real-time email generation.",
                "The system helps software and AI service companies automate lead outreach workflows."
            ]
        },
        "stats": [
            ["LLM Used", "Llama 3.1"],
            ["Architecture", "RAG Pipeline"],
            ["Use Case", "Cold Outreach Automation"]
        ],
        "features": [
            {
                "title": "RAG Pipeline",
                "description": "Implemented a Retrieval-Augmented Generation workflow using LangChain and ChromaDB."
            },
            {
                "title": "Prompt Engineering",
                "description": "Designed prompts and context pipelines for generating conversion-focused cold emails."
            },
            {
                "title": "Interactive Streamlit UI",
                "description": "Built a user-friendly dashboard for generating customized outreach emails in real time."
            }
        ],
        "categories": [
            "generative-ai",
            "llm",
            "rag",
            "automation",
            "nlp",
            "ai",
            "websites"
        ],
        "github": "#",
        "imageGallery": null,
        "status": "Completed"
    },
    {
        "id": "llm-news-research-tool",
        "title": "LLM-Powered News Research Tool",
        "description": "An AI-powered research assistant built using LangChain, OpenAI API, vector embeddings, and Streamlit to extract insights from financial and news articles.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1779534238/ChatGPT_Image_May_23_2026_04_30_04_PM_wh6uid.png",
        "tags": [
            "LLM",
            "LangChain",
            "OpenAI API",
            "NLP",
            "Semantic Search",
            "Vector Embeddings",
            "Streamlit",
            "AI"
        ],
        "languages": [
            "Python"
        ],
        "challenges": "The project required handling large unstructured news datasets while enabling context-aware querying and intelligent summarization.",
        "solution": "Implemented document ingestion, semantic search, vector embeddings, and prompt workflows to create a scalable AI research assistant.",
        "overview": {
            "Heading": "Building an AI Research Assistant",
            "text": [
                "Developed a research automation tool capable of analyzing and summarizing news articles.",
                "The project uses vector databases and semantic retrieval for context-aware querying.",
                "Prompt engineering workflows were designed to generate structured insights and summaries.",
                "The system simulates real-world equity research and financial analysis workflows."
            ]
        },
        "stats": [
            ["Core Stack", "LangChain + OpenAI"],
            ["Architecture", "Semantic Search Pipeline"],
            ["Use Case", "Research Automation"]
        ],
        "features": [
            {
                "title": "Semantic Search Engine",
                "description": "Implemented vector embeddings and semantic retrieval for intelligent querying."
            },
            {
                "title": "Document Ingestion Pipeline",
                "description": "Built automated workflows for parsing and processing unstructured news articles."
            },
            {
                "title": "AI Summarization Workflow",
                "description": "Designed prompt pipelines to generate summarized and structured research insights."
            }
        ],
        "categories": [
            "generative-ai",
            "llm",
            "semantic-search",
            "nlp",
            "research-automation",
            "ai",
            "websites"
        ],
        "github": "#",
        "imageGallery": null,
        "status": "Completed"
    },
    {
        "id": "cnn-scenery-classification-system",
        "title": "CNN-Based Scenery Classification System",
        "description": "A deep learning-powered scenery classification system built using Convolutional Neural Networks (CNNs) to classify indoor and outdoor images across multiple environmental categories.",
        "mainImage": "https://res.cloudinary.com/duq3nzqp6/image/upload/q_auto/f_auto/v1779534239/ChatGPT_Image_May_23_2026_04_33_44_PM_hajmfg.png",
        "tags": [
            "Deep Learning",
            "CNN",
            "TensorFlow",
            "Keras",
            "Computer Vision",
            "Image Classification",
            "Python",
            "AI"
        ],
        "languages": [
            "Python"
        ],
        "challenges": "The project required training a CNN model capable of handling high-dimensional image data while improving classification accuracy across visually similar scenery categories.",
        "solution": "Developed and trained a Convolutional Neural Network using TensorFlow and Keras with preprocessing, augmentation, and feature extraction pipelines to improve classification performance.",
        "overview": {
            "Heading": "Building a Deep Learning-Based Scenery Recognition System",
            "text": [
                "Developed a CNN-powered image classification system capable of recognizing multiple indoor and outdoor scenery categories.",
                "The project utilized deep learning architectures for automatic feature extraction and image understanding.",
                "Implemented image preprocessing, normalization, and augmentation workflows to improve generalization performance.",
                "The system demonstrates practical applications of deep learning and computer vision in large-scale image classification tasks."
            ]
        },
        "stats": [
            ["Architecture", "Convolutional Neural Network"],
            ["Domain", "Computer Vision"],
            ["Task", "Multi-Class Image Classification"]
        ],
        "features": [
            {
                "title": "CNN-Based Feature Extraction",
                "description": "Built deep learning pipelines using convolutional neural networks for automated image feature extraction."
            },
            {
                "title": "Image Augmentation Pipeline",
                "description": "Implemented augmentation and normalization workflows to improve model robustness and reduce overfitting."
            },
            {
                "title": "Multi-Class Scenery Recognition",
                "description": "Designed a classification system capable of identifying multiple indoor and outdoor scenery environments."
            }
        ],
        "categories": [
            "deep-learning",
            "computer-vision",
            "cnn",
            "image-classification",
            "ai",
            "websites"
        ],
        "github": "#",
        "imageGallery": null,
        "status": "Completed"
    }
]

export default projectData