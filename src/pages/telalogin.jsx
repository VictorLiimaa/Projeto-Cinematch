
import "./styles.css";
import Logo from "../assets/cinemacth3-cropped.svg";
import { Link } from 'react-router-dom';

function Telalogin() {
  return (
    <div className="container">
      <div className="containerLogin">
        <img src={Logo} alt="logo" className="logoTela2" />/
        <div className="login">
          <h1 className="titulo">Faca login na sua conta</h1>
          <h2 className="subtitulo">E-mail</h2>
          <input
            type="text"
            placeholder="Digite o seu email"
            className="inputLogin"
          />
          <h2 className="subtitulo">Senha</h2>
          <input
            type="password"
            placeholder="Digite a sua senha"
            className="inputLogin"
          />
          <button className="btnLogin" type="button">
            Login
          </button>
          <Link to="/" className="esqueceuSenha">Esqueceu a senha?</Link>
          <Link to="/" className="esqueceuSenha">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Telalogin;
