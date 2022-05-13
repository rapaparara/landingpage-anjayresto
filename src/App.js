import Intro from "./components/Intro";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import img from "./assets/img/img-intro.jpg";
import Detail from "./components/Detail";

const AppStyle = styled.div`
  background-color: #262626;
  color: #eee;
  font-family: "Ubuntu", sans-serif;
`;

const IntroSection = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
const DetailSection = styled.div`
  margin-top: 30px;
  height: auto;
`;

function App() {
  return (
    <AppStyle>
      <IntroSection>
        <Navbar />
        <Intro />
      </IntroSection>
      <DetailSection>
        <Detail />
      </DetailSection>
    </AppStyle>
  );
}

export default App;
