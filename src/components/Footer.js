import styled from "styled-components";

const Background = styled.div`
  background-color: #191919;
  margin-top: 30px;
  height: 30vh;
`;
const Footer = () => {
  return (
    <Background>
      <center>
        <h2>Halaman web ini dibuat oleh @rapaparara</h2>
      </center>
    </Background>
  );
};

export default Footer;
