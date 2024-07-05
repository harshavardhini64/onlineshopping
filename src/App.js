import{ Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import OrderConfirmation from './pages/OrderConfirmation';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import SignUp from './pages/SignUp';

//arrowfunction
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/> 
      <Route path="/placeorder" element={<PlaceOrder/>}/>
      <Route path="/confirmorder" element={<OrderConfirmation/>}/>
    </Routes>
      
  );
};

export default App;