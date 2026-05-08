import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.png";
import Particle from "../Particle/Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../assets/bob.svg";
import Tilt from "react-parallax-tilt";
import "./style.css";
function HomeContent() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohab Mostafa</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
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
              <h1 style={{ fontSize: "2.6em" }} className="home-about-title">
                LET ME <span className="Sky-Blue"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m a Software Engineer who loves transforming ideas into
                reliable, scalable products. Over time, I’ve explored several
                technologies and found my passion in building high-performance
                systems and intuitive user experiences.
                <br />
                <br />
                I’m proficient in
                <i>
                  <b className="Sky-Blue">
                    {" "}
                    JavaScript, C++, Rust, Node.js, and Java{" "}
                  </b>
                </i>
                — and I enjoy working across both backend and frontend stacks.
                <br />
                <br />
                My key areas of interest include developing
                <i>
                  <b className="Sky-Blue">
                    {" "}
                    Web Applications, Blockchain Solutions,{" "}
                  </b>
                </i>
                and exploring new ways to bridge on-chain and off-chain systems.
                <br />
                <br />
                Whenever possible, I love building projects with
                <b className="Sky-Blue"> Node.js </b> and modern frameworks like{" "}
                <i>
                  <b className="Sky-Blue">React.js</b> and{" "}
                  <b className="Sky-Blue">Next.js</b>.
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvatar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="Sky-Blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
