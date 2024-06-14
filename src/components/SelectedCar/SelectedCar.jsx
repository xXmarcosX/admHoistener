import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <ul>
        <li>{car.mark}</li>
        <li>{car.model}</li>

        <button onClick={() => handleDelete(car._id)}>Deletar</button>
      </ul>
    </>
  )
}

export default SelectedCar
