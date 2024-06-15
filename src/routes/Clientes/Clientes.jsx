import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './Clientes.module.css'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
  }, [])

  console.log(users)

  return (
    <>
      <NavBar/>

      <section className={style.listaClientes}>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Data de Cadastro</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>
                <button>
                <Link>
                  Editar
                </Link>
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                  Deletar
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

export default Users
