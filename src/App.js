import './App.css';
import ProductList from './components/ProductList';
import { CartProvider } from './Providers/cart';
import { CatalogueProvider } from './Providers/catalogue';

function App() {
  return (
    <div className="App">
        <CatalogueProvider>
            <CartProvider>
              <h2>Catálogo:</h2>
              <ProductList type="catalogue" />
              <h2>Carrinho:</h2>
              <ProductList type="cart" />
            </CartProvider>
        </CatalogueProvider>
    </div>
  );
}

export default App;
