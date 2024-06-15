import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SelectedCar.module.css'; // Usando módulos CSS para evitar conflito de nomes

const SelectedCar = ({ car }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/car/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      console.log(response.status);
      alert('Tem certeza que deseja deletar este carro?');
      navigate('/carros');
    });
  };

  const handleEdit = (id) => {
    navigate(`/editcarro/${id}`);
  };

  return (
    <div className={styles.halfScreenDiv}>
      <img src={car.image} alt={car.model} className={styles.carImage} />
      <ul>
        <li>Marca: {car.mark}</li>
        <li>Modelo: {car.model}</li>
        <li>Placa: {car.plate}</li>
        <li>Data de Lançamento: {new Date(car.releaseDate).toLocaleDateString()}</li>
        <li>Preço: {car.price}</li>
        <li>Cor: {car.color}</li>
        <li>Descrição: {car.description}</li>
        <li>
          <button className={styles.deleteButton} onClick={() => handleDelete(car._id)}>Deletar</button>
          <button className={styles.editButton} onClick={() => handleEdit(car._id)}>Editar</button>
        </li>
      </ul>
    </div>
  );
};

export default SelectedCar;
