import React from 'react';
import resume from '../assets/images/resume_screenshot.jpg'

const Resume = () => {
  return(
    <section>
      <h2 className="titles">Resume</h2>
      <h3>Daniel Jardine, Web Developer</h3>
      <img src={resume} className="resume"></img>
    </section>
  )
}

export default Resume;