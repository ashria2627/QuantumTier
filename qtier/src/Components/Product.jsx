import React, { useState ,useEffect } from 'react';
import {    Link    } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Product = () => {

  const products = [
    {
      id: 1,
      name: "Relax Flow",
      price: "$5.00",
      image: "https://images.unsplash.com/photo-1615294406523-120f6e4f3ac1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Soft and silky. The aftertaste is pleasant, long-lasting. Impact: relaxing and harmonizing..",
      reviews: [
        "Great for casual wear! This shirt is both comfortable and stylish. The colors pop, and the block design is a conversation starter. I’ve worn it a few times, and it holds up well after washing",
        "Eye-catching design!I wore this to a casual event, and everyone loved it! The colors are bright, and the block-inspired design is fun without being over-the-top. It’s well-made and fits great.",
        "Nostalgic and stylish! This shirt takes me back to my childhood! The block detailing is subtle yet noticeable, and the minifigure silhouettes add a fun touch. It’s comfortable and perfect for any fan of creative designs.",
       
      ],
    },
    {
      id: 2,
      name: "Focus Blend",
      price: "$17.00",
      image: "https://images.unsplash.com/photo-1586097384553-af3db3537777?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A sharp, invigorating taste that keeps you on track. Perfect for intense study sessions.",
      reviews: [
        "Amazing quality! The materials used are premium, and the fit is perfect.",
        "Loved the fit! It's very comfortable and exactly as described.",
        "Creative and fun!  I love the playful design of this shirt. The colors are vibrant, and the brick pattern is so unique. It’s perfect for casual outings and always gets compliments. Definitely one of my favorite shirts!",
      ],
    },{
      id: 3,
      name: "Morning Zen",
      price: "$15.00",
      image: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A crisp, refreshing aroma to kickstart your day with peace and positivity.",
      reviews: [
        "Great product, very soothing!",
        "I love the refreshing smell, perfect for mornings.",
        "So relaxing, I feel calm and energized at the same time.",
      ],
    },
    {
      id: 4,
      name: "Calm Nights",
      price: "$20.00",
      image: "https://images.unsplash.com/photo-1626793669019-ba9d1adc32e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Gentle and soothing, with notes of lavender and chamomile for restful sleep.",
      reviews: [
        "Helps me sleep peacefully every night!",
        "Love the calming fragrance, highly recommend it.",
        "Perfect for unwinding after a long day.",
      ],
    },
    {
      id: 5,
      name: "Energy Burst",
      price: "$10.00",
      image: "https://plus.unsplash.com/premium_photo-1670692695578-319f28b97ac1?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A vibrant, tangy mix to elevate your energy levels instantly.",
      reviews: [
        "Gives me the energy boost I need!",
        "Zesty and refreshing, just what I wanted.",
        "My go-to for a midday pick-me-up.",
      ],
    },
    {
      id: 6,
      name: "Green Harmony",
      price: "$76.00",
      image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Earthy and balanced, a perfect companion for mindfulness and meditation.",
      reviews: [
        "Perfect for meditation sessions.",
        "A very grounding and soothing aroma.",
        "Feels like being in nature, love it!",
      ],
    },
    {
      id: 7,
      name: "Golden Glow",
      price: "$31.00",
      image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A rich blend of turmeric and spices to rejuvenate your body and mind.",
      reviews: [
        "Very warming and comforting.",
        "Love the turmeric blend, feels rejuvenating.",
        "Great for cold days, highly recommend!",
      ],
    },
    {
      id: 8,
      name: "Berry Bliss",
      price: "$55.00",
      image: "https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Fruity and sweet, a burst of happiness in every sip.",
      reviews: [
        "Sweet and fruity, absolutely delicious!",
        "My kids love this one!",
        "Perfect for a sweet treat.",
      ],
    },
    {
      id: 9,
      name: "Citrus Twist",
      price: "$66.00",
      image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Zesty and tangy, the perfect choice for a midday refresh.",
      reviews: [
        "Citrusy and refreshing, perfect for summer.",
        "Very tangy, just the way I like it.",
        "Love the burst of citrus flavor.",
      ],
    },
    {
      id: 10,
      name: "Mint Fresh",
      price: "$5.00",
      image: "https://i.pinimg.com/736x/d3/85/ce/d385ce2cabe96a724807459a4190ea42.jpg",
      description: "Cool and refreshing, ideal for hot summer days.",
      reviews: [
        "So refreshing, perfect for a hot day!",
        "Minty and cool, love it!",
        "A summer essential for me.",
      ],
    },
    {
      id: 11,
      name: "Spice Fusion",
      price: "$5.00",
      image: "https://i.pinimg.com/736x/12/85/2b/12852b4b2bc944f04254a66131747409.jpg",
      description: "A bold combination of spices that invigorates your senses.",
      reviews: [
        "Spicy and invigorating, great for winter!",
        "Love the bold spice blend, very unique.",
        "My new favorite, highly recommend it.",
      ],
    },
    {
      id: 12,
      name: "Herbal Escape",
      price: "$15.00",
      image: "https://i.pinimg.com/736x/ab/c8/06/abc80650578ef473de92a69aae13c342.jpg",
      description: "A soothing blend of herbs for a tranquil evening.",
      reviews: [
        "Perfect for winding down after work.",
        "Very herbal and calming, love it.",
        "My go-to for relaxation.",
      ],
    },
    {
      id: 13,
      name: "Tropical Breeze",
      price: "$10.00",
      image: "https://i.pinimg.com/736x/c4/75/e1/c475e1104224c4e48424108446422c5e.jpg",
      description: "A delightful mix of tropical fruits to whisk you away.",
      reviews: [
        "So tropical, reminds me of vacations.",
        "Love the fruity mix, very refreshing.",
        "Feels like a tropical escape.",
      ],
    },
    {
      id: 14,
      name: "Choco Delight",
      price: "$6.00",
      image: "https://i.pinimg.com/736x/6d/95/63/6d9563ac48b2e54b4cd7a6d979134328.jpg",
      description: "Rich and creamy, with a hint of cocoa indulgence.",
      reviews: [
        "Chocolatey and delicious, love it!",
        "Feels like a dessert, so good.",
        "A must-have for chocolate lovers.",
      ],
    },
    {
      id: 15,
      name: "Winter Spice",
      price: "$76.00",
      image: "https://i.pinimg.com/736x/43/6d/a4/436da44985d61c713fbc4e2676e18a68.jpg",
      description: "Warm and cozy, the perfect companion for chilly evenings.",
      reviews: [
        "Very warming and comforting.",
        "Perfect for winter nights.",
        "Love the spicy aroma, so cozy.",
      ],
    },
    {
      id: 16,
      name: "Cinnamon Charm",
      price: "$15.00",
      image: "https://images.unsplash.com/photo-1532136868905-8094ef8ef5f2?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A warm, spicy mix of cinnamon and spices to uplift your senses.",
      reviews: [
        "So spicy and aromatic, love it!",
        "Perfect for cold mornings.",
        "My new favorite, highly recommend!",
      ],
    },
    {
      id: 17,
      name: "Peach Serenity",
      price: "$90.00",
      image: "https://i.pinimg.com/736x/58/c2/65/58c265992a231034a9b5dcfaa4534edf.jpg",
      description: "Light and fruity, a touch of peachy sweetness for your day.",
      reviews: [
        "Peachy and sweet, love it!",
        "Very light and refreshing.",
        "Perfect for relaxing afternoons.",
      ],
    },
    {
      id: 18,
      name: "Rose Garden",
      price: "$175.00",
      image: "https://i.pinimg.com/736x/94/9d/8a/949d8a1328809caaa03b087a7cb6d680.jpg",
      description: "Delicate and floral, with a subtle hint of rose petals.",
      reviews: [
        "Very floral and beautiful aroma.",
        "Love the subtle rose scent.",
        "Perfect for a romantic evening.",
      ],
    },
  ];
    useEffect(()=>{
      Aos.init();
        },[])
    return (
      <div  className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
   
<Nav />
<div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
<ul>
<li><Link to={'/'}>Home</Link ></li>
<li><Link to={'/products'}>Products</Link></li>
</ul>
</div>
<h1 className='text-2xl md:text-5xl lg:text-7xl text-center mx-auto my-24 yeseva'>COMING SOOOON !</h1>

<Footer/>
</div>
    );
};

export default Product;