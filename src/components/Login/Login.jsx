import { useRef } from 'react'
import Lista from '../Lista/Lista'
import style from './login.module.css'

function Login(){

    const user = useRef()
    const password = useRef()

    const getUser = sessionStorage.getItem('user')
    const getPassword = sessionStorage.getItem('password')

    const handleSubmit = () => {

      if(user.current.value =="Admin" && password.current.value=="123456"){
  
        let token =
          Math.random().toString(16).substring(2)+
          Math.random().toString(16).substring(2);
  
        sessionStorage.setItem("user","Admin");
        sessionStorage.setItem("password",token); 
  
      }else{
        alert("usuario e senha invalidos")
      }
    }

  return(
    <section className="login">
      {getUser && getPassword ? (
      <Lista/>
    ):
    <div className={style.loginForm}>
        <div className={style.loginFormImg}>
          <img src='https://github.com/welltecnc.png' alt="imagem" />
        </div>
        <form 
        className={style.loginFormForm}
        onSubmit={handleSubmit}
        >
          <h1>Login Administrador</h1>
          <p>
            Usuario:
            <input
              type="text"
              id="user"
              placeholder="Digite seu usuário"
              required
              className={style.input}
              ref={user}
            />
          </p>
          <p>
            Senha:
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
              className={style.input}
              ref={password}
            />
          </p>

          <div className={style.btns}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
  }
    </section>
  )
}
export default Login 