import React from "react";
import { Link } from "react-router-dom";

const VeiculoCard = ({car}) => {
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
            Data de lançamento: {new Date(car.releaseDate).toLocaleDateString()}
          </p>
          <p>Preço: R$ {car.price}</p>
          <p>Cor: {car.color}</p>
        </div>
      </Link>
      </div>
    </>
  );
};

export default VeiculoCard;
