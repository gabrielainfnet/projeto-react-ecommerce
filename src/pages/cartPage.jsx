import { useContext } from 'react';
import CartTable from '../components/cartTable';
import { ProductContext } from '../context/productContext';
import '../assets/cartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, checkout } = useContext(ProductContext);

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      <CartTable cartItems={cart} onRemoveFromCart={removeFromCart} />
      <div className="checkout-container">
        <button onClick={checkout} className="checkout-button">Fechar Pedido</button>
      </div>
    </div>
  );
};

export default CartPage;