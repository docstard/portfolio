import React from 'react'
// import "../../public/images/"


const ProjectsSummery = [
    {
        id:1,
        title : "Proism - AI-Powered Career Optimization Platform",
        description : "An intelligent job-matching and resume-analysis platform leveraging Machine Learning, NLP, and front-end technologies to streamline the recruitment process for both candidates and employers.",
        image : "portfolio\public\img-1.png"
    },
    {
        id:2,
        title : "EdTech JEE Learning Platform",
        description : "A high-performance learning platform with Redux Toolkit, caching strategies, and dynamic forms to optimize student engagement. A responsive web app for quick learning and revision, offering curated questions and notes for students preparing for exams.",
        image : "../../public/img-1.png"
    },
    {
        id:3,
        title : "E-Commerce Website",
        description : "A fully responsive e-commerce site with product listings, shopping cart, user authentication, and payment integration.",
        image : "../../public/img-1.png"
    },
    {
        id:4,
        title : "Note-Taking App",
        description : "A minimalistic, user-friendly website for writing, saving, editing, and organizing notes in real time. Built with React.",
        image : "../../public/img-1.png"
    },
    {
        id:5,
        title : "Image Classification Website",
        description : "A web-based tool that classifies uploaded images into predefined categories using deep learning. Built with a clean UI and real-time feedback.",
        image : "../../public/img-1.png"
    },
    {
        id:6,
        title : "Spam Email Classifier",
        description : "An NLP-based application that filters spam emails using machine learning techniques like Naive Bayes and TF-IDF vectorization.",
        image : "../../public/img-1.png"
    },
    // {
    //     id:7,
    //     title : "",
    //     description : "",
    //     image : ""
    // },
    
]


const Project = () => {
  return (
     <div id="projects">
        <div className="container project">
            <div className="project-header">
                <h1 className="section-title">Recent <span>projects</span></h1>
            </div>
            <div className="all-projects">
            {    ProjectsSummery.map((project) => (

                <div key={project.id} className="project-item">
                    <div className="project-info">
                        <h1>{project.title}</h1>
                        {/* <h2>Coding is Love</h2> */}
                        <p>
                            {project.description}
                        </p>
                    </div>
                    <div className="project-img">
                        <img src={project.image} alt="img-1" />
                    </div>
                </div>
            ))}
               
            </div>
        </div>
    </div>
  )
}

export default Project