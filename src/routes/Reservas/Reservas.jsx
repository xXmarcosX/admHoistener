import React, { useEffect, useState } from 'react'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './Reservas.module.css'

const Reservas = () => {

    const [reservas, setReservas] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/reservas')
        .then(response => response.json())
        .then(data => setReservas(data))
        .catch(e => alert('erro: ', e))
    }, [])

    const handleDelete =((id)=>{
        fetch(`http://localhost:4000/reserva/${id}`,{
          method:'delete',
        }).then(()=>{
          alert('Reserva cancelada')
          location.reload()
        })
       })

    console.log(reservas)

  return (
    <>
      <NavBar/>

<section className={style.listaClientes}>

<table>
  <thead>
    <tr>
      <th>Email do cliente</th>
      <th>Modelo do veículo</th>
      <th>Placa do veículo</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {reservas.map((item, index) => (
      <tr key={index}>
        <td>{item.user.email}</td>
        <td>{item.car.mark} {item.car.model}</td>
        <td>{item.car.plate}</td>
        <td>
        </td>
        <td>
          <button onClick={handleDelete.bind(this, item._id)} className={style.delete}>
            Cancelar Reserva
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</section>
    </>
  )
}

export default Reservas
