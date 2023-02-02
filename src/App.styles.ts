import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: darkblue;
  text-align: center;
`;
