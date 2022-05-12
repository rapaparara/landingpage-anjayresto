import Intro from "./components/Intro";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import img from "./assets/img/img-intro.jpg";

const AppSection = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #eee;
`;

function App() {
  return (
    <AppSection>
      <Navbar />
      <Intro />
    </AppSection>
  );
}

export default App;
