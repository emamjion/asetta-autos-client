import { useEffect, useState } from "react";

const useAllUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return [users];
};

export default useAllUser;