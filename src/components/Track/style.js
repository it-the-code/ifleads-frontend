import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4em 1em;
  border: 1px solid var(--dark-green);
  border-radius: 5px;
  overflow: hidden;
  height: ${(props) => (props.open ? '7em' : '3.7em')};
  margin-bottom: 0.6em;
`;

export const MainInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: block;

    h2 {
      font-size: 0.9rem;
      letter-spacing: 0.05em;
    }

    & > span {
      font-size: 0.8rem;
      color: var(--dark-grey);
      font-weight: 500;
    }
  }

  svg {
    fill: var(--dark-green);
    cursor: pointer;
  }
`;

export const SecondaryInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  font-size: 0.8rem;
  color: var(--dark-grey);

  h3 {
    font-size: 0.8rem;
  }

  span {
    font-weight: 400;
  }
`;
