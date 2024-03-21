import React from "react";
import { Container,Header, ImageArea, ImageOverlay } from "./styled";
import BannerImage from "../../assets/image-michael-jordan.png"; 
import LogoImage from "../../assets/logo.png"




const Home = ()=>{
  return(<>
    <Container>
      <Header>
        <p>Frete grátis para todo o Brasil</p>
      </Header>
      <ImageArea>
        <img src = {BannerImage}/>
        <ImageOverlay>
          <img src= {LogoImage}/>
          <h1>A melhor loja de Jordan</h1>
          <p>O tênis Jordan é fruto de uma velha e forte <br/>parceria entre a Nike e o jogador Michael Jordan. </p>
        </ImageOverlay>
      </ImageArea>

    </Container>
    </>);
}

export default Home