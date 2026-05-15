import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home/Home-img.svg";
import Particle from "../Particle/Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn , FaFacebookF} from "react-icons/fa";
import myImg from "../../assets/home/Avatar.svg";
import Tilt from "react-parallax-tilt";
import "./style.css";
import Animations from "../Animations/Animations";
function HomeContent() {
  return (
    <section>
      <Animations />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15 }}
                className="heading reveal from-left"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name reveal from-left">
                I'M
                <strong className="main-name"> Mohab Mostafa</strong>
              </h1>
              <div className="type reveal from-bottom">
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-home reveal from-right"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 className="home-about-title reveal from-bottom">
                LET ME INTRODUCE <span className="Sky-Blue"> MYSELF </span>
              </h1>
              <p className="home-about-body reveal from-left">
                I’m a passionate <b className="Sky-Blue">Front-End Developer</b>{" "}
                who builds modern, interactive, and visually engaging web
                experiences. I focus on turning ideas into smooth, responsive,
                and high-performance interfaces.
                <br />
                <br />
                My goal is not only to build websites — but to create
                experiences that feel dynamic, professional, and memorable.
                <br />
                <br />I specialize in <b className="Sky-Blue">React.js</b> and
                modern frontend development, with a strong eye for UI details,
                animations, and user experience.
                <br />
                <br />I love building clean, fast, and creative web applications
                that feel alive and stand out.
              </p>
            </Col>
            <Col md={4} className="myAvatar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid reveal from-right"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social reveal from-bottom">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="Sky-Blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohabmostafa00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/18Uc7xzP4A/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohab-mostafa-169780380/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeContent;
