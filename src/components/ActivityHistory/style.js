import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 30%;
  background: white;
  padding: 1.5em 0.8em;
  height: 32em;
  max-height: 32em;
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
`;

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;

  svg {
    fill: var(--blue);
    cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
    opacity: ${(props) => (props.disabled ? '0.45' : '1')};
  }
`;
