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

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

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
              <Nav.Link href="">
                <Link to="program" smooth={true} offset={-260} duration={50}>
                  Service
                </Link>
              </Nav.Link>
              <Nav.Link href="consultantspage">Consultants</Nav.Link>
              {/* drop down part */}
              <NavDropdown
                title="About Us"
                id="basic-nav-dropdown"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                show={isDropdownOpen}
              >
                <NavDropdown.Item href="homepage">
                  Message of MD
                </NavDropdown.Item>
                <NavDropdown.Item href="aboutlabaid">
                  About Labaid
                </NavDropdown.Item>
                <NavDropdown.Item href="">Accreditation</NavDropdown.Item>
                <NavDropdown.Item href="">Our Sister Concerns</NavDropdown.Item>
                {/* Add more dropdown items as needed */}
              </NavDropdown>

              {/* drop down part */}

              <Nav.Link href="">
                <Link to="contact_us" smooth={true} offset={-90} duration={50}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
