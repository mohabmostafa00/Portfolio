import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import "./style.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col md="4" className="footer-text">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-text">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/mohabmostafa00"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub className="icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/share/18Uc7xzP4A/?mibextid=wwXIfr"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook className="icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohab-mostafa-169780380/?skipRedirect=true"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mohab.mostafaa"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillInstagram className="icon" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
