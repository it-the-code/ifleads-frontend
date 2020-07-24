import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 1em;
  max-width: 15em;
  line-height: 1.3em;
  border-radius: 4px;
  margin: 0 1.5em 1.5em 0;
  box-shadow: 0 0 0.7em rgba(0, 0, 0, 0.15);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    outline: none;
  }
`;

export const CardInformation = styled.div`
  padding: 0 0.8em;
  text-align: justify;

  p {
    font-size: 0.9rem;
    cursor: default;
  }
`;

export const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 1.5em;

  h1 {
    font-size: 1rem;
    letter-spacing: 0.1em;
    cursor: default;
  }

  svg {
    color: var(--dark-green);
    cursor: pointer;
  }
`;
