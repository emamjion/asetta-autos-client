import { useContext } from "react";
import { AuthContex } from "../Providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const GoogleLogin = () => {
    const {goggleSignIn, user}  = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleLogin =()=>{
        console.log("clicked");
        let from = location.state?.from?.pathname || "/";
        goggleSignIn()
      .then((result) => {
        const loggedUser = result.user;


        const saveUser = {
            name: loggedUser.name,
            email: loggedUser.email,
            image : loggedUser.photoURL,
            role: "user",
            admin_request : 'no',
            dealer_request : 'no'
          };
          fetch('https://asetta-autos-server-gules.vercel.app/users',{
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
          })
          .catch((err) => {
            console.log(err);
            toast(err.message)
          }); 


        })
        .catch((err) => {
          console.log(err);
        }); 

    }
    return (
        <div className="text-center">
            <button onClick={handleGoogleLogin} className="border px-4 p-3 rounded-lg hover:bg-slate-700 hover:text-white bg-slate-400">Google login</button>
        </div>
    );
};

export default GoogleLogin;