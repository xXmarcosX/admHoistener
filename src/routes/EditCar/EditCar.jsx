import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../components/LateralNavbar/NavBar';

const EditCar = () => {
  return (
    <>
    <NavBar/>
      {EditCar ? (
         <EditCar car={EditCar}/>
         
      ):
      <h1>car not found</h1>}
    </>
  );
};

export default EditCar;
