import { Container,Content } from "./styles";
import Logo from "../../assets/logo-jordan.png"

const Banner = ()=>{
  return(<>
    <Container>
      <Content>     
        <h2><img src = {Logo} /> JordanShoes</h2>
        <h1>A melhor loja de Jordan</h1>
        <p>O tênis Jordan é fruto de uma velha e forte <br/> parceria entre a Nike e o Jogador Michael Jordan.</p>
      </Content>
    </Container>
    </>);
}

export default Banner