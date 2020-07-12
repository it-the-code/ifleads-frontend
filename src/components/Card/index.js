import React from 'react';
import PropTypes from 'prop-types';
import { MdBuild } from 'react-icons/md';
import { Card, CardInformation, CardHeading } from './style';

const InfoCard = ({ name, description, hasMaterials }) => (
  <Card disabled={!hasMaterials}>
    <CardInformation>
      <CardHeading>
        <h1>{name}</h1>
        <MdBuild size={20} />
      </CardHeading>
      <p>{description}</p>
    </CardInformation>
    <button type="button" disabled={!hasMaterials}>
      Emprestar
    </button>
  </Card>
);

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasMaterials: PropTypes.bool.isRequired,
};

export default InfoCard;
