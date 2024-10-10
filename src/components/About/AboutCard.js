import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hello Everyone, I am <span className="primary-header">Aymen Zahmoul</span> from Djerba,  Tunisia. I am a tech enthusiast with a deep interest in web and mobile development, always eager to learn and explore new technologies.
            <br />
            <br />
       
          </p>
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
