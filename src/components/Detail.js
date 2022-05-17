import styled from "styled-components";
import img1 from "../assets/img/img-detail-1.jpg";
import img2 from "../assets/img/img-detail-2.jpg";
import img3 from "../assets/img/img-detail-3.jpg";
import img4 from "../assets/img/img-detail-4.jpg";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;

const Image = styled.img`
  display: block;
  max-width: 280px;
  max-height: 230px;
  width: auto;
  height: auto;
  margin: 6px;
  border-radius: 12px;
`;

const RightSection = styled.div`
  width: 1200px;
  padding: 5px;
  flex-grow: 1;
  line-height: 200%;
  text-align: justify;
`;

const Title = styled.h1`
  color: #dc9700;
  margin-top: 0;
`;

const Link = styled.a`
  color: #eee;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #dc9700;
    border-bottom: 1px solid #dc9700;
  }
`;

const Detail = () => {
  return (
    <Section>
      <ImageSection>
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
        <Image src={img4} />
      </ImageSection>
      <RightSection>
        <Title>Cerita kami</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sollicitudin bibendum metus et posuere. Aenean pretium mi faucibus
          odio sollicitudin, eget aliquam metus viverra. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Pellentesque sollicitudin bibendum
          metus et posuere.
        </p>
        <Link href="#">Lihat lebih lanjut.</Link>
      </RightSection>
    </Section>
  );
};

export default Detail;
