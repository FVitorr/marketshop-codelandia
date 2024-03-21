import styled from "styled-components";

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  max-width:1280px;
  width:70%;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  border:1px solid blue;
  margin: 1rem auto;
`;

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border:1px solid black;
`;