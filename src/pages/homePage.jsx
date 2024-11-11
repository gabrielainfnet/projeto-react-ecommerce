import { Link } from 'react-router-dom';
import '../assets/stylesGlobal.css';

function HomePage() {
    return (
        <div className="container home-page">
            <h1>Bem vindo!</h1>
            <p></p>

            <div className="homepage-links">
                <Link to="/products">Buscar Produtos</Link>
                <br />
                <Link to="/cart">Ir ao Carrinho</Link>
                <br />
                <Link to="/register">Criar uma Conta</Link>
            </div>
        </div>
    );
}

export default HomePage;
