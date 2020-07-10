import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ children }) => <>{children}</>;

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
};

export default Default;
