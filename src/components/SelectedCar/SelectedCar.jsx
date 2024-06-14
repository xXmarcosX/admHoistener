import React from 'react'

const SelectedCar = ({car}) => {
  return (
    <>
      <ul>
        <li>{car.mark}</li>
        <li>{car.model}</li>
      </ul>
    </>
  )
}

export default SelectedCar
