

import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/Authprovider';

const SocialLogin = () => {
    const { goggleSignIn } = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handlegoogleLogin = () => {
        goggleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                const usersInfo = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <h1 className='text-center'>Continue with other accoutnt</h1>
            <div className="w-full text-center my-8">

                <button onClick={handlegoogleLogin} className="btn btn-square btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;