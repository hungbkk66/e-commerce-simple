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


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>


          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Protected Cmp={AddProduct} />} />
            <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
          </Routes>

        </BrowserRouter>
      </div>

    </>


  );
}

export default App;
