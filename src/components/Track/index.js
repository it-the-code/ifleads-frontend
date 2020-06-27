import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Container, MainInformation, SecondaryInformation } from './style';

const Track = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <MainInformation>
        <div>
          <h2>Nome Material</h2>
          <span>DEVOLVIDO há 2 minutos</span>
        </div>
        {open ? (
          <MdKeyboardArrowUp size={30} onClick={() => setOpen(!open)} />
        ) : (
          <MdKeyboardArrowDown size={30} onClick={() => setOpen(!open)} />
        )}
      </MainInformation>
      <SecondaryInformation open={open}>
        <div>
          <h3>Emp. para:</h3>
          <span>20161038060002</span>
        </div>
        <h3>Não devolvido</h3>
      </SecondaryInformation>
    </Container>
  );
};

export default Track;
