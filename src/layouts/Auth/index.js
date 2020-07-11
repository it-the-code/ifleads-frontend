import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

const Auth = ({ children }) => (
  <div>
    <Header />
    asdfs
    {children}
  </div>
);

Auth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Auth;
