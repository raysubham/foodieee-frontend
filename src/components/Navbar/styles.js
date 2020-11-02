import styled from "styled-components";
import { Link as LinkLogo } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  height: 100px;
  /*  margin-top: -100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  font-size: 1rem;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 50;
  width: 100%;
`;
export const Logo = styled(LinkLogo)`
  text-decoration: none;
  justify-self: flex-start;
  margin-left: 16px;
  display: flex;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 80px;
  border-radius: 50%;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    margin-top: 5px;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #b80c09;
  }

  &.active {
    border-bottom: 3px solid #b80c09;
  }
`;

export const NavWA = styled.button`
  text-decoration: none;
  background: #b80c09;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  margin-left: 24px;
  white-space: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: 0;
  border: 0;

  &:hover {
    background: #fff;
    color: #b80c09;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
