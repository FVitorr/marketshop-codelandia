import styled from 'styled-components';
 
export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
`;

export const Header = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  height:3rem;
  width:100%;
  border: 1px solid black;
  >p{
    font-size:20px;
  }
`
export const ImageArea = styled.div`
  position:relative;
  width:100%;
  border: 1px solid black;
  height:36vh;
  >img{
    width:100%;
    height:100%;
  }
`;

export const ImageOverlay = styled.div`
  position:absolute;
  bottom: 2vh;
  display:flex;
  flex-direction:column;
  gap:1rem;
  color: var(--font);
  right: 45vw;
  height:190px;
  border:1px solid blue;
  width:30%;
  padding:10px;
  >h1{
    font-size: 3vh;
  }
  >p{
    font-size: 2.5vh;
    border:1px solid black;
  }
  >img{
    width:160px;
  }
`;