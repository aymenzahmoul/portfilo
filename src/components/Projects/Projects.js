import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/resto.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/pos.png";
import ExpenseTracker from "../../Assets/Projects/djerba.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title=" Development and maintenance of a complete ERP platform"
              description="I was responsible for the development and maintenance of a comprehensive ERP platform, which included modules for inventory management, order processing, invoicing, and customer relationship management. Additionally, I developed a dedicated mobile application specifically for point-of-sale (POS) management, allowing for fast and efficient processing of in-store transactions. This project aimed to streamline business operations and improve overall productivity for the client."
              // ghLink="https://github.com/rahuljha4171/E-cart"
              demoLink="https://partfly.io/"
            />
          </Col>

      
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="developed and maintained an online ordering platform for restaurants"
              description="I developed and maintained an online ordering platform for restaurants. The platform included the integration of a secure payment system and a real-time notification module, ensuring smooth and safe transactions for users. I also implemented real-time communication features and developed content management tools tailored to restaurant needs, enabling efficient management of their offerings and services."
              ghLink="#"
              demoLink="https://localtestdemo.eatorder.fr/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="developed and maintained an online ordering platform for restaurants"
              description="This application aims to create an online platform that helps restaurants sell their dishes and manage their operations efficiently. It allows restaurants to manage their accounts, menus (create, modify, delete dishes), orders (receive, manage, deliver), and online posts. Customers can also manage their accounts, browse restaurants and their posts, and purchase food online. "
                // ghLink="https://github.com/rahuljha4171/Expense-Tracker"
                // demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.info/"
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
