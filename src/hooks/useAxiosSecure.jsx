import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../Component/Providers/Authprovider';
import axios from 'axios';
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContex)
    const navigate = useNavigate(); 
    const axiosSecure = axios.create({
      baseURL: 'https://asetta-autos-server-gules.vercel.app',
    });

    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('car-access-token');
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });

      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            navigate('/login');
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;