import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 60%;
  text-align: center;
  text-shadow: 2px 2px #1B1A17;
  margin 0 auto;
`;

const Button = styled.button`
  background-color: #f0a500;
  padding: 10px 14px;
`;

const Intro = () => {
  return (
    <Section>
      <h1>Makanan berkualitas, berkelas, dan enak !</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sollicitudin bibendum metus et posuere. Aenean pretium mi faucibus odio
        sollicitudin, eget aliquam metus viverra.
      </p>
      <Button>Reservasi Meja</Button>
    </Section>
  );
};

export default Intro;
