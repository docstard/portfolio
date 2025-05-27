import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container contact">
            <div className="contact-title">
                <h1 className="section-title">Contact <span>Me</span></h1>
            </div>
            <div className="contact-items">
                <div className="contact-item">
                    <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="" /></div>
                    <div className="contact-info">
                        <h1>Phone</h1>
                        <h2>+91 9828936066</h2>
                       
                    </div>
                </div>
                <div className="contact-item">
                    <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="" /></div>
                    <div className="contact-info">
                        <h1>Email</h1>
                        <h2>dhruvchoudhary369@gmail.com</h2>
                        <h2>example2@gmail.com</h2>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
  )
}

export default Contact