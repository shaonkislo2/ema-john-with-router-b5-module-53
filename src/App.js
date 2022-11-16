import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>     
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>        
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>   

        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment/>
          </RequireAuth>
        }></Route>       
        <Route path='/about' element={<About/>}></Route>       
        <Route path='/login' element={<Login/>}></Route>       
        <Route path='/signup' element={<SignUp/>}></Route>       
      </Routes>
      
    </div>
  );
}

export default App;
