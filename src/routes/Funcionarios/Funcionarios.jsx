import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './Funcionarios.module.css'

const Funcionarios = () => {

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/funcs')
        .then(response => response.json())
        .then(data => setFuncionarios(data))
        .catch(e => alert('erro: ', e))
    }, [])

    const handleDelete =((id)=>{
        fetch(`http://localhost:4000/func/${id}`,{
          method:'delete',
        }).then(()=>{
          alert('Funcinário demitido')
          location.reload()
        })
       })

       function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
        

  return (
    <>
      <NavBar/>

<section className={style.listaClientes}>

<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Salário</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {funcionarios.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{formatPrice(item.salario)}</td>
        <td>
        <Link className={style.edit} to={`/editfunc/${item._id}`}>
            Editar
          </Link>
        </td>
        <td>
          <button onClick={handleDelete.bind(this, item._id)} className={style.delete}>
            Desativar
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

export default Funcionarios
