import { Container,Content } from "./styles";
import Logo from "../../assets/logo-jordan.png"

const Banner = ()=>{
  return(<>
    <Container>
      <Content>     
        <h3><img src = {Logo} /> JordanShoes</h3>
        <h2>A melhor loja de Jordan</h2>
        <p>O tênis Jordan é fruto de uma velha e forte <br/> parceria entre a Nike e o Jogador Michael Jordan.</p>
      </Content>
    </Container>
    </>);
}

export default Banner