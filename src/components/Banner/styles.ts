import styled from 'styled-components';
import BannerImage from "../../assets/image-michael-jordan.png"; 

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:350px;
  width:100%;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position:top;
  >p{
    font-size:20px;
  }
`;


