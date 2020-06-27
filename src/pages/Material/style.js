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

export const ActivityHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 30%;
  background: white;
  padding: 1.5em 0.8em;
  height: 31em;
  max-height: 31em;
  position: fixed;
  right: 5em;
  width: 20em;
  box-shadow: 0 0 0.7em rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 0.9rem;
    color: var(--blue);
    letter-spacing: 0.05em;
    margin: 0 1rem 1em 1rem;
  }
`;

export const Pagination = styled.div`
  align-self: flex-end;

  svg {
    fill: var(--blue);
  }
`;
