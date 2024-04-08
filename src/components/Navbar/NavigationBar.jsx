// NavigationBar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css";
import labaid_logo from "../../assets/MyImage/Labaid_Logo.png";

const NavigationBar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (scrollPosition === 0 && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  return (
    <div>
      <Navbar
        expand="lg"
        className={`body-tertiary justify-content-end ${
          isNavbarFixed ? "fixed-top" : ""
        }`}
      >
        <Container>
          <div className="labaidlogo">
            <a href={"http://www.google.com"}>
              <img src={labaid_logo} alt="" />
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="homepage">Home</Nav.Link>
              <Nav.Link href="ourservicepage">Service</Nav.Link>
              <Nav.Link href="consultantspage">Consultants</Nav.Link>
              <Nav.Link href="aboutlabaid">About Us</Nav.Link>

              {/* blog drop down part */}
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="blogsreading">
                  Read Blogs
                </NavDropdown.Item>
                <NavDropdown.Item href="blogswriting">
                  Write Blogs
                </NavDropdown.Item>
              </NavDropdown>

              {/* blog drop down part */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
