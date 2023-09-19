
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContex } from '../Component/Providers/Authprovider';
const useCards =()=>{
    const {user} = useContext(AuthContex)
    const { refetch, data : cards = []} = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cards?email=${user?.email}`)
            if (!res.ok) {
              throw new Error('Network response was not ok')
            }
            return res.json()
          },
      })
      return [cards, refetch]
}

export default useCards