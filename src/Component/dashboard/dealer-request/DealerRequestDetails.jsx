import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/Authprovider";
import Button from './../../Button/Button';

const DealerRequestDetails = () => {
    const {user} = useContext(AuthContex)
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    console.log(users);
    return (
        <div>
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold ">Dealer Request Details</h2>
            <div className="border w-3/5 mt-5 mx-auto p-10">
                <h4 className="text-lg font-semibold">Name : {users?.displayName}</h4>
                <h4 className="text-lg font-semibold">Email : {users?.email}</h4>
                <h4 className="text-lg font-semibold">Status : <span className="text-red-600">Pending</span></h4>
                <h4 className="text-lg font-semibold">Address : </h4>
                <div className="my-4">
                <Button button={"cancel request"}></Button>
                </div>
            </div>
        </div>
    );
};

export default DealerRequestDetails;