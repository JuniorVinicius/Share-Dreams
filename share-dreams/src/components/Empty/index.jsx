import React from "react";
import { Container, Title } from "./style";

export default function EmptyScreen({ title }) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
    </>
  );
}
