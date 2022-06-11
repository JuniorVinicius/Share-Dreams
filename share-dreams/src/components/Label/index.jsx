import { Container, Text } from "./style";

export default function Label({ type }) {
  return (
    <>
      <Container type={type}>
        <Text type={type}>{type}</Text>
      </Container>
    </>
  );
}
