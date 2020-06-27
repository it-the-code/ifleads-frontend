import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Container, MainInformation, SecondaryInformation } from './style';

const Track = ({ name, returnStatus, tooker, status, time }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <MainInformation>
        <div>
          <h2>{name}</h2>
          <span>
            {returnStatus} {time}
          </span>
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
          <span>{tooker}</span>
        </div>
        <h3>{status}</h3>
      </SecondaryInformation>
    </Container>
  );
};

Track.propTypes = {
  name: PropTypes.string.isRequired,
  returnStatus: PropTypes.string.isRequired,
  tooker: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Track;
