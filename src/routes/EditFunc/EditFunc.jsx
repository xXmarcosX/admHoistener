import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './EditFunc.module.css'

const EditFunc = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [func, setFunc] = useState({
        name: '', 
        email: '', 
        salario: '', 
        cargo: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFunc(prevUser => ({
          ...prevUser,
          [name]: value
        }))
      }

      useEffect(() => {
        fetch('http://localhost:4000/funcs/')
          .then(response => response.json())
          .then(data => setFunc(data))
      }, [])

      useEffect(() => {
        if (func.length > 0 && id) {
          const foundFunc = func.find(func => func._id === id)
          if (foundFunc) {
            setFunc(foundFunc)
          }
        }
      }, [func, id])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/func/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(func)
        }).then((r) => {
          alert('Funcionário atualizado com sucesso!')
          navigate('/funcs')
        }).catch((e) => {
          alert(e)
        })
      }

  return (
    <>
      <NavBar/>

<div className={style.container}>
  <form className={style.form} onSubmit={handleSubmit}>
    <h1>Editar Funcionário</h1>

    <label>
      Nome:
      <input
        type="text"
        placeholder='Digite o nome do funcionário'
        name='name'
        required
        value={func.name}
        onChange={handleChange}
      />
    </label>

    <label>
      E-mail:
      <input
        type="text"
        placeholder='Digite o email do funcionário'
        name='email'
        value={func.email}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Salario:
      <input
        type="number"
        placeholder='Digite o salário do funcionário'
        name='salario'
        value={func.salario}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Cargo:
      <input
        type="text"
        placeholder='Digite o cargo do funcionário'
        name='cargo'
        value={func.cargo}
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

export default EditFunc
