import { Col, Row } from "react-bootstrap";
import "./style.css";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiRedux,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";
function ASkills() {
  return (
    <Row>
      <Col xs={4} md={2} className="skills-icons">
        <SiJavascript color="#F7DF1E" size={32} />
        <div className="skills-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <SiNodedotjs color="#3C873A" size={32} />
        <div className="skills-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        <SiReact color="#00eeff" size={32} />
        <div className="skills-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <SiRedux color="#764ABC" size={32} />
        <div className="skills-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <SiNextdotjs color="#ffffff" size={32} />
        <div className="skills-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="skills-icons">
        <SiGit color="#F05032" size={32} />
        <div className="skills-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default ASkills;
