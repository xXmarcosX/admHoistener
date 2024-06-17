import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/hoistener-logo1.png';
import './NavBar.css';

const NavBar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img src={logo} alt="Logo"/>
      <ul>
        <li><Link to="/carros" onClick={onClose}>Veiculos</Link></li>
        <li><Link to="/clientes" onClick={onClose}>Clientes</Link></li>
        <li><Link to="/reservas" onClick={onClose}>Reservas</Link></li>
        <li><Link to="/funcs" onClick={onClose}>Funcionarios</Link></li>
      </ul>

      <div className="btns">
        <Link to={'/cadveiculo'}>
          <button>Cadastrar Produto</button>
        </Link>
        <Link to={'/cadfunc'}>
          <button>Cadastrar Funcionário</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
