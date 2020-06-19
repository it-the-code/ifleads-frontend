import React from 'react';
import { useSelector } from 'react-redux';
import { MdMoreVert, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Navbar, Menu, UserOptions, Dropdown } from './style';
import logo from '../../assets/images/ifrn-logo.svg';

const Header = () => {
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const username = useSelector(({ user }) => (user ? user.username : ''));

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

export default Header;
