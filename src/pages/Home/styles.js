import styled from "styled-components";

export const CategoriesContainer = styled.main`
  display: flex;
  gap: 10px;
  margin: 40px 0 48px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #737373;
  margin-top: 10px;
`;

export const TopProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 0 48px;

  span {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;
