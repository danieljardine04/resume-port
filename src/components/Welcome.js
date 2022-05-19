import React from 'react';
import aboutMe from '../assets/images/real_about_me.jpg';
import Grid from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Welcome = () => {
  return(
    <section>
      <div className="hero"> 
        <h1>Welcome To My Portfolio</h1>
      </div>
      

    <Grid fluid>
      <Row>
        <section className="my-5">
          <h1 className="titles">About Me</h1>
         </section>
      <Col xs={6}>
      
          <img src={aboutMe} className="about" id="about-right" alt="A photo of me" />
      </Col>
      <Col>
          <p className="about" id="about-left">
            I am a fullstack web developer. My interest in coding started when I was younger playing video games. I always
            wondered how they were made. In 2019 I started coding with Java 8, from the OCA study guide working on backend
            applications. In 2021 to 2022, I did a coding Bootcamp from Utah University.   

          </p>
      
      </Col>

      </Row>

    </Grid>
    </section>
  )
}

export default Welcome;