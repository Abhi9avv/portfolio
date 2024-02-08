import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
  SiFramer,
  SiWix,
  SiCanva,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma></SiFigma>
        

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFramer></SiFramer>
        

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiWix></SiWix>
        

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva></SiCanva>
        

      </Col>
      
     
    </Row>
  );
}

export default Toolstack;
