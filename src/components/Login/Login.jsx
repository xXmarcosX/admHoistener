import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/hoistener-logo1.png';
import '../../css/style.css';
import style from './login.module.css';

function Login(){

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem('user');
    const getPassword = sessionStorage.getItem('password');

    const handleSubmit = () => {

      if(user.current.value === "Admin" && password.current.value === "123456") {
  
        let token =
          Math.random().toString(16).substring(2)+
          Math.random().toString(16).substring(2);
  
        sessionStorage.setItem("user", "Admin");
        sessionStorage.setItem("password", token); 
        setIsLoggedIn(true);
      } else {
        alert("Usuário e senha inválidos");
      }
    };

    if (isLoggedIn) {
        navigate('/admcenter');
        return null; // Redirecionando, então não precisa renderizar nada aqui
    }

    return (
        <section className="login">
            {getUser && getPassword ? (
                <Lista/>
            ) : (
                <div className={style.loginForm}>
                    <div className={style.loginFormImg}>
                        <img src={Logo} alt="imagem" />
                    </div>
                    <form 
                        className={style.loginFormForm}
                        onSubmit={handleSubmit}
                    >
                        <h1>Login Administrador</h1>
                        <label>
                            Usuario:
                            <input
                                type="text"
                                id="user"
                                placeholder="Digite seu usuário"
                                required
                                className={style.input}
                                ref={user}
                            />
                        </label>
                        <label>
                            Sua senha:
                            <input
                                type="password"
                                id="password"
                                placeholder="Digite sua senha"
                                required
                                className={style.input}
                                ref={password}
                            />
                        </label>
                        <div className={style.btns}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
}

export default Login;
