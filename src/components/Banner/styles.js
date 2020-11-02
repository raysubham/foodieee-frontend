import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
  position: relative;
  z-index: 1;
  height: 700px;
`;
export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.image`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  -object-fit: cover;
  background-color: #b80c09;
`;

export const Content = styled.div`
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 3;
  align-items: center;
  padding: 8px 24px;
`;

export const Header = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 64px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;
export const Para = styled.p`
  margin-top: 30px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480) {
    font-size: 18px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
`;
export const Button = styled.button`
  text-decoration: none;
  margin-top: 30px;
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
`;
