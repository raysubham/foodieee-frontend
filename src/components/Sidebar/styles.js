import styled from "styled-components";
import { FaTimes as icon } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.aside`
  display: grid;
  position: fixed;
  height: 100%;
  width: 100vw;
  z-index: 999;
  align-items: center;
  /*   top: 0;
  left: 0; */
  background: #0d0d0d;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screena and (max-width: 768px) {
    max-width: 100vw;
  } ;
`;

export const CloseIcon = styled(icon)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: 0;
  cursor: pointer;
`;

export const SidebarWA = styled.button`
  text-decoration: none;
  background: #b80c09;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  width: 200px;
  white-space: normal;
  margin: -100px auto 100px;
  display: flex;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: 0;
  border: 0;

  &:hover {
    background: #fff;
    color: #b80c09;
  }
`;

export const SidebarMenu = styled.div`
  color: #fff;
  margin: 100px auto;
`;
export const SidebarItem = styled.ul`
  text-align: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  height: 100px;

  @media screena and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 70px;
  } ;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #b80c09;
  }
`;
