import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 28px;
`;

export const ContentProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #2c2c2c;
    margin-top: 26px;
    margin-bottom: 0;
  }

  small {
    font-size: 14px;
    font-weight: 700;
    color: #818181;
    margin-top: 5px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #e46382;
    margin: 12px 0;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    color: #5e5e5e;
    margin: 0;
  }
`;

export const ButtonAddProduct = styled.button`
  position: absolute;
  width: 72px;
  height: 72px;
  background-color: #9ddbd0;
  border-radius: 50%;
  border: none;
  right: 5px;
  bottom: -10px;
  outline: none;
`;
