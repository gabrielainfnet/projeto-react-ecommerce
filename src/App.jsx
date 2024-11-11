import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/productContext';
import Layout from './components/layout';
import HomePage from './pages/homepage';
import ProductPage from './pages/productPage';
import CartPage from './pages/cartPage';
import Register from './pages/registerPage';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </ProductProvider >
  );
}

export default App;
