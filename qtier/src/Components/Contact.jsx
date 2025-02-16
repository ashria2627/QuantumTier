import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Nav from './Nav';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const CONTACT = () => {
  
    useEffect(()=>{
      Aos.init();
        },[])
  return (
    <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
    <Nav />
    <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
<ul>
  <li><Link to={'/'}>Home</Link ></li>
  <li><Link to={'/contact'}>Contact</Link></li>
</ul>
</div>

   <div className="md:flex w-full block md:h-screen">
   <div className="w-full md:w-1/2">
   <img src="https://nthdegree.co.uk/cdn/shop/files/Presentation.jpg?v=1711013225&width=900" className='w-full h-full object-center object-cover' alt="img" /></div>
    <div className="w-full md:w-1/2 container mx-auto text-center px-10 py-12 md:py-24">
    <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">CONTACT US</h2>
    <p className=' text-sm md:text-left  text-center my-2 leading-loose tracking-wide'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Whether you’re looking to place an order, need expert advice, or have any questions about our products or services, the Nth Degree customer service team is here to help. Our dedicated team is available Monday to Friday, 8 AM to 5 PM, to provide assistance and ensure you have the best possible experience with us.
<br /><br />
Please note that our phone lines are monitored only during our opening hours. However, our support team can always be reached via email, and we’ll do our best to respond promptly to your inquiries.
<br /><br />
At Nth Degree, we’re committed to providing exceptional service and making your journey with us as seamless as possible. Don’t hesitate to get in touch—we’re here to assist with all your outdoor furniture needs!</p>
    </div>
   
   </div>
 
   <div class=" w-full flex flex-wrap   px-5 py-24 mx-auto" >
        <div class=" mx-auto w-1/2 text-center">
        <FontAwesomeIcon icon={faEnvelope} className=' mb-4 text-4xl' />
        <p className='underline  'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
      <span className='text-4xl'>  EMAIL</span> <br />
        customerservice@nthdegree.co.uk
        </p>
        
            </div>
        <div class=" mx-auto w-1/2 text-center ">
        <FontAwesomeIcon icon={faPhone} className=' mb-4 text-4xl' />
        <p className='underline  'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
      <span className='text-4xl '>  PHONE</span> <br />
       12345-678-9010
        </p>
            </div>
        
   
   
     </div>
   
   
     <section class="bg-stone-200 text-stone-700 " id='journal'>
     <div class=" w-full  px-5 py-24 mx-auto" >
        <div class="flex flex-col text-center w-full mb-12">
         <h1 class="text-xl md:text-5xl my-4 px-10 text-stone-700 yeseva uppercase"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">GET IN TOUCH</h1>
         <form className='w-full my-4 text-lg mx-auto'>
          <input type="text" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" placeholder='Md Tayyab' className="my-5 p-2 border-0 border-b  border-b-stone-600 bg-transparent focus:outline-none focus:ring-0 w-4/5"/>
          <input type="email" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" placeholder='johndoe@gmail.com' className="my-5 p-2 border-0 border-b text-lg border-b-stone-600 bg-transparent focus:outline-none focus:ring-0 w-4/5"/>
         <select data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"className="select select-ghost border-0 border-b my-5 border-b-stone-600 bg-transparent focus:outline-none focus:ring-0 w-4/5">
  <option disabled selected>Type of inquiry</option>
  <option>Delivery</option>
  <option>Refund</option>
  <option>General</option>
</select>
<textarea  placeholder='message' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"className="h-36  border-0 border-b my-5 border-b-stone-600 bg-transparent focus:outline-none focus:ring-0 w-4/5"></textarea> <br />
 <button type="submit" className='px-10 py-2 text-center bg-stone-700 text-white'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Send</button>
         </form>
       </div>
        
   </div>
   </section>
    <Footer/>
  </div>

  );
};

export default CONTACT;
