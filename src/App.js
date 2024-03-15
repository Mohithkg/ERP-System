
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import OrderManagement from './components/OrderMangement';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/product" element = {<ProductManagement/>}/>
        <Route path = "/orders" element = {<OrderManagement/>}/>
        <Route path= '/edit' element = {<EditProduct/>}/>
        {/* <Route path = "/product-details/" element = {<ProductDetails/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
