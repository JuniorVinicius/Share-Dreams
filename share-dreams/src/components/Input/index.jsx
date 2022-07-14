import React from "react";
import { Container, Input } from "./style";

export default function InputField({ height, width, ...rest }) {
  return (
    <>
      <Container height={height} width={width}>
        <Input {...rest} height={height} width={width}  />
      </Container>
    </>
  );
}
