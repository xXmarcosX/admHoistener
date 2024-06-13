import React from 'react'
import './NavBar.css'
import logo from '../../assets/hoistener-logo1.png';
import { Link } from 'react-router-dom';

const NavBar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img src={logo} alt="Logo"/>
      <ul>
        <li><Link to="/carros" onClick={onClose}>Veiculos</Link></li>
        <li><Link to="/clientes" onClick={onClose}>Clientes</Link></li>
        <li><Link to="/vendas" onClick={onClose}>Vendas</Link></li>
        <li><Link to="/funcionarios" onClick={onClose}>Funcionarios</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
