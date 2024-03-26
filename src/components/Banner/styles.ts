import styled from 'styled-components';
import BannerImage from "../../assets/image-michael-jordan.png"; 

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:350px;
  width:100%;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position:top;

`;

export const Content = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width:68%;
  max-height:350px;
  color:var(--font);
  gap: 1rem;
  >p{
    font-size:20px;
  }
  >h2{
    font-size:28px;
    display:flex;
    align-items:center;
  }
`;


