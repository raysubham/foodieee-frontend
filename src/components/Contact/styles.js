import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0 20px;
`;
export const Header = styled.h1`
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 28px;
  color: white;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;
export const Label = styled.label`
  font-size: 25px;
`;
export const Input = styled.input`
  background: #fff;
  height: 50px;
  line-height: 50px;
  color: #444;
  outline: none;
  border: 0;
  margin-bottom: 20px;
  padding: 5px 20px;
  border-radius: 4px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Button = styled.button`
  background: #b80c09;
  border: none;
  height: 50px;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 24px 0 16px;
  outline: none;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }
`;
