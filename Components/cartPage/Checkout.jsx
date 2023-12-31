import React, {  useState } from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
 import logo from '../../public/imgs/heroImg.png'
const Checkout = () => {
  const [discount,setDescount] = useState(0);
  const iteams = useSelector(state=>state.cart);
  const [disable,setDisable] = useState(iteams.length == 0);

    const Prices = iteams.map((iteam)=>{return (iteam.price*iteam.quantity)});
    let finalPrice = 0;
    for(let i =0;i<Prices.length;i++)
    finalPrice += Prices[i];
    const onToken = (token)=>{
      console.log(token);
    }


  return (
    <main className='w-64 p-3  bg-white
     rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-3'>
        <div className='flex flex-col justify-center items-center gap-2 mt-2 pb-3'>
            <h3 className='text-center text-lg font-semibold'>Bill</h3>
            <p className='flex items-center gap-3 '>
              <span>Total Price</span>
              <span className='font-semibold text-blue-600'>
                ${finalPrice}
                </span></p>
            <p className='flex items-center gap-3 '>
              <span className='flex-grow'>discount</span>
              <span className='font-semibold text-blue-600'>${discount}</span></p>
            <p className='flex items-center gap-3  '>
              <span>final price</span>
            <span className='font-semibold text-blue-600'>${(finalPrice - discount)}</span></p>

            <StripeCheckout 
            name='Hassan pass'
            billingAddress
            shippingAddress
            description={`you total is  $${finalPrice}`}
            amount={finalPrice * 100}
            image='../../public/imgs/heroImg.png'
            token={onToken}
            stripeKey='
            pk_test_51Nm9S1B5ABLYssjaX2iACdXg8DV3fYtPmLxXFT502LH9d0shFFIjoUBsP6rSunhLydDzahBEdR3HTZSDuFkNB9Fb008RQ78WPA
            '
            >
           
            <button disabled ={disable}  className='px-3 py-1 mt-2 rounded-lg shadow-lg bg-blue-600 text-white 
            hover:cursor-pointer hover:opacity-90'>
              Chekout
            </button>

            </StripeCheckout>
        </div>
        
    </main>
  )
}

export default Checkout