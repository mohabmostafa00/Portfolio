import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle";
import pdf from "../../assets/Resume/CV.pdf";
import { AiOutlineDownload, AiOutlineCode } from "react-icons/ai";
import { HiOutlineEye, HiOutlineX } from "react-icons/hi";
import { FaReact, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
import "./style.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Animations from "../Animations/Animations";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showCV, setShowCV] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="resume-wrapper">
      <Particle />
      <Animations />
      <Container fluid className="resume-section">
        <div className="resume-header">
          <h1 className="resume-title reveal from-left">Resume</h1>

          <p className="resume-subtitle reveal from-right">
            Passionate Front-End Developer focused on building modern,
            responsive, and interactive web experiences.
          </p>
        </div>

        <Row className="resume-highlights justify-content-center g-4 reveal from-bottom delay-1">
          <Col lg={3} md={6}>
            <div className="resume-card">
              <div className="resume-card-icon">
                <FaLaptopCode />
              </div>
              <h2 className="resume-card-number">Front-End </h2>
              <h3 className="resume-card-title">Developer</h3>
              <p className="resume-card-desc">
                Building responsive and modern user interfaces.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="resume-card">
              <div className="resume-card-icon">
                <FaReact />
              </div>
              <h2 className="resume-card-title">React</h2>
              <h3 className="resume-card-title">Developer</h3>
              <p className="resume-card-desc">
                Creating dynamic and interactive web applications.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="resume-card">
              <div className="resume-card-icon">
                <FaProjectDiagram />
              </div>
              <h2 className="resume-card-number">5+</h2>
              <h3 className="resume-card-title">Projects</h3>
              <p className="resume-card-desc">
                Real projects with modern UI and animations.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="resume-card">
              <div className="resume-card-icon">
                <AiOutlineCode />
              </div>

              <h2 className="resume-card-number">HTML</h2>
              <h3 className="resume-card-title">CSS • JS</h3>
              <p className="resume-card-desc">
                Strong foundation in front-end technologies.
              </p>
            </div>
          </Col>
        </Row>

        <div className="resume-buttons reveal from-bottom">
          <button className="resume-view-btn  " onClick={() => setShowCV(true)}>
            <HiOutlineEye />
            <span>View CV</span>
          </button>

          <a href={pdf} download className="resume-download-btn">
            <AiOutlineDownload />
            <span>Download CV</span>
          </a>
        </div>

        {showCV && (
          <div
            className="resume-modal-overlay"
            onClick={() => setShowCV(false)}
          >
            <div
              className="resume-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="resume-close-btn"
                onClick={() => setShowCV(false)}
              >
                <HiOutlineX />
              </button>

              <div className="resume-pdf-container">
                <Document file={pdf} loading="Loading CV...">
                  <Page
                    pageNumber={1}
                    scale={width > 786 ? 1.2 : 0.55}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default ResumeNew;
