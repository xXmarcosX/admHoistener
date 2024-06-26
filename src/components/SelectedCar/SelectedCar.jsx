import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SelectedCar.module.css';

const SelectedCar = ({ car }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/car/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      console.log(response.status);
      alert('Carro deletado com sucesso!');
      navigate('/carros');
    });
  };

  const handleEdit = (id) => {
    navigate(`/editcarro/${id}`);
  };

  
  function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1); 
  return date.toLocaleDateString('pt-BR');
}

  return (
    <div className={styles.halfScreenDiv}>
      <div className={styles.details}>
      <img src={car.image} alt={car.model} className={styles.carImage} />
      <ul>
        <li>Marca: {car.mark}</li>
        <li>Modelo: {car.model}</li>
        <li>Placa: {car.plate}</li>
        <li>Data de Lançamento: {car.releaseDate ? formatDate(car.releaseDate) : ''}</li>
        <li>Preço: {formatPrice(car.price)} </li>
        <li>Cor: {car.color}</li>
        <li style={{width: '40%'}}>Descrição: {car.description}</li>
        <li>
          <button className={styles.deleteButton} onClick={() => handleDelete(car._id)}>Deletar</button>
          <button className={styles.editButton} onClick={() => handleEdit(car._id)}>Editar</button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default SelectedCar;
