import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #000;
  justify-content: center;
  flex-direction: column;
  padding: 15px auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Headline = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 50px auto 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Tagline = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 10px auto;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FoodItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 auto;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FoodItem = styled.div`
  padding: 10px 20px;
  width: 25%;
  min-width: 200px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;
export const Name = styled.h3`
  text-align: center;
  color: #b80c09;
`;
