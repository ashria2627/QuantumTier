import React, { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "Tips to Look After Your Outdoor Furniture in Winter",
      date: "December 13, 2024",
      author: "Beth Nuttall",
      summary: "Luxury outdoor furniture is an investment. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden...",
      image: "https://i.pinimg.com/736x/78/d8/d3/78d8d30089b2a52bce0842e1c537dbc5.jpg"
    },
    {
      id: 2,
      title: "What is the Best Material for Outdoor Furniture in the Sun?",
      date: "July 31, 2024",
      author: "Courtney Holt",
      summary: "When selecting outdoor furniture, especially for sun-exposed areas, it's essential to choose materials that can withstand prolonged exposure to UV rays...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P16_LUXURYOUTDOOR_detail02.png?v=1710933719&width=560",
        category: "LUXURY"
    },
    {
      id: 3,
      title: "Why Choose Grey Outdoor Furniture?",
      date: "July 17, 2024",
      author: "Courtney Holt",
      summary: "Grey outdoor furniture has become increasingly popular for its versatility, elegance, and ability to blend seamlessly with various design aesthetics...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P18_LUXURY_UKCOUNTRY_cam11.png?v=1711040120&width=560",
        category: "CARE"
    },
    {
      id: 4,
      title: "The Most Durable Fabric for Outdoor Furniture",
      date: "July 17, 2024",
      author: "Courtney Holt",
      summary: "When it comes to choosing the right fabric for outdoor furniture, durability is a key factor. Outdoor furniture faces harsh conditions such as sun exposure, rain, wind, and even snow...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Presentation.jpg?v=1711040491&width=560",
        category: "CARE"
    },
    {
      id: 5,
      title: "Is it Worth Investing in Expensive Garden Furniture?",
      date: "June 25, 2024",
      author: "Leah Taylor",
      summary: "When it comes to creating a serene and stylish outdoor space, garden furniture plays a pivotal role in transforming a plain backyard into a luxurious oasis...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Untitled_design_981e7985-089f-49a9-8427-de100b65dc88.png?v=1737130010&width=900",
        category: "CARE"
    },
    {
      id: 6,
      title: "Can You Use Outdoor Furniture Indoors?",
      date: "June 25, 2024",
      author: "Courtney Holt",
      summary: "Summer is on the horizon meaning nicer weather and higher temperatures. This also means there is an increase in luxury outdoor living trends...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N2_Dark_lifestyle.png?v=1733933194&width=560",
        category: "LUXURY"
    },
    {
      id: 7,
      title: "The Rise of Design-Led Garden Furniture",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "In a world where connectivity and fluidity reign supreme, the distinction between indoor and outdoor living has become increasingly blurred...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/3_Photoshop.jpg?v=1720264856&width=560",
        category: "LATEST"
    },
    {
      id: 8,
      title: "Evolution of Rattan Furniture",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "For decades, rattan outdoor furniture has been a staple in gardens, patios and poolside retreats around the world. Its natural charm, durability and timeless appeal have made it a favourite...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N7-lifestyle-9.jpg?v=1721203462&width=560",
        category: "LATEST"
    },
    {
      id: 9,
      title: "Outdoor Furniture Trends for 2024",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Step into the world of outdoor luxury with the top trends for outdoor furniture in 2024. As the boundaries between indoor and outdoor living continue to blur, it's essential to...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N1-dark-teak-lifestyle-6.png?v=1719306798&width=560",
        category: "LATEST"
    },
    {
      id: 10,
      title: "Somerset's Idyllic Countryside Retreat",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Nestled amidst the picturesque landscapes of Somerset, a lavish new residence emerges, exuding elegance and sophistication...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N6-corner-sofa-214-coal-close-up-portrait.jpg?v=1719321465&width=560",
        category: "LUXURY"
    },
    {
      id: 11,
      title: "Caring for Your Teak Wood",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "All of Nth Degree's Collections are crafted using meticulously chosen materials that adhere to the most stringent quality criteria...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P16_LUXURYOUTDOOR_cam3.png?v=1710933517&width=560",
        category: "INDOOR"
    },
    {
      id: 12,
      title: "Luxury Italian Living",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Outdoor living should be synonymous with luxury and relaxation. There's nothing quite like the allure of spending time outdoors, surrounded by the beauty of nature and the comforts of your...",
      image: "https://i.pinimg.com/736x/08/e5/3b/08e53bb9ec52f441e84f9cd50cf90dd8.jpg",
        category: "INDOOR"
    },
    {
      id: 13,
      title: "Sustainability in Outdoor Furniture",
      date: "February 20, 2024",
      author: "Beth Nuttall",
      summary: "Focusing on eco-conscious materials and production methods, sustainability in outdoor furniture design has taken center stage in recent years...",
      image: "https://i.pinimg.com/736x/74/ca/bd/74cabd898e16f524b518404acbd47801.jpg",
        category: "INDOOR"
    },
    {
      id: 14,
      title: "Maximising Your Outdoor Space",
      date: "February 13, 2024",
      author: "Courtney Holt",
      summary: "Discover creative ways to make the most of your outdoor areas, from smart furniture layouts to multifunctional designs for every type of garden.",
      image: "https://i.pinimg.com/736x/1c/4e/b8/1c4eb82dfd129cde44696471a9f9ed3f.jpg",
        category: "OUTDOOR"
    },
    {
      id: 15,
      title: "The Timeless Appeal of Teak",
      date: "January 29, 2024",
      author: "Beth Nuttall",
      summary: "Teak's durability and elegant appearance make it a top choice for outdoor furniture, providing both beauty and resilience against harsh weather.",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Camera_6_Sun_loungers_Dining_set_Final.jpg?v=1711039010&width=560",
        category: "OUTDOOR"
    },
    {
      id: 16,
      title: "How to Choose the Right Outdoor Sofa",
      date: "January 15, 2024",
      author: "Leah Taylor",
      summary: "Selecting an outdoor sofa involves balancing comfort, style, and durability. Explore key considerations when choosing the perfect seating for your garden.",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Camera_2_3_seater_sofa_armchairs_Final_300dpi.jpg?v=1721047765&width=560",
        category: "OUTDOOR"
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState('ALL'); 
  const filteredArticles = activeCategory === 'ALL' ? articles : articles.filter(article => article.category === activeCategory);

   useEffect(()=>{
      Aos.init();
        },[])
  return (
    <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
    <Nav />
    <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
<ul>
  <li><Link to={'/'}>Home</Link></li>
  <li><Link to={'/journal'}>journal</Link></li>
</ul>
</div>
<div className="md:flex w-full block bg-stone-200 md:h-screen">
    <div className="w-full md:w-1/2 container mx-auto  px-10 py-12 md:py-24">
    <span className='mb-18 text-xs tracking-widest font-bold md:text-left text-center' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">featured</span><br />
    <h2 className='yeseva text-2xl md:text-5xl md:text-left text-center my-4' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Tips to Look After Your Outdoor Furniture in Winter</h2>
    <span className='py-10 text-xs tracking-widest  md:text-left text-center' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">_by Beth Nuttal</span>
    <p className=' text-sm md:text-left md:text-xl text-center my-8 leading-loose tracking-wide' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Luxury outdoor furniture is an investment. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden...</p>
    <div>
      <a href="#journal">
      <button className='bg-stone-600 hover:underline px-8 py-2 text-center md:ml-aut mx-auto text-white my-8 'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"> read more</button></a>
</div>
    </div>
    <div className="w-full md:w-1/2">
    <img src="https://i.pinimg.com/736x/78/d8/d3/78d8d30089b2a52bce0842e1c537dbc5.jpg" className='w-full h-full object-center object-cover' alt="img" /></div>
   </div>
  <div class=" w-full  px-5 py-24 mx-auto" id='journal'>
       <div class="flex flex-col text-center w-full mb-12">
        <section class="  overflow-hidden">
  <div class=" py-24 mx-auto">
      <div class="  mx-auto w-full  lg:py-6 mb-6 lg:mb-0" >
        
      <div className="flex flex-wrap text-sm md:text-xl" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
        {['ALL', 'CARE', 'INDOOR', 'LUXURY', 'LATEST', 'OUTDOOR'].map(category => (
          <a
            key={category}
            className={`flex-grow py-2 cursor-pointer hover:underline text-lg px-1 ${activeCategory === category ? 'text-stone-500 font-bold underline border-stone-700' : 'border-stone-300'}`}
            onClick={() => setActiveCategory(activeCategory === category ? 'ALL' : category)} 
          >
            {category}
          </a>
        ))}
      </div>
<hr className='border-b my-3 border-b-stone-400' />
      <div className="mb-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-7 container mx-auto mt-10">
          {filteredArticles.map((img) => (
            <div key={img.id}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
              <Link  to={`/article/${img.id}`}>
                <div className="h-96 w-80 overflow-hidden shadow-2xl mx-auto">
                  <img
                    alt={img.title}
                    className="w-full h-full zoom object-cover object-center"
                    src={img.image}
                  />
                </div>
                <div className="md:px-12 md:text-left text-center my-12  text-lg text-stone-700 py-2">
                  <h2 className='yeseva text-2xl mb-8 hover:underline'>{img.title}</h2>
                  <p className='text-sm font-light text-stone-400 mb-4'>{img.date}.{img.author}</p>
                  <p className='text-base  mb-10'>{img.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    
      </div>
     
   
  </div>
</section>
      </div>
      
  
  
    </div>
  
    
   
    
    <Footer/>
  </div>
  );
};

export default Journal;
