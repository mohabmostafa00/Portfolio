import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import AboutImg from "../../assets/about/about-img.svg";
import Skills from "./Skills";
import Animations from "../Animations/Animations";
import "./style.css";

function AboutContent() {
  Animations();
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="about-row">
            <Col md={5} className="about-img reveal from-right">
              <div className="about-img-wrapper">
                <img src={AboutImg} alt="about" />
              </div>
            </Col>
            <Col md={7} className="about-text reveal from-left">
              <h1 className="about-title">
                Know Who <strong className="Sky-Blue">I'M</strong>
              </h1>
              <div className="about-description">
                <p className="about-paragraph">
                  Hello, I’m <span className="Sky-Blue">Mohab Mostafa</span>, a
                  Front-End Developer specializing in building fast, responsive,
                  and scalable web interfaces using modern technologies.
                  <br />
                  <br />
                  I focus on crafting clean, reusable components and delivering
                  smooth user experiences with strong attention to performance,
                  accessibility, and UI details.
                  <br />
                  <br />
                  I enjoy turning UI designs into fully functional, interactive
                  web applications using React and modern JavaScript, with a
                  constant focus on writing maintainable and efficient code.
                  <br />
                  <br />
                  I’m continuously improving my skills through real projects,
                  problem-solving, and exploring modern front-end practices and
                  tools.
                </p>
                <div className="about-experience reveal from-bottom">
                  <span className="experience-tag reveal ">
                    🎨 UI/UX Implementation
                  </span>
                  <span className="experience-tag reveal ">
                    🚀 Performance Optimization
                  </span>
                  <span className="experience-tag reveal ">
                    📱 Responsive Design
                  </span>
                </div>
                <p className="about-quote reveal from-bottom ">
                  "I build interfaces that feel fast, look clean, and work
                  everywhere."
                </p>
              </div>
            </Col>
          </Row>
          <h1 className="about-skills-title reveal from-bottom">
            Professional <span className="Sky-Blue">Skills</span>
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
