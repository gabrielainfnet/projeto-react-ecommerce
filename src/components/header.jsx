import { Link } from 'react-router-dom';
import '../assets/stylesGlobal.css';

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">Página Inicial</Link> |
        <Link to="/products">Produtos</Link> |
        <Link to="/cart">Carrinho</Link> |
        <Link to="/register">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Header;
