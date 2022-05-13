import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 60%;
  text-align: center;
  text-shadow: 1px 3px 4px rgba(0,0,0,1);
  margin 0 auto;
`;

const Button = styled.button`
  background-color: #f0a500;
  color: #262626;
  font-size: 0.9em;
  font-weight: bold;
  width: 175px;
  height: 40px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 6px 15px -7px rgba(48, 48, 48, 0.75);
  -webkit-box-shadow: 4px 6px 15px -7px rgba(48, 48, 48, 0.75);
  -moz-box-shadow: 4px 6px 15px -7px rgba(48, 48, 48, 0.75);

  &:hover {
    background-color: #dc9700;
    border-radius: 3px;
  }
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
