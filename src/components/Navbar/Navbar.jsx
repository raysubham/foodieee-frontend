import React from "react";
import { FaBars } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-scroll";

import {
  Nav,
  Container,
  Logo,
  Image,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavWA,
} from "./styles.js";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav id="home">
        <Container>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-100}
          >
            <Logo to="/">
              <Image src="./images/logo.jpg" alt="logo" />
            </Logo>
          </Link>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="menu"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-100}
              >
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-100}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-95}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>

          <NavWA
            type="button"
            onClick={() => window.open("https://wa.me/919093922502")}
          >
            <SiWhatsapp style={{ fontSize: "1.5rem" }} />
            <span style={{ marginLeft: "9px" }}> Order Now </span>
          </NavWA>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
