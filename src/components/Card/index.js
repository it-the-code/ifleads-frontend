import React from 'react';
import PropTypes from 'prop-types';
import { MdBuild } from 'react-icons/md';
import { Card, CardInformation, CardHeading } from './style';

const InfoCard = ({ name, description }) => (
  <Card>
    <CardInformation>
      <CardHeading>
        <h1>{name}</h1>
        <MdBuild size={20} />
      </CardHeading>
      <p>{description}</p>
    </CardInformation>
    <button type="button">Emprestar</button>
  </Card>
);

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoCard;
