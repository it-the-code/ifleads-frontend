import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 1em;
  max-width: 15em;
  line-height: 1.3em;
  border-radius: 4px;
  margin: 0 1.5em 1.5em 0;

  button {
    background: var(--blue);
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    padding: 0.4em 0;
    margin-top: 1.2em;
    width: 100%;
    cursor: pointer;
  }
`;

export const CardInformation = styled.div`
  padding: 0 0.8em;
  text-align: justify;

  p {
    font-size: 0.9rem;
  }
`;

export const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0.9em;

  h1 {
    font-size: 1rem;
    letter-spacing: 0.1em;
  }

  svg {
    color: var(--dark-green);
    cursor: pointer;
  }
`;
