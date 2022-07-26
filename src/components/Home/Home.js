import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi Everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                My Name Is
                <strong className="main-name"> Muhamad Ilham Ardiansyah</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
              <br></br>
              <br></br>
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <h3>
                  From
                  <strong className="purple"> Surabaya </strong>Indonesia
                </h3>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
