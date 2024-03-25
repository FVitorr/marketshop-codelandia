import { Card, Container, Row } from "./styles";

interface Card {
  Img: string;
  Description: string;
  Value: string;
}

const renderCards = (cards: Card[]) => {
  return cards.map((card, index) => (
    <Card key={index}>
      <img src={card.Img} alt="Imagem do cartão" />
      <p>{card.Description}</p>
      <p>{card.Value}</p>
    </Card>
  ));
};

const cards: Card[] = [
  { Img: 'caminho/para/imagem1.jpg', Description: 'Descrição do cartão 1', Value: 'Valor do cartão 1' },
  { Img: 'caminho/para/imagem2.jpg', Description: 'Descrição do cartão 2', Value: 'Valor do cartão 2' },
  { Img: 'caminho/para/imagem3.jpg', Description: 'Descrição do cartão 3', Value: 'Valor do cartão 3' },
  { Img: 'caminho/para/imagem4.jpg', Description: 'Descrição do cartão 4', Value: 'Valor do cartão 4' },
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