import styled from "styled-components";

export const Container = styled.div`
  width:1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow:row;
  grid-gap: 20px;
`;

export const Card = styled.div`
  width: 400px;
  height:200px;
  border: 1px solid black;
`;