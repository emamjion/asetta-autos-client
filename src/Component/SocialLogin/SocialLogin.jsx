
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from "../Providers/Authprovider";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {goggleSignIn} = useContext(AuthContex)

    const handleGoogleLogin = () => {
        let from = location.state?.from?.pathname || "/";
        goggleSignIn()
          .then((result) => {
            const loggedUser = result.user;

            const saveUser = {name : loggedUser.displayName, email : loggedUser.email, image : loggedUser.photoURL, role : 'user'}
              fetch('https://asetta-autos-production.up.railway.app/users',{
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