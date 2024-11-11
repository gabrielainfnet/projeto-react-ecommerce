import { useContext } from 'react';
import ProductTable from '../components/productTable';
import { ProductContext } from '../context/productContext';
import '../assets/productPage.css';

const ProductPage = () => {
  const { products, addToCart, loading } = useContext(ProductContext);

  const handleAddToCart = (produtoId, quantidade) => {
    addToCart(produtoId, quantidade);
    console.log('Adicionar produto ao carrinho:', produtoId, 'Quantidade:', quantidade);
  };

  return (
    <div className="product-page">
      <h1>Catálogo de Produtos</h1>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ProductTable
          products={products}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductPage;