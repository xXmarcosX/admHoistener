// Importe os componentes necessários
import React from 'react';
import { useParams } from 'react-router-dom'; 

const DetalhesCarro = () => {
    const { carId } = useParams();


    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <p>ID do Carro: {carId}</p>
        </div>
    );
}

export default DetalhesCarro;
