import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinav Ahalawat </span>
            from <span className="purple"> Uttar Pardesh, India.</span>
            <br />
            I am currently doing my Ui/Ux internship at ozibook.
            <br />
            I am currently doing my BE(CSe)  Chandigarh University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hanging around with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Going To Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav Ahalawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
