import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

  const {id} = useParams()
  console.log(id);
  const {user} = useContext(AuthContex)
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
      fetch('https://asetta-autos-production.up.railway.app/cards')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [cards])

  

  const myCard = cards.find(card=>card?._id === id)

  console.log(myCard);

  const subTotal = myCard?.price * myCard?.items
  


  return (
    <div>
<div>
<h1>{subTotal}</h1>
<h1>{cards._id}</h1>

<h1 className='btn btn-accent'>Pay</h1>
</div>




<div>

</div>
    </div>

    
  );
};

export default CheckOut;