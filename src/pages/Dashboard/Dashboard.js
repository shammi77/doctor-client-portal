import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        

        <Outlet></Outlet>

      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>

        <ul className="menu p-4 rounded overflow-y-auto w-48 bg-teal-100 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          { <li>
            <Link to="/dashboard">My Appointments</Link>
          </li> }
          
         
          {admin && 
           <>
            <li>
              <Link to="/dashboard/users">All Users</Link>
              <Link to="/dashboard/addDoctor">Add a Doctor</Link>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
           </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
