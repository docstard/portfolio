import React from 'react'

const About = () => {
  return (
     <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-img">
                    <img src="./images/img-2.png" alt="My img" />
                </div>
            </div>
            <div className="col-right">
                <h1 className="section-title">About <span>Me</span></h1>
                <h2>Front End Web Developer</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis dolore? A porro
                    magnam nostrum, aperiam corporis, ratione qui ipsam voluptas animi adipisci odit illo
                    distinctio, similique neque consequuntur enim. Asperiores nostrum exercitationem eligendi
                    natus. Quam cupiditate ratione soluta aliquid delectus accusamus aspernatur officia?
                    Optio dolorum sunt aliquam dolore fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dicta, qui.
                </p>
                <a href="#" className="cta"> Download Resume </a>
            </div>
        </div>
    </section>
  )
}

export default About