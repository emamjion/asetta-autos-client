import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import { FaGoogle } from "react-icons/fa";
import app from "../firebase/firebase.config";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../Providers/Authprovider";
import Swal from "sweetalert2";
const auth = getAuth(app)
const SocialLogin = () => {
    // const googleProvider = new GoogleAuthProvider();

    // const handleGoogleSignIn = () => {
    //     console.log('clidked');
    //     let navigate = useNavigate();
    // let location = useLocation();
    //     let from = location.state?.from?.pathname || "/";
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             navigate(from, { replace: true });
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Your login is succesful!',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //         })

    //         .catch(error => {
    //             // console.log('error', error.message);
    //         })
    // }
    const navigate = useNavigate()
    const location = useLocation();
    const {goggleSignIn} = useContext(AuthContex)

    const handleGoogleLogin = () => {
        let from = location.state?.from?.pathname || "/";
        goggleSignIn()
          .then((result) => {
            const loggedUser = result.user;
    
            const saveUser = {name : loggedUser.displayName, email : loggedUser.email, image : loggedUser.photoURL, role : 'user', admin_request : 'no',
            dealer_request : 'no'}
              fetch('http://localhost:5000/users',{
                method : "POST",
                headers : {
                  'content-type' : 'application/json'
                },
                body : JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then((data)=>{
                    console.log('data', data);
                    navigate(from, { replace: true });
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your login is succesful!',
                      showConfirmButton: false,
                      timer: 1500
                    })
              })
    
    
            })
            .catch((err) => {
              console.log(err);
            }); 
      };
    return (
        <div className="text-center">
            <span onClick={handleGoogleLogin}><Button  button={'Continue with Google'}></Button></span>
        </div>
    );
};

export default SocialLogin;