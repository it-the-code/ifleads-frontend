import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: Center;
  border: 1px solid black;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;

  img.logo {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      text-transform: capitalize;
    }

    input {
      display: block;
      height: 40px;
      border: 1px solid var(--blue);
      border-radius: 4px;
      margin-top: 5px;
      padding: 10px;
      margin-bottom: 10px;
      width: 200px;
      color: #333;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      text-transform: uppercase;
      background-color: var(--blue);
      border: none;
      border-radius: 4px;
      padding: 8px 24px;
      color: white;
      font-weight: 500;
      align-self: flex-end;
      cursor: pointer;
      font-size: 14px;
    }
  }
`;
