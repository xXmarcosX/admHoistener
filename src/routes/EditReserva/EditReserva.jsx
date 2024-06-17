import React from 'react'
import NavBar from '../../components/LateralNavbar/NavBar'
import style from './EditReserva.module.css'

const EditReserva = () => {
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

export default EditReserva
