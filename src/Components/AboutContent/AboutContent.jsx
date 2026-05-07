import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../assets/about.png";
import ASkills from "./AboutSkills";
import "./style.css"
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import Toolstack from "./Toolstack";

function AboutContent() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <div className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Hi everyone! I’m{" "}
                  <span className="purple">Soumyajit Behera</span> from{" "}
                  <span className="purple">Bhubaneswar, India</span>.
                  <br />
                  I’m currently working as a{" "}
                  <span className="purple">Software Developer</span> at{" "}
                  <span className="purple">Juspay</span>.
                  <br />I hold an Integrated M.Sc. (IMSc) in{" "}
                  <span className="purple">
                    Mathematics and Computing
                  </span> from <span className="purple">BIT Mesra</span>.
                  <br />
                  <br />
                  Outside of coding, I love engaging in activities that keep me
                  creative and inspired:
                </p>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Playing Games 🎮
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Writing Tech Blogs ✍️
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Traveling and Exploring New Places 🌍
                  </li>
                </ul>

                <p style={{ color: "rgb(155 126 172)" }}>
                  "Strive to build things that make a difference!"{" "}
                </p>
              </div>

            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          {/* <Techstack /> */}
              <ASkills/>

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          {/* <Toolstack /> */}

          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default AboutContent;
