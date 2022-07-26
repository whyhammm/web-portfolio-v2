import React from "react";
import Card from "react-bootstrap/Card";
import { FiPlay } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Muhamad Ilham Ardiansyah </span>
            from <span className="purple"> Karanganyar, Central Java.</span>
            but now i live at <span className="purple"> Surabaya, East Java.</span>
            <br />I am a student of Almuslim High School in Sidoarjo.
            <br />
            <br />
          </p>

          <span>
            Apart from coding, some other activities that I love to do!
            <ul>
              <li className="about-activity">
                <FiPlay /> Playing Game
              </li>
              <li className="about-activity">
                <FiPlay /> Travelling
              </li>
              <li className="about-activity">
                <FiPlay /> Watching Movie
              </li>
            </ul>
          </span>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>"Life sucks, but u should to stay survive" </p>
          <footer className="blockquote-footer">IlhamArdnsyh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
