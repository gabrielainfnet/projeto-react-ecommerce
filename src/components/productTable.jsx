import { useState } from 'react';

const ProductTable = ({ products, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantidade) => {
    setQuantities({
      ...quantities,
      [productId]: quantidade,
    });
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.nome}</td>
            <td>R$ {product.preco}</td>
            <td>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
            </td>
            <td>
              <button onClick={() => onAddToCart(product.id, quantities[product.id] || 1)}>
                Adicionar ao Carrinho</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
