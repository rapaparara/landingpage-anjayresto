import styled from "styled-components";
import img1 from "../assets/img/img-detail-4.jpg";
import img2 from "../assets/img/img-detail-2.jpg";
import img3 from "../assets/img/img-detail-3.jpg";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #dc9700;
  margin-top: 0;
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;
const Card = styled.div`
  flex-wrap: wrap;
  background-color: #383838;
  width: 240px;
  height: 300px;
  margin: 10px;
  border-radius: 12px;
`;

const CardImage = styled.img`
  max-width: 240px;
  max-height: auto;
  border-radius: 12px 12px 0 0;
`;

const CardContent = styled.div`
  padding: 8px;
`;

const Link = styled.a`
  color: #dc9700;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 1px solid #dc9700;
  &:hover {
    color: #eee;
    border-bottom: 1px solid #eee;
  }
`;

const Product = () => {
  return (
    <Section>
      <center>
        <Title>Spesial untuk kamu</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sollicitudin bibendum metus et posuere.
        </p>
        <CardWrapper>
          <Card>
            <CardImage src={img1} />
            <CardContent>
              <h3>Lorem ipsum dolor sit amet</h3>
              <Link href="#">Pesan Sekarang!</Link>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={img2} />
            <CardContent>
              <h3>consectetur adipiscing elit</h3>
              <Link href="#">Pesan Sekarang!</Link>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={img3} />
            <CardContent>
              <h3>ellentesque sollicitudin bibendum metus</h3>
              <Link href="#">Pesan Sekarang!</Link>
            </CardContent>
          </Card>
        </CardWrapper>
      </center>
    </Section>
  );
};

export default Product;
