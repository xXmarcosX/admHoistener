import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SelectedCar.module.css'
const SelectedCar = ({car}) => {

  const navigate = useNavigate()

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/car/${id}`,
      {
        method: 'DELETE'
      }
    ).then((response) => {
      console.log(response.status)
      alert('ain tu vai deletar o carro pain')
      navigate('/carros')
    })
  }

  return (
    <>
      <div className="half-screen-div">
      <img src={car.image} alt={car.model} className="car-image" />
        <ul>
          <li>Marca: {car.mark}</li>
          <li>Modelo: {car.model}</li>
          <li>Placa: {car.plate}</li>
          <li>Data Lacamento: {car.releaseDate}</li>
          <li>Preco: {car.price}</li>
          <li>Cor: {car.color}</li>
          <li>Descricao: {car.description}</li>
          <li>
            <button onClick={() => handleDelete(car._id)}>Deletar</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SelectedCar
