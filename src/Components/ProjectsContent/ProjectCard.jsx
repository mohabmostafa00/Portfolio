import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="project-container">
      <Card className="project-card-content">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-description">
            {props.description}
          </Card.Text>
          <div className="project-buttons">
            <a
              className="btn-card"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </a>
            {!props.isBlog && props.demoLink && (
              <a
                className="btn-card"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp; Demo
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
