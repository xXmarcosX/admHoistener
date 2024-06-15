// Importe os componentes necessários
import React, { useEffect, useState } from 'react';
import VeiculoCard from '../VeiculoCard/VeiculoCard';
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
            {cars.map(car => (
                        <VeiculoCard car={car} key={car._id}/>
                ))}
                
        </div>
    );
}

export default Veiculos;
