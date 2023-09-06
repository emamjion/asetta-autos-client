import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContex } from "../Providers/Authprovider";

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const {user} = useContext(AuthContex)
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const currentUser = users.find(fUser=>fUser?.email === user?.email)
    console.log(currentUser);

    return (
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10">
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold">user details</h2>
            <div className="border mt-6 p-5">
                <h2>email : {currentUser?.email}</h2>
                <h2>name : {currentUser?.name}</h2>
            </div>
        </div>
    );
};

export default UserDetails;