import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './EditCarForm.module.css';

const EditCarForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({
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

  useEffect(() => {
    fetch('http://localhost:4000/cars/')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  useEffect(() => {
    if (cars.length > 0 && id) {
      const foundCar = cars.find(car => car._id === id);
      if (foundCar) {
        setCar({
          ...foundCar,
          releaseDate: new Date(foundCar.releaseDate).toISOString().split('T')[0] // Ajustando a data para o input
        });
      }
    }
  }, [cars, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar(prevCar => ({
      ...prevCar,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/car/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    }).then(response => {
      console.log(response.status);
      alert('Carro atualizado com sucesso!');
      navigate('/carros');
    }).then(data => console.log(data))
      .catch(e => alert(e));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Editar Veiculo</h1>

        <label>
          Marca:
          <input
            type="text"
            placeholder='Digite a marca do carro'
            name='mark'
            required
            value={car.mark}
            onChange={handleChange}
          />
        </label>

        <label>
          Modelo:
          <input
            type="text"
            placeholder='Digite o modelo do carro'
            name='model'
            value={car.model}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Placa:
          <input
            type="text"
            placeholder='Digite a placa do carro'
            name='plate'
            value={car.plate}
            onChange={handleChange}
          />
        </label>

        <label>
          Data de lançamento:
          <input
            type="date"
            name="releaseDate"
            value={car.releaseDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cor:
          <input
            type="text"
            placeholder='Digite a cor do carro'
            name='color'
            value={car.color}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quilometragem:
          <input
            type="text"
            placeholder='Digite a quilometragem do carro'
            name='quilometragem'
            value={car.quilometragem}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cambio:
          <input
            type="text"
            placeholder='Digite o cambio do carro'
            name='cambio'
            value={car.cambio}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Motor:
          <input
            type="text"
            placeholder='Digite o motor do carro'
            name='motor'
            value={car.motor}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Flex:
          <input
            type="checkbox"
            name="flex"
            checked={car.flex}
            onChange={handleChange}
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            placeholder='Digite o preço do carro'
            name='price'
            value={car.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Imagem:
          <input
            type="text"
            placeholder='Digite a url da imagem'
            name='image'
            value={car.image}
            onChange={handleChange}
            required
          />
        </label>

        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default EditCarForm;
