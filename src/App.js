import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Appointment from "./pages/Appointment/Appointment";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";
import Users from "./pages/Dashboard/Users";
import Review from "./pages/Review/Review";
import ContactUs from "./pages/Contact Us/ContactUs";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";
import AvailableServices from "./pages/Home/AvailableServices";

// import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<AvailableServices />} />
        
        <Route path="about" element={<About />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<ContactUs />} />
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
            <Route index element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="reviews" element={<MyReview></MyReview>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
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
