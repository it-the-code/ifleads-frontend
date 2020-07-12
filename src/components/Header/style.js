import styled from 'styled-components';

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3em;
  background-color: var(--blue);
  color: white;
  z-index: 5;
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      a {
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }

    li:not(:first-child) {
      margin-left: 1em;
    }
  }

  div:first-child {
    display: flex;

    & > h1 {
      font-size: 1.5rem;
      font-weight: 500;
      font-style: italic;
      text-transform: capitalize;
      margin-left: 0.3em;
    }
  }

  div:last-child {
    display: flex;
    align-item: center;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    white-space: nowrap;
    margin-right: 0.5em;
  }

  svg {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 2.9em;
  right: -1.5em;
  background: white;
  padding: 0.7em 1.5em;
  display: ${(props) => (props.display ? 'block' : 'none')};

  ul {
    list-style: none;
    text-align: right;
    margin: 0;

    li {
      margin-bottom: 0.5em;

      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }
  }

  hr {
    height: 1px;
    background-color: var(--blue);
    border: none;
    width: 70%;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  & > a {
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--dark-green);
    font-weight: 500;
    color: #333333;
    border-radius: 5px;
    padding: 0.3em 2em;
    cursor: pointer;
    text-decoration: none;

    svg {
      margin-right: 0.6em;
    }
  }

  &::before {
    content: '';
    display: ${(props) => (props.display ? 'block' : 'none')};
    position: absolute;
    top: -1.2em;
    right: 1.7em;
    width: 1em;
    height: 1em;
    z-index: 4;
    border: 10px solid;
    border-color: transparent transparent white transparent;
  }
`;
