import { Container, ImageArea, ImageOverlay } from "./styles";
import Header from "../Header"
import Banner from "../Banner";
import Store from "../Store";



const Home = ()=>{
  return(<>
    <Container>
      <Header/>
      <Banner/>
      <Store/>
    </Container>

    </>);
}

export default Home