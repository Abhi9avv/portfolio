import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hotel from "../../Assets/Fimag2.png";

import Grocery from "../../Assets/Screenshot 2024-02-05 141020.png";
import Tour from "../../Assets/tour.png";

import Restaurant from "../../Assets/restaurant.png";
import wix from '../../Assets/Projects/BLOG_WIX.png';
import donuts from '../../Assets/Projects/DONUTS.png';
import pizza from '../../Assets/Projects/PIZZA.png';
import travel from '../../Assets/Projects/TRAVEL.png';

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
              imgPath={Tour}
              isBlog={false}
              title="Tour Guide"
              description="Tour guide website i made using javascipt.Used flight api to get flight data"
              ghLink="https://github.com/Abhi9avv/tour"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restaurant}
              isBlog={false}
              title="Restaurant Website"
              description="Its a website made using html and css that shows the menu of restaurant"
              ghLink="https://github.com/Abhi9avv/Restaurant-webpage"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery"
              description="Its a UI Design of a full stack grocery website design which contains home page, list of daily products contains review section with a map where you can see the live location of driver and also have user profile section."
            
              demoLink="https://www.figma.com/file/TKTN8JE5aMwaVmqVYEs4ll/Untitled?type=design&node-id=0%3A1&mode=design&t=ZdmLBnrfLyccGXpC-1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Booking Design"
              description="Its a Ui design of a hotel booking website in which we can select room , give reviews and have banking page for the payment."
              
              demoLink="https://www.figma.com/file/8iN1tO3WxOEr3jAPq5y7kc/ATG-Hotel-Booking-app-UI(-TASK-2)?type=design&node-id=0%3A1&mode=design&t=y2X9Zp3iSgW0XR99-1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donuts}
              isBlog={false}
              title="Figma Donuts Animations"
              description="In this design, there is an animation of different donuts. We can drag them to animate the slides and navigate to other slides."
              demoLink="https://www.figma.com/design/exglIEui16Zv4y54v0gOBD/donuts-animation?node-id=0-1&t=xsZsFcWtqgBsE0HC-1"></ProjectCard>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza hurt front page Animation"
              description="This is the front page of a pizza website, where, when we click on the pizza of our choice, it animates to allow us to select the next one."


              demoLink="https://www.figma.com/design/RTEMGZ1NaP0TIf6Bca7J9Z/Pizza-animation?node-id=0-1&t=LiM8sENfGz85irJE-1"></ProjectCard>
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={wix}
              isBlog={false}
              title="Blog"
              description="This is a blog website where we upload our blogs. It has a home, about, and blog section. Users can read the blog and submit a form as well."

              demoLink="  https://abhinavahalawat1824.wixsite.com/my-site-3"></ProjectCard>
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Cotravelin"
              description="This is a tour website where we can view tour destinations and read blogs from travelers. There is also a FAQ section where we can submit our questions."



              demoLink="https://www.cotravelin.com/contact"></ProjectCard>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
