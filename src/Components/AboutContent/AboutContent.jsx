import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../assets/about 3.svg";
import Skills from "./Skills";
import "./style.css";
import Animations from "../Animations/Animations";

function AboutContent() {
  Animations();

  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="about-row">
            <Col md={7} className="about-text reveal from-left">
              <h1 className="about-title">
                Know Who <strong className="Sky-Blue">I'M</strong>
              </h1>
              <div className="about-description">
                <p className="about-paragraph">
                  Hi everyone! I’m{" "}
                  <span className="Sky-Blue">Mohab Mostafa</span>, a Software
                  Engineer passionate about building fast, scalable, and modern
                  web applications.
                  <br />
                  <br />
                  I enjoy turning ideas into real products using clean code and
                  efficient architecture. My focus is on creating seamless user
                  experiences and powerful backend systems that actually solve
                  real problems.
                  <br />
                  <br />
                  I’m currently sharpening my skills in full-stack development
                  with a strong interest in{" "}
                  <span className="Sky-Blue">React</span>,{" "}
                  <span className="Sky-Blue">Node.js</span>, and system design.
                </p>
                <ul className="about-list">
                  <li className="about-activity reveal from-left">
                    <ImPointRight /> Exploring new technologies ⚡
                  </li>
                  <li className="about-activity reveal from-left">
                    <ImPointRight /> Building side projects 💡
                  </li>
                  <li className="about-activity reveal from-left">
                    <ImPointRight /> Learning system design 🧠
                  </li>
                  <li className="about-activity reveal from-left">
                    <ImPointRight /> Gaming & creativity 🎮
                  </li>
                </ul>
                <p className="p-sky reveal from-left about-quote">
                  "Build with purpose. Improve with every line of code."
                </p>
              </div>
            </Col>
            <Col md={5} className="about-img reveal from-right">
              <div className="about-img-wrapper">
                <img src={laptopImg} alt="about" />
              </div>
            </Col>
          </Row>
          <h1 className="project-heading about-skills-title reveal from-bottom">
            Professional Skills
          </h1>
          <div className="about-skills reveal from-bottom">
            <Skills />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default AboutContent;
