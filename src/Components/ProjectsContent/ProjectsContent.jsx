import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import ProjectCard from "./ProjectCard";
import leaf from "../../assets/project/project-img.jpg";
import Animations from "../Animations/Animations";

function ProjectsContent() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Animations/>
      <Container>
        <h1 className="project-heading reveal from-left">
          My Recent <strong className="Sky-Blue">Works </strong>
        </h1>
        <p className="reveal from-right">Here are a few projects I've worked on recently.</p>
        <Row>
          <Col md={6} className="project-card reveal from-bottom ">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-commerce"
              description="Built a responsive e-commerce web application using React,HTML,CSS,and JavaScript"
              demoLink="https://project-one-theta-eight.vercel.app/"
              ghLink="https://github.com/mohabmostafa00/E-commerce"
            />
          </Col>
          <Col md={6} className="project-card reveal from-bottom ">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-commerce"
              description="Built a responsive e-commerce web application using React,HTML,CSS,and JavaScript"
              demoLink="https://project-one-theta-eight.vercel.app/"
              ghLink="https://github.com/mohabmostafa00/E-commerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsContent;
