import { useEffect, useState } from "react";

const useAllUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('https://asetta-autos-production.up.railway.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return [users];
};

export default useAllUser;