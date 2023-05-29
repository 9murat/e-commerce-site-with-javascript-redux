
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './eCommerceApp/components/dashboard/Home';
import Navbar from './eCommerceApp/components/navigator/Navbar';
import Cart from './eCommerceApp/components/Page/Cart';
import ProductDetail from './eCommerceApp/components/Page/ProductDetail';
import ConfirmCart from './eCommerceApp/localFolder/ConfirmCart';
import FavoritesProduct from './eCommerceApp/components/Page/FavoritesProduct';

function App() {
  return (
    <div className="App ">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/confirm' element={<ConfirmCart />} />
        <Route path='/favorites' element={<FavoritesProduct />} />
      </Routes>

    </div>
  );
}

export default App;


