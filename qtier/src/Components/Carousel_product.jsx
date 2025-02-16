import React from "react";
import { useParams } from "react-router-dom";

// Sample product data
const products = [
  { 
    id: 1, 
    title: "N1 Lux", 
    description: "A stylish single sofa from the N1 Collection, designed to add a modern touch to any space.", 
    imageUrl: "https://i.pinimg.com/736x/61/66/8a/61668a9ff40e12b084fba4d4b012de39.jpg", 
    collection: "N1 Collection"
  },
  { 
    id: 2, 
    title: "N2 Luxe", 
    description: "A sophisticated piece from the N2 Collection, offering both comfort and elegance.", 
    imageUrl: "https://i.pinimg.com/736x/41/22/e3/4122e3911070698adc2716932059ee13.jpg", 
    collection: "N2 Collection"
  },
  { 
    id: 3, 
    title: "N3 Comfort", 
    description: "Combining modern design and comfort, this sofa from the N3 Collection is a perfect addition.", 
    imageUrl: "https://i.pinimg.com/736x/59/bb/4c/59bb4c1b47625717fcdda051e7f867b5.jpg", 
    collection: "N3 Collection"
  },
  { 
    id: 4, 
    title: "N4 Chic", 
    description: "A blend of elegance and relaxation, the N4 Collection sofa is designed for modern living.", 
    imageUrl: "https://i.pinimg.com/736x/40/88/39/408839a7e2b5b27ed31161202865b3b9.jpg", 
    collection: "N4 Collection"
  },
  { 
    id: 5, 
    title: "Pietra Sofa", 
    description: "From the Pietra Collection, a single sofa offering minimalist design and ultimate comfort.", 
    imageUrl: "https://i.pinimg.com/736x/f6/9d/80/f69d80b559f8d6898fcf0b2d86653ba1.jpg", 
    collection: "Pietra Collection"
  },
  { 
    id: 6, 
    title: "Outdoor Comfort", 
    description: "Perfect for outdoor spaces, this sofa combines durability with style, from the Outdoor Collection.", 
    imageUrl: "https://i.pinimg.com/736x/35/6b/8d/356b8d7e55a751109202b97bf1591aa0.jpg", 
    collection: "Shop Outdoor"
  },
  { 
    id: 7, 
    title: "Lounge Retreat", 
    description: "A cozy lounge chair from the Lounge Chairs collection, designed for ultimate relaxation.", 
    imageUrl: "https://i.pinimg.com/736x/72/36/3e/72363e89c17f3b8336183a90c01995fc.jpg", 
    collection: "Lounge Chairs"
  },
  { 
    id: 8, 
    title: "Side Seat", 
    description: "A versatile side chair from the Side Tables Collection, perfect for any corner.", 
    imageUrl: "https://i.pinimg.com/736x/97/fe/c2/97fec220ea08ae86f88c8ecfbc5568d3.jpg", 
    collection: "Side Tables"
  },
  { 
    id: 9, 
    title: "Sofa Set Supreme", 
    description: "An elegant and spacious sofa set from the Sofa Sets Collection, designed for modern living.", 
    imageUrl: "https://i.pinimg.com/736x/cf/03/e9/cf03e9cc54c340d5b02a2f935f568db9.jpg", 
    collection: "Sofa Sets"
  },
  { 
    id: 10, 
    title: "Dining Comfort", 
    description: "From the Dining Tables & Chairs Collection, this sofa combines comfort and style for dining areas.", 
    imageUrl: "https://i.pinimg.com/736x/d3/60/eb/d360eb3085ed648c69f2fad2ea487ddf.jpg", 
    collection: "Dining Tables & Chairs"
  },
  { 
    id: 11, 
    title: "Sun Lounger", 
    description: "A stylish sun lounger from the Sun Loungers Collection, perfect for your garden or poolside.", 
    imageUrl: "https://i.pinimg.com/736x/44/7b/c3/447bc35008722958400c30fcf374e1a4.jpg", 
    collection: "Sun Loungers"
  },
  { 
    id: 12, 
    title: "Coffee Ulta", 
    description: "A unique blend of coffee table and sofa, perfect for your living room.", 
    imageUrl: "https://i.pinimg.com/736x/33/6f/9b/336f9bb7c71f56a9bb7593a3bfff7df1.jpg", 
    collection: "Coffee Tables"
  },
];



const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-page">
      <img src={product.imageUrl} alt={product.title} className="w-full h-96 object-cover" />
      <h1>{product.title}</h1>
     
    </div>
  );
};

export default ProductPage;
