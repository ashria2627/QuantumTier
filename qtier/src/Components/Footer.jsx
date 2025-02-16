import React, { useState ,useEffect } from 'react';
import logo from './logo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    useEffect(()=>{
        Aos.init();
          },[])
    const services = [
        { id: 1, title: "Returns and Exchanges" },
        { id: 2, title: "Privacy Policy" },
        { id: 3, title: "Terms and Conditions" },
        { id: 4, title: "Delivery" },
        { id: 5, title: "Exchanges & Returns" },
        { id: 6, title: "FAQs" },
        { id: 7, title: "Refund Policy" },
      ];
      const company =[
        { id: 1, title: "Contact Us" },
        { id: 2, title: "Our Story" },
        { id: 3, title: "Our Mission" },
        { id: 4, title: "Careers" },
        { id: 5, title: "Brochure" }
      ]
      const products = [
        { 
          id: 1, 
          title: "N1 Lux", 
          imageUrl: "https://i.pinimg.com/736x/61/66/8a/61668a9ff40e12b084fba4d4b012de39.jpg", 
          Link:"/collection/2"
       
        },
        { 
          id: 2, 
          title: "N2 Luxe",
          imageUrl: "https://i.pinimg.com/736x/41/22/e3/4122e3911070698adc2716932059ee13.jpg", 
         Link:"/collection/3"
        },
        { 
          id: 3, 
          title: "N3 Comfort", 
 Link:"/collection/4",
          imageUrl: "https://i.pinimg.com/736x/59/bb/4c/59bb4c1b47625717fcdda051e7f867b5.jpg", 
    
        },
        { 
          id: 4, 
          title: "N4 Chic",
          imageUrl: "https://i.pinimg.com/736x/40/88/39/408839a7e2b5b27ed31161202865b3b9.jpg", 
       Link:"/collection/5"
        },
      ];
    return (
      <div className='w-full mx-auto font-light josefin py-18 pt-24'>
        <div class="flex flex-col text-left px-7 w-full ">
      <h1 class="text-xl md:text-5xl  text-stone-700 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"><Link to={'/'}>@Cieluxe</Link></h1>
    </div>
 <div
        className=" block md:flex transition-transform duration-500 my-16 mx-auto px-2 container md:space-x-4"
       
      > 
        {products.map((product, ) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full h-72 md:w-1/2 mt-4 mx-auto lg:w-1/4 p-2 rounded-md relative" // Adjust width for responsive behavior
          >
            <Link to={product.Link} className="block">
              <img
                src={product.imageUrl}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="200"
                alt={product.title}
                className="w-full h-72 absolute object-center  inset-0 object-cover"
              /><div class="px-4 py-1  relative z-10 w-1/2   bg-white ">
              <h2 class=" text-xs  font-light text-zinc-500 "data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="300">Available now</h2>
            </div>    </Link>
          </div>
        ))}
        
      </div>
       <div className="bg_footer mx-auto w-full"> <div className="w-full mx-auto text-white  md:pt-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
           <div class="container mx-auto flex px-5 py-24 w-full md:flex-row flex-col items-center" >
          <div class="mx-auto w-2/3 flex flex-col  items-center text-center">
            <h1 class="title-font text-2xl mb-4 font-bold yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">SAVE BY SIGNING UP
            </h1>
            <p class="mb-8 leading-relaxed text-sm tracking-widest"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">GET 10% OFF IN FIRST 10 PURCHASE!</p>
           
          </div>
         
        </div>
           </div></div>
         <div className="w-full mx-auto  py-18 pt-24  bg_foot">
            <div class="container  px-8 mx-auto">
  <div class="grid lg:grid-cols-3 grid-cols-1  gap-4  justify-center  mx-auto  order-first text-center md:text-left">
  <div class=" w-full mt-10 mx-auto yeseva">
      <h2 class="w-full md:text-left text-center tracking-widest text-2xl font-light mb-3 capitalize"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">EXCLUSIVE ACCESS TO PRODUCTS, OFFERS AND INSPIRATION</h2>
    
        <div class="relative w-full mx-auto justify-center">
          <input type="email" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"placeholder='Email' id="footer-field" name="footer-field" class="w-full bg-opacity-50 rounded border-b-2 bg-transparent border-b-black focus:outline-none josefin placeholder:text-stone-500 py-1 px-3 mt-4 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="mt-4  py-2 px-6 focus:outline-none w-full text-center bg-black hover:bg-transparent transition-colors text-white"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Send</button>
      
     
    </div>
    <div class=" w-full md:pl-6 mt-6 md:mt-0">
      <h2 class="title-font font-bold tracking-widest text-2xl mb-6 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">COMPANY</h2>
      <nav class="list-none mb-10 space-y-3 ">
      {company.map((topic) => (
          <p key={topic.id}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
            <Link
              to={`/topic/${topic.id}`}
              className=" hover:underline mb-3"
            >
              {topic.title}
            </Link>
          </p>
        ))}
   
      </nav>
    </div>
    <div class=" w-full px-6">
      <h2 class="title-font font-bold tracking-widest text-2xl mb-6 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">SERVICES & POLICIES</h2>
      <nav class="list-none mb-10  space-y-3">
      {services.map((topic) => (
          <p key={topic.id}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
            <Link
              to={`/topic/${topic.id}`}
              className=" hover:underline mb-3"
            >
              {topic.title}
            </Link>
          </p>
        ))}
   
      </nav>
    </div>
   
  
  </div>
</div>
<div>
  <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <Link to={'/'}class="flex title-font font-medium items-center md:justify-start justify-center">
     <img src={logo} alt="logo"  className='w-24 h-24'/>
      <span class="ml-3 text-3xl yeseva">Cieluxe </span>
    </Link>
    <p class="text-sm ml-6 mt-2 yeseva">© 2025 Cieluxe  —
      <a href="https://mdtayyab1.netlify.app" rel="noopener noreferrer" class="ml-1 josefin" target="_blank">@tayyabmd</a>
    </p>
  
  </div>
</div>

        </div>
      </div>
    );
};

export default Footer;