import React from "react";
import CardItem from "../../components/Card";
import { Header } from "../../components/Header/styles";
import Layout from "../../containers/Layout";
import { Title } from "../Home/styles";
import {
  ButtonAddProduct,
  Container,
  ContentProduct,
  ContentProducts,
} from "./styles";

export default function ProductPage() {
  return (
    <Layout title="Produto">
      <Header />
      <Title>Brownies</Title>

      <Container>
        <ContentProducts>
          <CardItem type="secondary">Brownie - 1</CardItem>
          <CardItem type="secondary">Brownie - 2</CardItem>
          <CardItem type="secondary">Brownie - 3</CardItem>
        </ContentProducts>

        <ContentProduct>
          <CardItem type="primary" size="lg">
            <ButtonAddProduct></ButtonAddProduct>
          </CardItem>

          <h2>Brownie Taltal</h2>

          <small>150g de chocolate</small>

          <h3>R$ 9,00</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            libero ligula, vehicula nec porttitor sit amet, vehicula ornare
            nunc. Maecenas consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla libero ligula, vehicula nec porttitor sit
            amet, vehicula ornare nunc. Maecenas consequat.
          </p>
        </ContentProduct>
      </Container>
    </Layout>
  );
}
