import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './EditClientForm.module.css'

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
      <div className={style.container}>
  <form className={style.form} onSubmit={handleSubmit}>
    <h1>Editar Cliente</h1>

    <label>
      Nome:
      <input
        type="text"
        placeholder='Digite o nome do cliente'
        name='name'
        required
        value={user.name}
        onChange={handleChange}
      />
    </label>

    <label>
      E-mail:
      <input
        type="text"
        placeholder='Digite o email do cliente'
        name='email'
        value={user.email}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Senha:
      <input
        type="password"
        placeholder='Digite a senha do cliente'
        name='password'
        value={user.password}
        onChange={handleChange}
      />
    </label>

    <label>
      CPF:
      <input
        type="text"
        placeholder='Digite o CPF do cliente'
        name='cpf'
        value={user.cpf}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Logradouro:
      <input
        type="text"
        placeholder='Digite o logradouro do cliente'
        name='logradouro'
        value={user.logradouro}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Bairro:
      <input
        type="text"
        placeholder='Digite o bairro do cliente'
        name='bairro'
        value={user.bairro}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Cidade:
      <input
        type="text"
        placeholder='Digite a cidade do cliente'
        name='localidade'
        value={user.localidade}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      UF:
      <input
        type="text"
        placeholder='Digite o UF do cliente'
        name='uf'
        value={user.uf}
        onChange={handleChange}
        required
      />
    </label>

    <button>Cadastrar</button>
  </form>
</div>
    </>
  )
}

export default EditClientForm
