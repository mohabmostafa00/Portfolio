import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../assets/Javascript.svg";
import Node from "../../assets/Node.svg";
import Git from "../../assets/Git.svg";
import Redux from "../../assets/Redux.svg";
import React from "../../assets/React.svg";
import "./style.css";

function ASkills() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        paddingTop: "30px",
      }}
    >
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
