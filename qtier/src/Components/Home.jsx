import React, { useState ,useEffect } from 'react';
import "./App.css";
import me from './vid1.mp4'
import Nav from "./Nav";
import Footer from "./Footer";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';




const Home = () => {
 

  useEffect(()=>{
    Aos.init();
      },[])
      const imageData = [
        {
          id: 1,
          imageUrl: "https://i.pinimg.com/736x/56/5e/16/565e169586c9a531fab4294e64bbc0aa.jpg", // Example image URL for first item
          title: "Shop living room  furnitures",
          link: "/collection/2",
        },
        {
          id: 2,
          imageUrl: "https://i.pinimg.com/736x/88/bd/09/88bd0952c2e052ceeedab6f6a2a13b85.jpg",
          title: "Shop outdoor sofa set",
          link: "/collection/4",
        },
        {
          id: 3,
          imageUrl: "https://i.pinimg.com/736x/00/75/df/0075dfdcbad856c8476be88f2b89bf9c.jpg",
          title: "Shop outdoor lounge",
          link: "/collection/8",
        },
      ];
      const products = [
        {
          id: 1,
          title: "Lounge Chair",
          description: "A comfortable lounge chair for your living room.",
          imageUrl: "https://i.pinimg.com/736x/d9/a2/5f/d9a25f17544343248c52529c23bf96fe.jpg",
          category: "Lounge"
        },
        {
          id: 2,
          title: "Dining Table",
          description: "A modern dining table to fit any dining room.",
          imageUrl: "https://i.pinimg.com/736x/12/d9/e1/12d9e18b176d7d9b7fd37e46912f1d9e.jpg",
          category: "Dine"
        },
        {
          id: 3,
          title: "Bed Frame",
          description: "A stylish and durable bed frame for a restful sleep.",
          imageUrl: "https://i.pinimg.com/736x/4f/c4/0d/4fc40d3a33d155f1f2d28bdbaf396764.jpg",
          category: "Bed"
        },
      ];
  
  return (
    <div className="w-full mx-auto font-light josefin  overflow-x-hidden text-stone-700" >
 

     <div className="bg_home w-full">
     <Nav/>
     <div className="w-full mx-auto text-white  md:pt-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
     <div class="container mx-auto flex px-5 py-24 w-full md:flex-row flex-col items-center" >
    <div class="lg:flex-grow md:w-2/3  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font text-2xl md:text-6xl mb-4 font-bold yeseva"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">LUXURY  FURNITURES
      </h1>
      <p class="mb-8 leading-relaxed text-sm md:text-lg"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Furniture design blends functionality, aesthetics, and innovation, creating pieces that enhance both comfort and space. It involves experimenting with materials, ergonomics, and style to produce functional yet artistic elements that improve daily life and reflect modern culture.</p>
      <div class="flex justify-center">
<div className="block md:flex">
<Link to={'/collection/1'}>
<button class="inline-flex text-white bg-stone-800  py-2 px-3 md:px-10 focus:outline-none hover:bg-opacity-25 text-sm md:text-lg"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">VIEW ALL COLLECTIONS</button>
  </Link> 
 <a href='#discover'>
 <button class="ml-4 inline-flex text-white bg-stone-400 border-0 py-2 px-3 md:px-10 focus:outline-none hover:bg-opacity-25 mt-4 md:mt-0  text-sm md:text-lg"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">DISCOVER </button>
  </a>
</div>
     </div>
    </div>
    <div class="md:w-1/3 hidden md:block w-5/6">
      <p class="object-cover object-center rounded"  ></p>
    </div>
  </div>
     </div>
     </div>
     <div class=" w-full  px-5 py-24 mx-auto" id='discover'>
     <div class="flex flex-col text-center w-full mb-12">
      <h1 class="text-xl md:text-5xl my-4 text-stone-700 yeseva"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">DISCOVER</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-sm md:text-xl "  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">OUR LUXURY OUTDOOR FURNITURE COLLECTIONS</p>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto ">
  {imageData.map((img) => (
    <div key={img.id}  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
      <Link to={img.link}>
      <div className="h-96 w-80 overflow-hidden shadow-2xl mx-auto">
  <img
    alt={img.title}
    className=" w-full h-full zoom object-cover object-center"
    src={img.imageUrl}
  />
</div>
        <div className="md:px-12 md:text-left text-center my-6 hover:underline text-lg text-stone-700 py-2">
          {img.title}
        </div>
      </Link>
    </div>
  ))}
</div>


  </div>
  <Carousel/>
  <div class="container px-5 py-24 mx-auto flex flex-wrap text-white">
    <div class="lg:w-5/6 mx-auto">
      <div class="flex flex-wrap w-full bg-black bg-opacity-90  py-32 px-5 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src="https://i.pinimg.com/736x/70/f5/4d/70f54d7c6442f672ee1027aee4828f81.jpg"/>
        <div class="text-center  relative z-10 w-full">
          <h2 class="text-3xl text-white  title-font mb-2 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">DINE </h2>
          
          <p class="leading-relaxed"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Enhance your dining experience with our luxury tables and chairs</p>
          <Link to={'/collection/7'}><div class="px-4 py-1  mx-auto z-10 w-1/2  my-4 bg-white bg-opacity-75 font-bold">
              <h2 class=" text-sm hover:underline  text-zinc-600 "data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"> VIEW OUTDOOR DINING</h2>
            </div> </Link>
          
        </div>
      </div>
      <div class=" md:flex md:flex-wrap -mx-2">
        <div class="px-2 mx-autow-full mt-3 md:mt-0 md:w-1/2">
          <div class="flex flex-wrap w-full bg-black bg-opacity-90  sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block  absolute inset-0" src="https://i.pinimg.com/736x/61/66/8a/61668a9ff40e12b084fba4d4b012de39.jpg"/>
            <div class="text-center  relative z-10 w-full">
          <h2 class="text-3xl text-white  title-font mb-2 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">SOFA </h2>
          
          <p class="leading-relaxed"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Enhance your  sleeping experience with our luxury beds and pillows</p>
         <Link to={'/collection/4'}><div class="px-4 py-1  mx-auto z-10 w-11/12  my-4 bg-white bg-opacity-75 font-bold ">
              <h2 class=" text-xs md:text-sm  hover:underline  text-zinc-600 "data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"> VIEW  SOFT SOFAS</h2>
            </div> </Link> 
          
        </div>
          </div>
        </div>
        <div class="px-2 mx-autow-full mt-3 md:mt-0 md:w-1/2">
          <div class="flex flex-wrap w-full bg-black bg-opacity-90 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-90 absolute inset-0" src="https://i.pinimg.com/736x/a8/cb/d9/a8cbd9bdb8d91a35238e6f3d65e155fe.jpg"/>
            <div class="text-center  relative z-10 w-full">
          <h2 class="text-3xl text-white  title-font mb-2 yeseva"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">LOUNGE </h2>
          
          <p class="leading-relaxed"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Unwind in style with our premium range of outdoor lounge chairs</p>
          <Link to={'/collection/8'}><div class="px-4 py-1  mx-auto z-10 w-11/12  my-4 bg-white bg-opacity-75 font-bold">
              <h2 class=" text-xs  md:text-sm hover:underline text-zinc-600 "data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"> VIEW OUTDOOR LOUNGE CHAIRS</h2>
            </div> </Link>
          
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-stone-400 text-black body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class=" md:w-1/2 w-11/12 mb-10 md:mb-0">
         <video className='w-full md:h-96 shadow-2xl  rounded-md object-cover object-center  ' loop muted autoPlay  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
          <source src={me} type="video/mp4" />
            </video>
    </div>
    <div class="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col  items-center text-center">
      <h1 class=" text-lg text-stone-700 text-center mb-4 f yeseva"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Cieluxe
      </h1>
      <h1 class=" text-4xl text-stone-700 text-center mb-4 font-bold yeseva"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">REFINED OUTDOOR LUXURY
      </h1>
      <p class="my-8 leading-relaxed text-xl"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Blurring the lines between indoor and outdoor living spaces has become more than a trend; it's now a widely embraced lifestyle.
<br /><br />
Gone are the days of rigid boundaries separating the two realms - instead, a new era of design has emerged. One that seamlessly integrates the comforts of indoor living with the beauty of the great outdoors. There's something undeniably magical about spending time outdoors - the fresh air, the sunshine, the soothing sounds of nature.
<br /><br />
At Nth Degree, our design-led furniture collections provide endless oppportunities for customisation and creativity.</p>
      <div class="flex justify-center">
   <Link to={'/about'}>     <button class="inline-flex text-white bg-stone-800 px-10 py-1 uppercase hover:underline"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">our story</button></Link>
       <Link to={'/contact'}> <button class="ml-4 inline-flex text-gray-700 bg-stone-300 px-10 py-1 uppercase hover:underline"  data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">contact us</button>
       </Link>   </div>
    </div>
  </div>
</section>
     <Footer/>
      

      
    </div>
  );
};

export default Home;
