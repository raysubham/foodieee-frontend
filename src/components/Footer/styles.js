import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: #000;
  padding: 20px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const Info = styled.p`
  font-size: 15px;
  color: #fff;
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    margin-top: 15px;
    padding-bottom: auto;
  }
`;
