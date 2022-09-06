import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    // j location theke ashce setake reke dibo & replace korbo
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
//   if (!user.emailVerified) {
//     return (
//       <div>
//         <h3 className="text-primary">Your email is not verified</h3>
//         <h5 className="text-primary">Please Verify Your Email</h5>
//         <button>Send Verification Email</button>
//       </div>
//     );
//   }

  return children;
};

export default RequireAuth;
