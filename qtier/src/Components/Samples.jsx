import React, { useState,useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Samples = () => {
  
  useEffect(()=>{
    Aos.init();
      },[])
  const products = [
    {  
      collection: "N2 Collection",
      summary: "A warm, espresso-colored fabric that enhances any outdoor setup.",
      items: [
        {
          id: "N2-1",
          title: "Espresso Brown | Fabric Sample, Rich Espresso Weave",
         
          description:
            "This fabric offers a luxurious deep brown tone with weatherproof properties, perfect for adding warmth and sophistication to outdoor furniture.",
          image: "https://nthdegree.co.uk/cdn/shop/files/SAGETWILLMATERIALSWATCH.jpg?v=1710490849&width=480",
        },
      ],
    },
    {
      collection: "N3 Collection",
      
      summary: "A durable, elegant outdoor fabric with UV, stain, and water resistance.",
      items: [
        {
          id: "N3-1",
          title: "Dark Teak | Fabric Sample, Coal Textured Weave",
          description:
            "The Coal Texture Weave is expertly woven from the finest acrylic fabric, tailored for outdoor use. It resists stains, water, mildew, UV rays, and chlorinated water, ensuring longevity and elegance.",
          image: "https://nthdegree.co.uk/cdn/shop/files/shadow-canvas.jpg?v=1710493903&width=480",
        },
        {
          id: "N3-2",
          title: "Sandstone Beige | Fabric Sample, Textured Sand Weave",
          summary: "A neutral, sandy fabric designed for versatile outdoor use.",
          description:
            "This textured weave mimics natural sand tones while offering superior protection against UV rays, stains, and water damage.",
          image: "https://nthdegree.co.uk/cdn/shop/files/PEARLHERRINGBONEMATERIALSWATCH.jpg?v=1710490950&width=480",
        },
      ],
    },
    {
      collection: "N4 Collection",
      
      summary: "A light and refined fabric designed for versatile outdoor use.",
      items: [
        {
          id: "N4-1",
          title: "Light Oak | Fabric Sample, Ash Weave",
          description:
            "Ash Weave balances natural aesthetics with outdoor durability. It resists fading, mildew, and stains, while offering a soft yet robust texture suitable for all weather conditions.",
          image: "https://nthdegree.co.uk/cdn/shop/files/CIRRUSTEXTUREDWEAVEMATERIALSWATCH.jpg?v=1710490888&width=480",
        },
        {
          id: "N4-2",
          title: "Walnut Brown | Fabric Sample, Walnut Texture",
          summary: "Luxurious walnut-toned fabric for stylish outdoor environments.",
          description:
            "This rich-textured fabric is perfect for adding warmth to outdoor spaces. Designed to withstand UV rays, stains, and water, it ensures lasting beauty and performance.",
          image: "https://nthdegree.co.uk/cdn/shop/files/NORDICWEAVEMATERIALSWATCH_d1132b15-0e12-4171-a6a8-d262141078fc.jpg?v=1710492213&width=480",
        },
      ],
    },
    {
      collection: "Sofa Cover Collection",
      
      summary: "Bold and sophisticated fabric ideal for contemporary outdoor settings.",
      items: [
        {
          id: "S4-1",
          title: "Charcoal Black | Fabric Sample, Obsidian Weave",
          description:
            "Obsidian Weave combines bold aesthetics with durability, resisting common outdoor challenges like UV exposure, mildew, and water, while maintaining a sleek and stylish appearance.",
          image: "https://nthdegree.co.uk/cdn/shop/files/CleanShot2024-03-15at08.46.03.png?v=1710492398&width=480",
        },
      ],
    },
    {
      collection: "Pietra Collection",
      
      summary: "Subtle stone-inspired fabric with a soft and durable finish.",
      items: [
        {
          id: "P1-1",
          title: "Pietra Light Grey | Stone-Inspired Fabric Sample",
          description:
            "Designed to emulate natural stone textures, this fabric is fade-resistant, waterproof, and perfect for blending seamlessly into outdoor spaces.",
          image: "https://nthdegree.co.uk/cdn/shop/files/Porcelain_59c2a7bd-4b4a-486f-8da8-74703c1649f0.jpg?v=1719997434&width=480",
        },
        {
          id: "P1-2",
          title: "Pietra Dark Grey | Fabric Sample, Slate Finish",
          summary: "A modern, slate-inspired fabric ideal for outdoor elegance.",
          description:
            "The Slate Finish fabric offers durability and sophistication, resisting weather elements and maintaining its bold look over time.",
          image: "https://nthdegree.co.uk/cdn/shop/files/NATURALWEAVEMATERIALSWATCH_44285667-ef1d-4f26-8d2b-e315a327ace0.jpg?v=1710764137&width=480",
        },
        {
          id: "P1-3",
          title: "Pietra Beige | Natural Stone-Like Fabric Sample",
          description:
            "This beige-toned fabric blends natural aesthetics with robust protection against UV rays, stains, and mildew, ensuring long-lasting elegance.",
          image: "https://nthdegree.co.uk/cdn/shop/files/shadow-canvas.jpg?v=1710493903&width=480",
        },
        {
          id: "P1-4",
          title: "Pietra Ivory | Soft, Stone-Inspired Fabric Sample",
          summary: "Bright and natural ivory-toned fabric for elegant outdoor designs.",
          description:
            "The Pietra Ivory fabric combines a soft texture with high durability, resisting UV rays, water, and mildew for a timeless, outdoor-friendly look.",
          image: "https://nthdegree.co.uk/cdn/shop/files/SAGETWILLMATERIALSWATCH.jpg?v=1710490849&width=480",
        },
      ],
    },
    {
      collection: "Furniture Covers",
      
      summary: "Earthy, natural beige fabric offering both style and resilience.",
      items: [
        {
          id: "C1-1",
          title: "Standard Furniture Cover | Waterproof and Durable",
          summary: "Protective covers for your furniture, designed for all seasons.",
          description:
            "Our waterproof furniture covers provide excellent protection against the elements. Durable and UV-resistant, they are perfect for maintaining your furniture's longevity.",
          image: "https://nthdegree.co.uk/cdn/shop/files/OATMEALTEXTUREDWEAVEMATERIALSWATCH.jpg?v=1711110605&width=480",
        },
        {
          id: "C1-2",
          title: "Premium Furniture Cover | Heavy-Duty Protection",
          summary: "Enhanced protection for larger or more delicate furniture.",
          description:
            "This premium cover features heavy-duty fabric with reinforced stitching, ensuring durability and all-weather protection for your outdoor furniture.",
          image: "https://nthdegree.co.uk/cdn/shop/files/DESERTCANVASMATERIALSWATCH_a00f96d7-fbe5-431a-b4bc-374ec6558fc8.jpg?v=1710490785&width=480",
        },
        {
          id: "C1-3",
          title: "Compact Furniture Cover | Lightweight and Waterproof",
          summary: "A lightweight, easy-to-store furniture cover offering complete weatherproofing.",
          description:
            "Designed for smaller furniture pieces, this cover provides excellent protection against rain and UV rays, ensuring durability in a lightweight format.",
          image: "https://nthdegree.co.uk/cdn/shop/files/Bone.png?v=1710763746&width=480",
        },
        {
          id: "C1-4",
          title: "Universal Furniture Cover | Adjustable Fit",
          summary: "A versatile furniture cover suitable for various sizes and shapes.",
          description:
            "This universal cover is crafted from flexible, waterproof fabric with adjustable straps for a snug and secure fit on different furniture pieces.",
          image: "https://nthdegree.co.uk/cdn/shop/files/Biscuit_0035333c-8eb0-4a05-8a98-0d8ccc72748a.jpg?v=1720006826&width=480",
        },
      ],
    },
  ];
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal(id); 
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };
  
    return (
        <div>
             <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
    <Nav />
    <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
<ul>
  <li><Link to={'/'}>Home</Link ></li>
  <li><Link to={'/contact'}>Contact</Link></li>
</ul>
</div>

   <div className="md:flex w-full block md:h-96">
   <div className="w-full md:w-1/2">
   <img src="https://nthdegree.co.uk/cdn/shop/files/N6-three-seat-sofa-coal-lifestyle1.jpg?v=1717492341&width=900" className='w-full h-full object-center object-cover' alt="img" /></div>
    <div className="w-full md:w-1/2 container mx-auto text-center px-10  ">
    <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">REQUEST FREE FABRIC SAMPLES</h2>
    <p className=' text-sm md:text-left  text-center my-2 leading-loose tracking-wide lg:mt-6' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Discover a touch of luxury with our complimentary outdoor fabric and rug samples. Simply select your desired samples, and we'll deliver them directly to your doorstep allowing you to see and feel the exceptional quality of our fabrics in the comfort of your home.
<br /><br />
Are you an interior designer or architect in need of a bespoke sample pack? Contact our customer service team to enquire today.</p>
    </div>
   
   </div>
   {products.map((collection) => (
        <div key={collection.collection} className="w-full flex flex-wrap px-5 py-8 mx-auto">
          <div className="w-full md:w-1/2 container px-5 justify-center block md:px-20 py-10 mx-auto">
            <h2 className="text-2xl md:text-4xl md:text-left  font-bold text-center my-4" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{collection.collection}</h2>
            <p className="text-sm md:text-left text-center my-2 leading-loose tracking-wide lg:mt-6"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" >
              {collection.summary}
            </p>   <Link><button className='border-4 border-stone-500 hover:underline px-10 py-2 text-base text-center  justify-center mx-auto   hidden md:block my-5'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Add to cart</button></Link>
                
          </div>

          <div className="w-full md:w-1/2 container px-5 py-10 mx-auto">
            <div className="md:grid-cols-3 grid gap-3 gap-y-5 w-full mx-auto justify-center my-4 md:my-0">
              {collection.items.map((product) => (
                <button
                  key={product.id}
                  className="text-sm  w-full" 
                  onClick={() => handleOpenModal(product.id)}
                >
                  <img src={product.image} className='h-52 mx-auto' alt={product.title} data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"/>
                  <p className="w-full text-center hover:underline my-2  transition-all" >{product.title}<FontAwesomeIcon className='text-xs ml-1' icon={faCirclePlus} /></p>
                 
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Modal Rendering */}
      {products.map((collection) =>
        collection.items.map((product) => (
          openModal === product.id && (
            <div
              key={product.id}
              className="modal-overlay"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}
              onClick={handleCloseModal}
            >
              <div
                className="modal-box"
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  maxWidth: '500px',
                  width: '100%',
                  zIndex: 10000,
                }}
                onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside
              >
                <img src={product.image} className='h-64 w-10/12 mx-auto justify-center' alt={product.title} />
                <h3 className="font-bold text-2xl my-4">{product.title}</h3>
                <p className="py-4">{product.description}</p>
                <button onClick={handleCloseModal} className="btn-close mr-auto bg-stone-600 text-white hover:underline px-8 py-2 my-2">
                  Close
                </button>
              </div>
            </div>
          )
        ))
      )}
     </div>
   

    <Footer/>
  </div>
      
    );
};

export default Samples;