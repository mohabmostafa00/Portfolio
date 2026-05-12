import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../assets/about/Javascript.svg";
import Node from "../../assets/about/Node.svg";
import Git from "../../assets/about/Git.svg";
import Redux from "../../assets/about/Redux.svg";
import React from "../../assets/about/React.svg";
import "./style.css";

function ASkills() {
  return (
    <Row>
      <Col xs={4} md={2} className="skills-icons">
        <img src={Javascript} alt="javascript" />
        <div className="skills-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <img src={Node} alt="node" />
        <div className="skills-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        <img src={React} alt="React" />
        <div className="skills-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <img src={Redux} alt="redux" />
        <div className="skills-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="skills-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <img src={Git} alt="git" />
        <div className="skills-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default ASkills;
