import React from "react";
import { useHistory } from "react-router-dom";
import CardItem from "~/components/Card";
import Header from "~/components/Header";
import Layout from "~/containers/Layout";
import { CategoriesContainer, Title, TopProductsContainer } from "./styles";

export default function HomePage() {
  const history = useHistory();

  return (
    <Layout>
      <Header />
      <Title>Oque gostaria de pedir hoje?</Title>

      <CategoriesContainer>
        <CardItem type="primary" onClick={() => history.push("/produto")}>
          Brownie
        </CardItem>
        <CardItem type="primary">Bolo</CardItem>
      </CategoriesContainer>

      <TopProductsContainer>
        <span>Mais pedidos</span>

        <div>
          <CardItem type="secondary" size="md"></CardItem>
          <CardItem type="secondary" size="md"></CardItem>
        </div>
      </TopProductsContainer>
    </Layout>
  );
}
