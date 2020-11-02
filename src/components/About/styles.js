import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #000;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding: auto;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  flex-basis: 100%;
`;
export const Image = styled.img`
  width: 100%;
`;
export const InfoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
export const InfoHeader = styled.h1`
  color: #b80c09;
  font-size: 60px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
export const InfoContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
