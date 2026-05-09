import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import ProjectCard from "./ProjectCard";
import leaf from "../../assets/blog.png";

function ProjectsContent() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-commerce"
              description="Built a responsive e-commerce web application using React,HTML,CSS,and JavaScript"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsContent;
