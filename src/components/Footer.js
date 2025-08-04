import React from 'react'

const Footer = () => {
  return (
       <section id="footer">
        <div className="container footer">
            <div className="brand">
                <h1 className="section-title"><span>Attic</span>Flow</h1>
            </div>
            <h2>People Making Tech Work</h2>
            <div className="social-icon">
                <div className="social-item">
                    <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="" /></a>
                </div>
                <div className="social-item">
                    <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="" /></a>
                </div>
                <div className="social-item">
                    <a href="#"><img src="https://img.icons8.com/?size=100&id=ZNMifeqJbPRv&format=png&color=000000" alt="" /></a>
                </div>
                <div className="social-item">
                    <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" alt="" /></a>
                </div>
            </div>
            {/* <p>Copyright &#169; 2025 Atticflow. All rights reserved</p> */}
        </div>
    </section>
  )
}

export default Footer