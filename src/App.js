import logo from './logo.svg';
import './bootstrap.min.css'
import './tiny-slider.css'
import './App.css';

import Shop from './pages/Shop.';
import {Products}  from './components/products';
import ProductSingle from './pages/ProductSingle';


function App() {
  return (
    // <Shop products={Products}/>
    <ProductSingle product={Products[1]}/>
  );
}

export default App;
