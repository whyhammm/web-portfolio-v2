import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile3.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I born on 11 January 2004 at Karanganyar, Central Java. I love coding since i 16th years old. Then i joined at some course to{" "}
              <i>
                <b className="purple"> Improve my Coding Skills. </b>
              </i>
              <br />
              <br />
              The covid 19 pandemic made me feel bored and unproductive, so I tried to learn programming again. I'm currently learning several programming languages such as
              <i>
                <b className="purple"> Golang, Javascript, Node.Js </b>
              </i>
              <br />
              <br />
              Besides that, I also like movies and music, my favorite genre is action and adventure like MCU. and{" "}
              <a href="https://open.spotify.com/playlist/33ZWD6WiDDRASdY5qQoiuf?si=972f5248ba144955&pt=a698c34386161eb15a14fb09b8e3f285" target="_blank" rel="noreferrer" className="purple font-weight-bolder text-decoration-none">
                Here
              </a>{" "}
              is my music playlist
              <br />
              <br />
              See My Resume{" "}
              <a
                href="https://doc-08-2k-docs.googleusercontent.com/docs/securesc/3v6avk5m5rvq0j78fg2uo3s9goo9ns5g/frqb3de56df9fknenbe6rh85qgadkem8/1658803725000/14911253945445875172/14911253945445875172/1c78gWe1b1BVrSQThZfhCDw-2KMHvIuTy?e=download&ax=ACxEAsYk6imRERYXHjM6tb1uJkkCARXl41fYgU1GxExR6mYt223CR5UHcerhq0YonfWqzcyUuPvl9Hm9D9LsYYTlsg1cvhZpo6pYB42N02DWg6Zrcx1DRiPsiYzw8komLzpVCI9DkDRJ1Mgwzi4DWA2V7fAFX_hDYtot2fbU-2rHEsSNkIqZALMFssMk0NFYqtzokF7ZVuH7wQk8QaFJP7Cax7BsR0D17DzcxI7TqHPuStr__uxE1LJnWUsGAS9SaOoTGVvU-7oUZbWVTXpkK6cc8EuuHXfmMr-JWuOoKD_CZhM6IcMfO-Gdsl6bEyFUsUWZfUS4XK6onkvQMVzgF6KlcLb1FZNI791ReQMWkWmbwJ8SWX_afOY4g6ZfjqBeCbfjZ9MEvUYMEfpEZ108cRgrcNBtqWhxGrEueyV3c1Q-4OiXknc_diwWXO_1iTrkmkwTIOjm2inRkA6fkI4ryqoP4oeQJwE2iBE4qHvtYzBX2DYYxCLM95-_ygFcoPhVlvA7ArZfXlXImAY20dwOPbjZc_xGu3P8t5mDZFk7s1q5mYvcE1eXBH3B2vWGY24RotLFsqD-PiVl0WRila1u01Rihwpsm9TXhgLnC-4ahKBJBz6HduOaM0x9ekbKPT-HAzJ4PKa0JxS3v4wlfHwVExwKSVbYqCCc6bg2iYJZcMh68fAxTQ69iOYITr8d02jGRupnJs2Aa3fgBcLyQQ&uuid=133166b8-80bc-4001-8278-5ac1a59233db&authuser=0&nonce=s29s52sin..."
                target="_blank"
                rel="noreferrer"
                className="purple font-weight-bolder text-decoration-none"
              >
                Here
              </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" width="220" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/whyhammm" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/muhamad-ilham-ardiansyah-40565b231/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/whyhammm/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
