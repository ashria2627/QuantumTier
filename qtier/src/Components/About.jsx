import React, { useState ,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer';
import Nav from './Nav';
import "./App.css"
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faRecycle, faTruck} from '@fortawesome/free-solid-svg-icons';

const About = () => {
    useEffect(()=>{
      Aos.init();
        },[])
        const questions = [
          {
            id: 1,
            question: "Packaging",
            ans: "By prioritising sustainable packaging practices, we can minimise our carbon footprint and contribute to a healthier planet.",
            logo:(
              <FontAwesomeIcon icon={faBoxesPacking} />
            )
          },
          {
            id: 2,
            question: "Recycled Materials",
            ans: "Utilising FSC certified teak and incorporating recycled materials in our products underscores our commitment to sustainability and environmental responsibility.",
            logo:(
              <FontAwesomeIcon icon={faRecycle} />
            )
          },
          {
            id: 3,
            question: "Delivery",
         
            ans: "Using our white glove delivery service can contribute to sustainability in many ways such as; being efficient by carefully planning delivery routes to reduce carbon emissions and reduced returns by providing expert assembly and delivery services reduces the likelihood of returns therefore minimising waste and the need for additional transportation.",
            logo:(
              <FontAwesomeIcon icon={faTruck} />
            )
          },
        ];


        const imageData = [
          {
            id: 1,
            imageUrl: "https://i.pinimg.com/736x/bd/5d/ff/bd5dffb73d321ee09413378e4ae88f6a.jpg",
            title: "QUALITY",
            description: "Every piece of furniture is crafted with meticulous attention to detail and using only the finest materials to make sure we deliver unparalleled durability, comfort and style.",
          },
          {
            id: 2,
            imageUrl: "https://i.pinimg.com/736x/a6/40/07/a64007688362a823199b66264d98f550.jpg",
            title: "INSPIRE",
            description: "Our commitment is to inspire our audience by fostering an environment where memories are made, stories are shared and moments are cherished for years to come.",
          },
          {
            id: 3,
            imageUrl: "https://i.pinimg.com/736x/37/91/74/3791745aa91978720b4cb747447d5abf.jpg",
            title: "DESIGN",
            description:"We are dedicated to pushing the boundaries of design, constantly seeking inspiration from art, architecture and nature to create unique and captivating outdoor furniture pieces.",
          },
        ];    
        const imageData2 = [
          {
            id: 1,
            imageUrl: "https://i.pinimg.com/736x/d9/a2/5f/d9a25f17544343248c52529c23bf96fe.jpg",
            title: "TIPS TO LOOK AFTER YOUR OUTDOOR FURNITURE IN WINTER",
            description: "Tips to Look After Your Outdoor Furniture in Winter Luxury outdoor furniture is an investment. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden....",
            date: "2025-01-27",
            by: "Cieluxe Team",
          },
          {
            id: 2,
            imageUrl: "https://i.pinimg.com/736x/4f/c4/0d/4fc40d3a33d155f1f2d28bdbaf396764.jpg",
            title: "WHAT IS THE BEST MATERIAL FOR OUTDOOR FURNITURE IN THE SUN?",
            description: "The Best Material for Outdoor Furniture in the Sun When selecting outdoor furniture, especially for sun-exposed areas, it's essential to choose materials that can withstand prolonged exposure to UV rays....",
            date: "2025-01-25",
            by: "Cieluxe Creators",
          },
          {
            id: 3,
            imageUrl: "https://i.pinimg.com/736x/12/d9/e1/12d9e18b176d7d9b7fd37e46912f1d9e.jpg",
            title: "WHY CHOOSE GREY OUTDOOR FURNITURE?",
            description: "Grey outdoor furniture has become increasingly popular for its versatility, elegance, and ability to blend seamlessly with various design aesthetics. Whether you have a cosy balcony, a sprawling patio, or...",
            date: "2025-01-20",
            by: "Design Team",
          },
        ];
            
  return (
    <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
      <Nav />
      <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
  <ul>
    <li><Link to={'/'}>Home</Link ></li>
    <li><Link to={'/aboout'}>ABOUT</Link></li>
  </ul>
</div>
     <div className="w-full bg_home">
      <div className="w-full mx-auto text-center text-white py-24 md:py-52" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <h1 className='yeseva text-2xl md:text-5xl'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">UNPARALLED OUTDOOR LUXURY</h1>
      </div>
     </div>
     <div className="md:flex w-full block md:h-screen">
      <div className="w-full md:w-1/2 container mx-auto text-center px-10 py-12 md:py-24">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">OUR STORY</h2>
      <p className=' text-sm md:text-left md:text-xl text-center my-2 leading-loose tracking-wide'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Cieluxe is transforming the way you experience your living spaces. Founded on a passion for innovation and excellence in outdoor living, we have expanded our vision to encompass luxury, design-driven furniture, and homeware.  
<br /><br />
Our mission is to redefine the boundaries between indoor and outdoor living, creating a seamless lifestyle that unites both worlds. With meticulously crafted furniture designed to transition effortlessly from your garden to your living spaces, we bring harmony and continuity to your home. At Cieluxe, we empower your personal style to flow naturally, inspiring you to curate a cohesive and elevated environment throughout.</p>
      </div>
      <div className="w-full md:w-1/2">
      <img src="https://i.pinimg.com/736x/62/e1/f4/62e1f4602b6d623aee9c74dd3d256e50.jpg"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" className='w-full h-full object-center object-cover' alt="img" /></div>
     </div>
     <div className="md:flex w-full block md:h-screen">
     <div className="w-full md:w-1/2 md:mt-0 mt-4">
     <img src="https://i.pinimg.com/736x/c6/1b/7b/c61b7b5e707c94431f04cc1bd06b7c12.jpg"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" className='w-full h-full object-center object-cover' alt="img" /></div>
      <div className="w-full md:w-1/2 container mx-auto text-center px-10 my-6">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">OUR SHOWROOM</h2>
      <p className=' text-sm md:text-left md:text-lg text-center my-2 leading-loose tracking-wide'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Cieluxe is redefining the way you experience your living spaces, blending elegance, innovation, and timeless design to create environments that inspire. What began as a passion for crafting exceptional outdoor living solutions has evolved into a dedication to curating luxury furniture and homeware that seamlessly bridges the gap between indoor and outdoor living. At the heart of Cieluxe lies a commitment to quality, artistry, and reimagining how design can enhance everyday life.  
<br /><br />
Our mission is to eliminate the traditional boundaries that separate your indoor and outdoor worlds, offering thoughtfully designed furniture that transitions effortlessly between spaces. Whether it's the vibrant energy of your garden or the cozy sophistication of your living room, our collections are crafted to create a sense of harmony and connection. Every piece we design reflects a careful balance of form and function, allowing your personal style to flow naturally throughout your home, without compromise.  
<br /><br />
With a focus on timeless luxury and innovative craftsmanship, Cieluxe celebrates the art of living beautifully, both inside and out. We invite you to discover a world where your spaces are not simply places to live but an extension of your identity—a seamless reflection of your unique taste and elevated lifestyle.</p>
      </div>
      
     </div>
     <div class=" w-full  px-5 py-24 mx-auto" >
          <div class="flex flex-col md:text-left text-center w-full mb-12">
           <h1 class="text-xl md:text-5xl my-4 px-10 text-stone-700 yeseva uppercase"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Our values</h1>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto ">
       {imageData.map((img) => (
         <div key={img.id} >
           <div className="h-96 w-80 overflow-hidden shadow-2xl mx-auto"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
       <img
         alt={img.title}
         className=" w-full h-full zoom object-cover object-center"
         src={img.imageUrl}
       />
     </div>
             <div className="md:px-3  text-center my-6 text-lg text-stone-700 py-2">
               <h2 className='yeseva text-2xl md:text-4xl  text-center my-4'>{img.title}</h2>
               <p className=' text-sm md:text-lg text-center my-2 '>{img.description}</p>
             </div>
         </div>
       ))}
     </div>
     
     
       </div>
       <div className="md:flex w-full block md:h-screen">
      <div className="w-full md:w-1/2 container mx-auto text-center px-10 py-12 md:py-24">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">SUSTAINABILITY</h2>
      <p className=' text-sm md:text-left md:text-xl text-center my-2 leading-loose tracking-wide'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Our commitment to sustainability is ingrained in every aspect of our operations. Through thoughtful design and innovation, we prioritise durability and longevity, minimising waste and environmental impact without compromising on quality or style.</p>
      <div>
    {questions.map((question) => (
      <div
        key={question.id}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      > 
        <div className="collapse-title text-xl font-light text-left"><span className='mr-2'>{question.logo}</span>{question.question}</div>
        <hr  className='border-stone-500 border-b my-2'/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    ))}
  </div>
      </div>
      <div className="w-full md:w-1/2">
      <img src="https://i.pinimg.com/736x/78/d8/d3/78d8d30089b2a52bce0842e1c537dbc5.jpg"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" className='w-full h-full object-center object-cover' alt="img" /></div>
     </div>
     
       <section class="bg-stone-200 text-stone-700 " id='journal'>
       <div class=" w-full  px-5 py-24 mx-auto" >
          <div class="flex flex-col text-center w-full mb-12">
           <h1 class="text-xl md:text-5xl my-4 px-10 text-stone-700 yeseva uppercase"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Our JOurnal</h1>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto ">
       {imageData2.map((img) => (
         <div key={img.id}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" >
           <div className="h-96 w-80 overflow-hidden shadow-2xl mx-auto">
       <img
         alt={img.title}
         className=" w-full h-full zoom object-cover object-center"
         src={img.imageUrl}
       />
     </div>
             <div className="md:px-3  text-center my-6  py-2">
               <h2 className='yeseva text-xl md:text-2xl  text-center md:text-left my-4'>{img.title}</h2>
               <p className='text-stone-600 text-xs md:text-sm  text-center md:text-left my-4'>{img.date} . {img.by}</p>
               <p className=' text-sm md:text-base text-center md:text-left my-2 '>{img.description}</p>
             </div>
         </div>
       ))}
     </div>
     </div>
     </section>
      <Footer/>
    </div>
  );
};

export default About;