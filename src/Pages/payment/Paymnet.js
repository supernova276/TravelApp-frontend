import React from 'react'
import './Paymnet.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Paymnet = () => {

    const singleHotel=useSelector(state=>state.service.hotelById)
    const checkinDate=useSelector(state=>state.search.checkInDate)
    const checkoutDate=useSelector(state=>state.search.checkOutDate)
    const geusts=useSelector(state=>state.search.geusts)
    const {image,name,address,price,rating,state}=singleHotel
    const numberOfNights=checkinDate && checkoutDate ?(checkoutDate.getTime()-checkinDate.getTime())/(1000 * 24):0
    const totalPayabaleAmt=price*numberOfNights+150
    const navigate=useNavigate()
    
   console.log(process.env.REACT_APP_RAZORPAY_TEST_KEY)

    const loadScript = (source) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = source;
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

    const confirmBookingClick= async()=>{

        const response = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
          );
          if (!response) {
            console.log({ message: "Razorpay SDK failed to load" });
          }
      
          const options = {
            key: process.env.REACT_APP_RAZORPAY_TEST_KEY,
            amount: totalPayabaleAmt * 100,
            currency: "INR",
            name: "EzeeTrip",
            email: "akshita@gmail.com",
            contact: "9876543210",
            description: "Thank you for booking with us",
      
            handler: ({ payment_id }) => {
              navigate("/order-summary");
            },
            prefill: {
              name: "Prakash Sakari",
              email: "sakari@gmail.com",
              contact: "9876543210",
            },
            method: {
                upi: true // Enable UPI payments
            }
          };
      
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();

    }

  return (
    <div>

        <header className='heading'>
            <h1 className='heading-1'>
                <Link className='link' to='/'>
                    EzeeTrip
                </Link>
            </h1>
        </header>

        <main className='main d-flex justify-content-center'>
            <div className=' final-details-container d-flex flex-column gap-sm'>
                <h2>Trip Details</h2>
                <div className='d-flex flex-column gap-sm dates-and-guests'>
                    <h3>Your Trip</h3>
                    <div>
                        <p>Dates</p>
                        <span>
                       {checkinDate.toLocaleString("en-US",{ day:"numeric",month:"short"})} - {checkinDate.toLocaleString("en-US",{ day:"numeric",month:"short"})}
                        </span>
                    </div>
                    <div>
                        <p>Guests</p>
                        <span>{geusts} Geusts</span>
                    </div>
                </div>
                <div className='d-flex flex-column gap-sm align-items-center'>
                    <h3>Pay with</h3>
                    <div>Razorpay</div>
                </div>
                <button className='button btn-primary btn-reserve cursor btn-pay'onClick={confirmBookingClick}>Confirm Booking</button>
            </div>

            <div className='final-details d-flex flex-column gap-lg'>
                <div className='d-flex gap-sm'>
                    <img className='image' src={image} alt="hotel Image"/>
                    <div className='d-flex flex-column '>
                        <div className='d-flex flex-column align-items-center'>
                            <span>{name}</span>
                            <span>{address},{state}</span>
                        </div>
                        <div className='rating-container'>
                            <span className='rating d-flex flex-column align-items-center'>
                                <span className='material-symbols-outlined'>star</span>
                                <span>{rating}</span>
                            </span>
                        </div>
                    </div>
                    </div>
                    <div className='tag'>
                        your bookig is protected by <strong className='strong'>EzeeTrip</strong>
                    </div>
                    <div className='price-detail-container'>
                        <div className='price-distribution d-flex flex-column'>
                        <h3>Price Details</h3>
                        <div className='d-flex  justify-content-between final-price '>
                            <span className='span'>Rs {price} x {numberOfNights} nights</span>
                            <span className='span'>{totalPayabaleAmt}</span>
                        </div>

                        <div className='d-flex justify-content-between final-price'>
                            <span className='span'>Service Fee</span>
                            <span className='span'>Rs 150</span>
                        </div>

                        <div className='d-flex justify-content-between final-price'>
                            <span className='span'>Total</span>
                            <span className='span'>{totalPayabaleAmt+150}</span>
                        </div>
                    </div>
                    </div>
                
            </div>
        </main>
      
    </div>
  )
}

export default Paymnet
