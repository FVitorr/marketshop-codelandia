import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr)); 
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card);
  width: 100%;
  height: 200px;
  margin-bottom:10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%; /* Largura ajustada */
  max-width: 370px; /* Largura máxima */
  height: 326px;
  > span {
    margin: 10px 0;
    font-size: 12px;
    color: var(--font-sencondary);
  }
  :hover{
    cursor:pointer;
    >img{
      scale:1.3;
      transition:0.5s;
    }
  }
`;
