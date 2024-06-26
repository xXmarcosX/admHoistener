import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/LateralNavbar/NavBar';
import style from './CadastroVeiculo.module.css';

const CadastroVeiculo = () => {
  const [novoVeiculo, setNovoVeiculo] = useState({
    mark: '',
    model: '',
    plate: '',
    releaseDate: '',
    price: 0,
    color: '',
    quilometragem: '',
    cambio: '',
    motor: '',
    flex: false,
    description: '',
    image: ''
  });

      const navigate = useNavigate()

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNovoVeiculo(prevCar => ({
          ...prevCar,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/car', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(novoVeiculo)
        }).then(() => {
          console.log('Veiculo Cadastrado');
        });
        navigate('/carros');
      }

  return (
    <>
      <NavBar/>

      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

          <label>
            Marca:
            <input
              type="text"
              placeholder='Digite a marca do veiculo'
              name='mark'
              required
              value={novoVeiculo.mark}
              onChange={handleChange}
            />
          </label>

          <label>
            Modelo:
            <input
              type="text"
              placeholder='Digite o modelo do veiculo'
              name='model'
              value={novoVeiculo.model}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Placa:
            <input
              type="text"
              placeholder='Digite a placa do veículo'
              name='plate'
              value={novoVeiculo.plate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Data de lançamento:
            <input
              type="date"
              placeholder='Digite a data de lançamento'
              name='releaseDate'
              value={novoVeiculo.releaseDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              placeholder='Digite o preço do veículo'
              name='price'
              value={novoVeiculo.price}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Cor:
            <input
              type="text"
              placeholder='Digite a cor do veículo'
              name='color'
              value={novoVeiculo.color}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Quilometragem:
            <input
              type="text"
              placeholder='Digite a quilometragem do veículo'
              name='quilometragem'
              value={novoVeiculo.quilometragem}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Cambio:
            <input
              type="text"
              placeholder='Digite o cambio do veículo'
              name='cambio'
              value={novoVeiculo.cambio}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Motor:
            <input
              type="text"
              placeholder='Digite o motor do veículo'
              name='motor'
              value={novoVeiculo.motor}
              onChange={handleChange}
              required
            />
          </label>

          <label>
          Flex:
          <input
            type="checkbox"
            name="flex"
            checked={novoVeiculo.flex}
            onChange={handleChange}
          />
        </label>

          <label>
            Imagem:
            <input
              type="text"
              placeholder='insira a url da imagem'
              value={novoVeiculo.image}
              onChange={handleChange}
              name='image'
              required
            />
          </label>

          <button>Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default CadastroVeiculo;
