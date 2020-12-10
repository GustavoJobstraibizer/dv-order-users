import React, { memo } from "react";
import { ButtonHeader, Header } from "./styles";

function HeaderComponent() {
  return (
    <Header>
      Ola, Seja bem vindo!
      <ButtonHeader>A</ButtonHeader>
    </Header>
  );
}

export default memo(HeaderComponent);
