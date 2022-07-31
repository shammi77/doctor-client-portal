
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Appointment from './pages/Appointment/Appointment';


function App() {
  return (
    <div  className='max-w-7xl mx-auto px-12'>
      
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
