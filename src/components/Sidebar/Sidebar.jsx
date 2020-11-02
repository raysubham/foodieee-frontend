import React from "react";
import { SiWhatsapp } from "react-icons/si";

import {
  Container,
  Icon,
  CloseIcon,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarWA,
} from "./styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink
            to="menu"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-95}
            onClick={toggle}
          >
            Menu
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-95}
            onClick={toggle}
          >
            About
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-95}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>

      <SidebarWA
        type="button"
        onClick={() => window.open("https://wa.me/918927272401")}
      >
        <SiWhatsapp style={{ fontSize: "1.5rem" }} />
        <span style={{ marginLeft: "9px" }}> Order Now </span>
      </SidebarWA>
    </Container>
  );
};

export default Sidebar;
