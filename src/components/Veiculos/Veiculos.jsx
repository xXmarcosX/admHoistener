// Importe os componentes necessários
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Veiculos.css';

const Veiculos = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Erro ao obter carros:', error));
    }, []);

    return (
        <div className="half-screen-div">
            <ul className="car-list">
                {cars.map(car => (
                    <li key={car._id} className="car-item">
                        
                        <Link to={`/car/${car._id}`} className="car-link">
                            <img src={car.image} alt={car.model} className="car-image" />
                            <div className="car-details">
                                <h3>{car.mark} {car.model}</h3>
                                <p>Placa: {car.plate}</p>
                                <p>Data de lançamento: {new Date(car.releaseDate).toLocaleDateString()}</p>
                                <p>Preço: R$ {car.price}</p>
                                <p>Cor: {car.color}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Veiculos;
