import { Container,Card,Content } from "./styles";

interface Card {
  Img: string;
  Description: string;
  Value: string;
}

const renderCards = (cards: Card[]) => {
  return cards.map((card, index) => (
    <Card key={index}>
      <Content>
        <img src={card.Img} alt="Imagem do cartão" />
      </Content>
      <p>{card.Description}</p>
      <span>Tênis Air Jordan</span>
      <p>{card.Value}</p>
    </Card>
  ));
};

const cards: Card[] = [
  { Img: 'src/assets/product/im1.svg', Description: 'Air Jordan 1 High Zoom CMFT Tropical Twits', Value: 'R$1999.00' },
  { Img: 'src/assets/product/im2.svg', Description: 'Air Jordan 1 Mid SE Bright Citrus', Value: 'R$1999.00' },
  { Img: 'src/assets/product/im3.svg', Description: 'Air Jordan 1 Mid Dutch Green', Value: 'R$1999.00' },
  { Img: 'src/assets/product/im4.svg', Description: 'Air Jordan 1 Mid Dutch Green', Value: 'R$1999.00' },
  { Img: 'src/assets/product/im5.svg', Description: 'Air Jordan 1 Mid Dutch Green', Value: 'R$1999.00' },
  { Img: 'src/assets/product/im6.svg', Description: 'Air Jordan 1 Mid Dutch Green', Value: 'R$1999.00' },
  // Adicione mais objetos Card conforme necessário
];


const Cards = ()=> {
  return(
    <>
    <Container>{renderCards(cards)}</Container>
    </>
  );
}

export default Cards;