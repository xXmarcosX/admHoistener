import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditClientForm = () => {
  const { id } = useParams()
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  })

  useEffect(() => {
    fetch('http://localhost:4000/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    if (users.length > 0 && id) {
      const foundUser = users.find(user => user._id === id)
      if (foundUser) {
        setUser({
          ...foundUser,
          password: ''
        })
      }
    }
  }, [users, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((r) => {
      alert('Usuário atualizado com sucesso!')
      navigate('/clientes')
    }).catch((e) => {
      alert(e)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" value={user.cpf} onChange={handleChange} />
        </label>
        <label>
          Logradouro:
          <input type="text" name="logradouro" value={user.logradouro} onChange={handleChange} />
        </label>
        <label>
          Bairro:
          <input type="text" name="bairro" value={user.bairro} onChange={handleChange} />
        </label>
        <label>
          Cidade:
          <input type="text" name="localidade" value={user.localidade} onChange={handleChange} />
        </label>
        <label>
          Uf:
          <input type="text" name="uf" value={user.uf} onChange={handleChange} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </>
  )
}

export default EditClientForm
