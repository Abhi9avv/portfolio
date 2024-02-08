import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Fimag2.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Screenshot 2024-02-05 141020.png";
import chatify from "../../Assets/tour.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/restaurant.png";

function Projects() {
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
              imgPath={chatify}
              isBlog={false}
              title="Tour Guide"
              description="Tour guide website i made using javascipt.Used flight api to get flight data"
              ghLink="https://github.com/Abhi9avv/tour"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Restaurant Website"
              description="Its a website made using html and css that shows the menu of restaurant"
              ghLink="https://github.com/Abhi9avv/Restaurant-webpage"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Grocery"
              description="Its a UI Design of a full stack grocery website design which contains home page, list of daily products contains review section with a map where you can see the live location of driver and also have user profile section."
            
              demoLink="https://www.figma.com/file/TKTN8JE5aMwaVmqVYEs4ll/Untitled?type=design&node-id=0%3A1&mode=design&t=ZdmLBnrfLyccGXpC-1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hotel Booking Design"
              description="Its a Ui design of a hotel booking website in which we can select room , give reviews and have banking page for the payment."
              
              demoLink="https://www.figma.com/file/8iN1tO3WxOEr3jAPq5y7kc/ATG-Hotel-Booking-app-UI(-TASK-2)?type=design&node-id=0%3A1&mode=design&t=y2X9Zp3iSgW0XR99-1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
