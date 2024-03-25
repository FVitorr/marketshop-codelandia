import styled from 'styled-components';

 
export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;



export const ImageOverlay = styled.div`
  position:absolute;
  top:20%;
  right:40%;
  display:flex;
  flex-direction:column;
  gap:1rem;
  color: var(--font);
  width:80vh;
  >img{
    width:190px;
  }
  >h1{
    font-size:4vh;
  }
  >p{
    font-size:3vh;
  }
`;

