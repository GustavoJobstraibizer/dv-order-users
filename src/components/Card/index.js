import React from "react";
import { CardLabel, Container } from "./styles";

export default function CardItem({ type, size, children, onClick }) {
  return (
    <Container type={type} size={size} onClick={onClick}>
      <CardLabel>{children}</CardLabel>
    </Container>
  );
}
