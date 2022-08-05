import React from 'react';
import typing from '../assets/images/typing_page.jpg';
import warehouseItems from '../assets/images/warehouse_actions.jpg';
import chess from '../assets/images/chess_photo.jpg'
import chessZip from '../assets/exe/chess-1.0-SNAPSHOT.zip'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Portfolio = () => {
  return(
    <section>
        <h1 className="titles" id="portfolio-title">My Projects</h1>
      <Container >
      <div className="card">

        <a href="https://danieljardine04.github.io/daniel-typing-test/" target="_blank" className="site-links">
        <Row >
        <h2 className="card-titles">Typing Speed Test</h2>
        <Col sm={6} >
        <img src={typing}  className="picture" alt="Ka-chow typing page" />
        
  
        </Col>
        <Col>
          <p className="text-right">Ka-Chow typing test is a website to test typing speed. It is made with JavaScript, HTML, and CSS. It pulls from 3rd party API's to randomize the words for the typing test. After the test is finished it saves the test score to Local Storage.  </p>
        
        </Col>
        
        {/* <img src={main} className="picture" alt="Ka-chow main page" /> */}
        {/* <img src={highscore}  className="picture" alt="Ka-chow highscore page" /> */}

        </Row>
        </a>
      </div>

      <div className="card">

        <a href="https://salty-brook.herokuapp.com/login" target="_blank" className="site-links">
        <Row>
        <h2 className="card-titles">Warehouse Returns</h2>
        <Col>
      
          <p className="text-right">Salty Brooks warehouse returns is a website that makes returns easier. It is a full stack project using JavaScript, handlebars.js, and bulma on the front end and node.js, express.js and sequelize on the backend. The information on the site is stored using the mysql database. </p>
        </Col>
        <Col>
        <img src={warehouseItems}  className="picture" alt="Warehouse returns Items" />
        </Col>
        </Row>

        </a>
      </div>
      <div className="card">
        <a href={chessZip} download="../assets/exe/chess-1.0-SNAPSHOT.zip" className="site-links">
          <Row>
            <h2 className="card-titles">Chess</h2>
            <Col>
              <img src={chess} className="picture" alt="Chess game photo" />
            </Col>
            <Col>
              <p className="text-right">Click in this box to download the Chess Game. The Java Runtime environment is requirered to run the application. Once the zip is downloaded, the application can be started in the bin folder.  </p>
            </Col>
          </Row>

        </a>
      </div>
      </Container>
      
    </section>
  )
}

export default Portfolio;