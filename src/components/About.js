import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return(
    <Container fluid>
      <Row>

      <Col> </Col>
        
      <Col xs={6}>
        <section className="my-5">
          <h2>About Me!</h2>
          <p>
            I am a husband to a beautiful Brazilian wife. We have happily married for 3 years. 
            I have 9 brothers and sisters so I am a part of a big family. I also have a dog and cat.

            I really like to eat good food, go on walks with my Wife and my dog, and go to the movies.
            I also really like to play video games, which also peaked my interest in programming and web
            design.  

          </p>
      
         </section>
      </Col>
      <Col></Col>

      </Row>

    </Container>
  )
}

export default About;