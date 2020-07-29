import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  padding: 1.5em 5em;
  min-height: 80vh;
  height: 100%;
`;

export const Materials = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-wrap: wrap;
`;

export const NotFoundMaterials = styled.h3`
  color: #999999;
  font-weight: 500;
  font-style: italic;
`;
