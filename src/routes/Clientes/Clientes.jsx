import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './Clientes.module.css'

const Users = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
  }, [])

  const handleDelete =((id)=>{
    fetch(`http://localhost:4000/user/${id}`,{
      method:'delete',
    }).then(()=>{
      alert('Usuário deletado')
      location.reload()
    })
   })

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
              <Link className={style.edit} to={`/editcliente/${item._id}`}>
                  Editar
                </Link>
              </td>
              <td>
                <button onClick={handleDelete.bind(this, item._id)} className={style.delete}>
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
