import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/LateralNavbar/NavBar';
import style from './CadFunc.module.css';

const CadFunc = () => {
  const [novoFunc, setNovoFunc] = useState({
    name: '',
    email: '',
    cargo: '',
    salario: '',
    dataAdmissao: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNovoFunc({ ...novoFunc, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/func', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoFunc)
    }).then(() => {
      alert('Funcionário Cadastrado');
      navigate('/funcs');
    });
  };

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Cadastrar Funcionário</h1>
          <label>
            Nome:
            <input
              type="text"
              placeholder="Digite o nome do funcionário"
              name="name"
              required
              value={novoFunc.name}
              onChange={handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              placeholder="Digite o email do funcionário"
              name="email"
              required
              value={novoFunc.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Salário:
            <input
              type="number"
              placeholder="Digite o salário do funcionário"
              name="salario"
              required
              value={novoFunc.salario}
              onChange={handleChange}
            />
          </label>
          <label>
            Cargo:
            <input
              type="text"
              placeholder="Digite o cargo do funcionário"
              name="cargo"
              required
              value={novoFunc.cargo}
              onChange={handleChange}
            />
          </label>
          <label>
            Data de Admissão:
            <input
              type="date"
              name="dataAdmissao"
              required
              value={novoFunc.dataAdmissao}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default CadFunc;
