import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/LateralNavbar/NavBar';
import SelectedCar from '../../components/SelectedCar/SelectedCar';

const Car = () => {

    const [cars, setCars] = useState([]);
    const id = useParams()

    useEffect(() => {
        fetch('http://localhost:4000/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Erro ao obter carros:', error));
    }, []);

    const selectedCar = cars.find((car) => {
        return car._id === id.id
    })

  return (
    <>
      <NavBar/>
      {selectedCar ? (
         <SelectedCar car={selectedCar}/>
         
      ):
      <h1>car not found</h1>}
    </>
  )
}

export default Car
