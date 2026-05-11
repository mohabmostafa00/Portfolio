import "./style.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle/Particle";
import pdf from "../../assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function ResumeContent() {
  const [size, setSize] = useState(1200);

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  return (
    <section className="resume-section">
      <Particle />

      <Container fluid className="resume-container">
        
        <Row className="resume-top">
          <div className="resume-btn-wrapper">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="resume-download-btn"
            >
              <AiOutlineDownload className="resume-btn-icon" />
              Download CV
            </a>
          </div>
        </Row>

        <Row className="resume-preview-row">
          <div className="resume-preview-wrapper">
            <Document file={pdf} className="resume-document">
              <Page
                pageNumber={1}
                scale={size > 786 ? 1.7 : 0.6}
                className="resume-page"
              />
            </Document>
          </div>
        </Row>

        <Row className="resume-bottom">
          <div className="resume-btn-wrapper">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="resume-download-btn"
            >
              <AiOutlineDownload className="resume-btn-icon" />
              Download CV
            </a>
          </div>
        </Row>

      </Container>
    </section>
  );
}

export default ResumeContent;


















// import "./style.css";
// import { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Particle from "../Particle/Particle";
// import pdf from "../../assets/CV.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url,
// ).toString();

// function ResumeContent() {
//   const [size, setSize] = useState(1200);

//   useEffect(() => {
//     setSize(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         <Row>
//           <button href={pdf} target="_blank">
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="">
//             <Page pageNumber={1} scale={size > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row >
//           <button href={pdf} target="_blank">
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeContent;
