import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Foter from './components/Foter/Foter';
import Home from './components/Main/Home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>

      </Routes>

    {/* <Foter></Foter> */}
    </div>
  );
}

export default App;
