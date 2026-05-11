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
        
        <button className="btn-card" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <button
            className="btn-card"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </button>
        )}
      </Card.Body>
    </Card>
    </div>

  );
}
export default ProjectCard;
