import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));; /* Inicialmente exibir três elementos por linha */
  grid-gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Se a largura da tela for menor que 992px, exibir dois elementos por linha */

  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr)); /* Se a largura da tela for menor que 768px, exibir um elemento por linha */
    
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card);
  width: 100%;
  height: 200px;
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
    font-size: 12px;
    color: var(--font-sencondary);
    
  }
  
`;
