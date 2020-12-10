import styled from "styled-components";

const sizes = {
  sm: { width: "93px", height: "93px" },
  md: { width: "155px", height: "174px" },
  lg: { width: "234px", height: "325px" },
};

export const Container = styled.div`
  width: ${({ size }) => (size ? sizes[size].width : sizes.sm.width)};
  height: ${({ size }) => (size ? sizes[size].height : sizes.sm.height)};
  background-color: ${({ type }) =>
    type === "primary" ? "#F7A6B9" : "#9DDBD0"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const CardLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 12px;
`;
