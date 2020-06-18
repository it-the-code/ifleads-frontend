import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdMoreVert, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Navbar, Menu, UserOptions, Dropdown } from './style';
import logo from '../../assets/images/ifrn-logo.svg';

const Header = ({ username }) => {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  return (
    <Navbar>
      <Menu>
        <div>
          <img src={logo} alt="IFRN logo" />
          <h1>leads</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Materiais</Link>
          </li>
          <li>
            <Link to="/loans">Emprestimos</Link>
          </li>
          <li>
            <Link to="/losts">Achados e Perdidos</Link>
          </li>
        </ul>
      </Menu>
      <UserOptions>
        <span>{username}</span>
        <MdMoreVert size={25} onClick={() => setIsDisplayed(!isDisplayed)} />

        <Dropdown display={isDisplayed ? 1 : 0}>
          <ul>
            <li>
              <Link to="temp">Perfil</Link>
            </li>
            <li>
              <Link to="temp">Sair</Link>
            </li>
          </ul>
          <hr />
          <Link to="temp">
            <MdAdd size={20} />
            MATERIAL
          </Link>
        </Dropdown>
      </UserOptions>
    </Navbar>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.user ? state.user.name : '',
});

export default connect(mapStateToProps)(Header);
