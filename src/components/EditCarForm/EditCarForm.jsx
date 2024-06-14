import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditCarForm.module.css';

const EditCarForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({
    mark: '',
    model: '',
    plate: '',
    releaseDate: '',
    price: '',
    color: '',
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
        setCar(foundCar);
      }
    }
  }, [cars, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar(prevCar => ({
      ...prevCar,
      [name]: value
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Marca:
        <input type="text" name="mark" value={car.mark} onChange={handleChange} />
      </label>
      <label>
        Modelo:
        <input type="text" name="model" value={car.model} onChange={handleChange} />
      </label>
      <label>
        Placa:
        <input type="text" name="plate" value={car.plate} onChange={handleChange} />
      </label>
      <label>
        Data de Lançamento:
        <input type="text" name="releaseDate" value={car.releaseDate} onChange={handleChange} />
      </label>
      <label>
        Preço:
        <input type="text" name="price" value={car.price} onChange={handleChange} />
      </label>
      <label>
        Cor:
        <input type="text" name="color" value={car.color} onChange={handleChange} />
      </label>
      <label>
        Descrição:
        <input type="text" name="description" value={car.description} onChange={handleChange} />
      </label>
      <label>
        Imagem:
        <input type="text" name="image" value={car.image} onChange={handleChange} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditCarForm;
