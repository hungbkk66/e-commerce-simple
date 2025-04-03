import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header, { } from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import AddProduct from './Component/AddProduct'
import UpdateProduct from './Component/UpdateProduct'
import Protected from './Component/Protected'
import ProductList from './Component/ProductList'
import SearchProduct from './Component/SearchProduct';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Protected Cmp={AddProduct} />} />
            <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
            <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
            <Route path="/" element={<Protected Cmp={ProductList} />} />
          </Routes>

        </BrowserRouter>
      </div>

    </>


  );
}

export default App;
