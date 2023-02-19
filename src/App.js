import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Intro from "./pages/About/Intro";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Appointment from "./pages/Appointment/Appointment";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import Users from "./pages/Dashboard/Users";

import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";
import AvailableServices from "./pages/Home/AvailableServices";
import Vision from "./pages/About/Vision";
import Mission from "./pages/About/Mission";
import Bod from "./pages/About/Bod";
import Director2 from "./pages/About/Director2";
import Director1 from "./pages/About/Director1";
import Director from "./pages/About/Director";
import Director1Details from "./pages/About/Director1Details";
import Director2Details from "./pages/About/Director2Details";
import Carousel from "./pages/About/Carousel";
import DoctorBtn from "./pages/Home/DoctorBtn";
import Medicines from "./pages/Home/Medicines";
import MedicineRow from "./pages/Home/MedicineRow";
import MedicineDetail from "./pages/Home/MedicineDetail";
import Faq from "./pages/Home/Faq";

import RequireAdmin from "./pages/Login/RequireAdmin";
import Ourservices from "./pages/Home/Ourservices";
import Diagnostics from "./pages/Home/Diagnostics";
import Drugs from "./pages/Home/Drugs";
import Paramedics from "./pages/Home/Paramedics";
import Hospitals from "./pages/Home/Hospitals";
import Contact from "./pages/Home/Contact";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<AvailableServices />} />
        
        <Route path="about" element={<About />} />
        <Route path="intro" element={<Intro />} />
        <Route path="vision" element={<Vision />} />
        <Route path="mission" element={<Mission />} />
        <Route path="bod" element={<Bod />} />
        <Route path="director" element={<Director />} />
        <Route path="director1" element={<Director1 />} />
        <Route path="director2" element={<Director2 />} />
        <Route path="director1details" element={<Director1Details/>} />
        <Route path="director2details" element={<Director2Details />} />
        <Route path="carousel" element={<Carousel />} />
       
       <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ourservices" element={<Ourservices />} />
        <Route path="drugs" element={<Drugs />} />
        <Route path="diagnostics" element={<Diagnostics />} />
        <Route path="paramedics" element={<Paramedics/>} />
        <Route path="hospitals" element={<Hospitals />} />
        <Route path="doctorbtn" element={<DoctorBtn />} />
        <Route path="mediciens" element={<Medicines />} />
        <Route path="medicienRow" element={<MedicineRow />} />
        <Route path="medicien/:medicienId" element={<MedicineDetail />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            
            
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addDoctor" element={<AddDoctor></AddDoctor>}></Route>
            <Route path="manageDoctor" element={<ManageDoctors></ManageDoctors>}></Route>
          </Route>
       
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
