import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const PaymentSuccess = () => {
const {tranId} = useParams();

  useEffect(() => {
    Swal.fire({
      title: `Your payment Successful 
      Your Transaction ID: ${tranId}`,
      
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }, []); // The empty dependency array means this effect will run once after the component is mounted

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default PaymentSuccess;


