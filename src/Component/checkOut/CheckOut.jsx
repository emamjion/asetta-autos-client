import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Providers/Authprovider';

const CheckOut = () => {

  const {user} = useContext(AuthContex)
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
      fetch('https://asetta-autos-production.up.railway.app/cards')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [cards])

  

  const myCards = cards.filter(card=>card?.email === user?.email)
  // console.log(myCards);


  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
      const total = myCards.reduce((accumulator, product) => {
          return accumulator + (parseFloat(product?.price)* parseFloat(product?.items));
        }, 0);
        setTotalPrice(total);
      },[cards , totalPrice])



  return (
    <div>
<div>
<h1>{totalPrice}</h1>
<h1>{cards._id}</h1>

<h1 className='btn btn-accent'>Pay</h1>
</div>




<div>

</div>
    </div>

    
  );
};

export default CheckOut;