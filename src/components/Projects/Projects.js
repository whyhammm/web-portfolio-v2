import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import travelUI from "../../Assets/Projects/WP-V1.jpeg";
import travelWeb from "../../Assets/Projects/WP-V2.jpeg";
import FoodApp from "../../Assets/Projects/RecipeApp.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodApp}
              isBlog={false}
              title="YouCanDoIt RecipeApp"
              alt="YouCanDoIt RecipeApp"
              description="Web-based application to sharing recipe. Use React.js
              for Front-End and Node.js for Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={travelUI} isBlog={false} title="Web Portfolio V1" alt="Web Portfolio V1" description="a User interface that displays my personal portfolio based on the website. created using HTML, SCSS, and Bootstrap CSS" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={travelWeb} isBlog={false} title="Web Portfolio V2 " alt="Web Portfolio V2" description="a New update for my personal web portfolio, Created using React.Js and Deployed using Netlify" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
