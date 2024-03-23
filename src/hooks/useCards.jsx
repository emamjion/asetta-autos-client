
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContex } from '../Component/Providers/Authprovider';
import useAxiosSecure from './useAxiosSecure';
const useCards =()=>{
    const {user} = useContext(AuthContex)
    const [axiosSecure]  = useAxiosSecure()
    const { refetch, data : cards = [], isLoading} = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async () => {
                const res = await axiosSecure(`/cards?email=${user?.email}`)
                console.log(res.data);
                 return res.data
          },
        // queryFn: async () => {
        //     const res = await fetch(`https://asetta-autos-server-gules.vercel.app/cards?email=${user?.email}`)
        //     if (!res.ok) {
        //       throw new Error('Network response was not ok')
        //     }
        //     return res.json()
        //   },
      })
      return [cards, refetch, isLoading]
}

export default useCards