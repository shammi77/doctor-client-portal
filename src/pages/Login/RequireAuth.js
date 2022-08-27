import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // const [sendEmailVerification,sending,error] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    // if(!user.emailVerified){
    //     <div>
    //     <h3 className='text-primary'>Your Email is not verified !!!</h3>
    //     <h5 className='text-primary'>Please verify your email</h5>
    //     <button className="text-secondary"
    //     onclick={async()=>{
    //         await sendEmailVerification();
    //         alert('sent email');
    //     }}
    //     >Verify Email</button>
    //     </div>
    // }
    return children;
};

export default RequireAuth;