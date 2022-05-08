import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Foter from './components/Foter/Foter';
import { Route, Routes } from 'react-router-dom';
import Login from './components/LoginFrom/Login';
import SignUp from './components/LoginFrom/SignUp';
import RequireAuth from './components/LoginFrom/RequireAuth';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AddProduct from './components/AddProduct/AddProduct';
import ManegProduct from './components/ManegProduct/ManegProduct';
import SocalLogin from './components/LoginFrom/SocalLogin';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={
          <Banner></Banner>
        }></Route>
        <Route path='/product/:productId' element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path='additem' element={<RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='maneg' element={<RequireAuth>
          <ManegProduct></ManegProduct>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Foter></Foter>
    </div>
  );
}

export default App;
