import React from "react";
import { Link } from "react-router-dom";

const VeiculoCard = ({ car }) => {

  function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); 
    return date.toLocaleDateString('pt-BR');
  }

  return (
    <>
      <div className="car-item">
        <Link to={`/car/${car._id}`} className="car-link">
          <img src={car.image} alt={car.model} className="car-image" />
          <div className="car-details">
            <h3>
              {car.mark} {car.model}
            </h3>
            <p>Placa: {car.plate}</p>
            <p>
              Data de lançamento: {car.releaseDate ? formatDate(car.releaseDate) : ''}
            </p>
            <p>Preço: {formatPrice(car.price)} </p>
            <p>Cor: {car.color}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VeiculoCard;
