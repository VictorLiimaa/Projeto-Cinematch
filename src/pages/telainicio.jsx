
import './styles.css';
import '../../global.css';
import Logo from '../assets/cinemacth3-cropped.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './telalogin';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={
        <div className="tela-inicio">
          <img src={Logo} alt="logo" className="logo" />
          <div className='btn-login'>
            <Link to="/login">
              <button className='btn' type='button'>Login</button>
            </Link>
            <h1 className='cadastro'>Não tem uma conta?<Link to="./telalogin.jsx" className='cadastre-se'> Cadastre-se</Link></h1>
          </div>
        </div>
      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
  );
}

export default App;

