import { Card, Container, Row } from "./styles";

interface Card {
  Img: string;
  Description: string;
  Value: string;
}

const renderCard = (cards: Card[]) => {
  const rows: JSX.Element[] = [];
  for (let i = 0; i < cards.length; i+= 3){
    const row: JSX.Element[] = [];
    for (let j = i; j < i+3 && j < cards.length;j++){
      row.push(
        <Card key={j}>
          <img src={cards[j].Img} alt="Imagem do cartão" />
          <p>{cards[j].Description}</p>
          <p>{cards[j].Value}</p>
        </Card>
      );
    }
    rows.push(<Row>{row}</Row>)
  }
  return rows
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
      {renderCard(cards)}
    </>
  );
}

export default Cards;