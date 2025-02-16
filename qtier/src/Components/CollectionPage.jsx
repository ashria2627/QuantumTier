import { useParams ,useNavigate} from "react-router-dom";
import React, { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Navbar from "./Nav";
import Footer from "./Footer";

import Aos from 'aos'
import 'aos/dist/aos.css'
const allProducts = {
  1: {
    id: 1,
    collectionName: "Shop by Collection",
   
  },
  2: {
    id: 2,
    collectionName: "N1 Collection",
    products: [
      {
        id: "N1-1",
        name: "Luxury Oak Coffee Table",
        summary: "A premium handcrafted oak coffee table that combines functionality with elegance.",
        description: `
          This Luxury Oak Coffee Table is designed to bring sophistication to any living space. 
          Handcrafted from high-quality oak wood, it features a smooth, polished surface with a timeless design that can complement various interior styles. 
          Whether placed in a modern apartment or a traditional home, this coffee table adds a touch of luxury. 
          Its sturdy construction ensures durability, making it perfect for daily use. The warm oak finish gives the piece a natural, earthy feel, bringing warmth to your living room.
        `,
        price: "$250",
        image: "https://i.pinimg.com/736x/61/66/8a/61668a9ff40e12b084fba4d4b012de39.jpg",
        reviews: [
        
          {
            user: "Jane Smith",
            rating: 4,
            comment: "Love the design! Just wish it was a bit bigger."
          }],
          membershipPrice: "$200", 
          usage: "Indoor use only. Ideal for living rooms, offices, and modern spaces.",
          guarantee: "5 years warranty against manufacturing defects."
        ,
      
      },
      {
        id: "N1-2",
        name: "Modern sofa",
        summary: "A sleek and stylish glass dining table with elegant metal legs.",
        description: `
          The Modern Glass Dining Table is the perfect centerpiece for your dining area. 
          Featuring a minimalist design with a clear tempered glass top, this table is not only visually stunning but also practical and easy to maintain. 
          The elegant metal legs provide stability while adding a modern touch to the piece. This dining table seats 6 people comfortably, making it an excellent choice for family gatherings or dinner parties.
          The combination of glass and metal creates a contemporary aesthetic that can seamlessly fit into any modern or industrial-style home.
        `,
        price: "$480",
        image: "https://i.pinimg.com/736x/54/96/91/549691403721d10a9fa88c59b941c9d1.jpg",
        reviews: [
          {
            user: "Michael Johnson",
            rating: 5,
            comment: "Absolutely love the modern design! Looks great in my dining room."
          },
          {
            user: "Emily White",
            rating: 4,
            comment: "A little tricky to assemble, but once set up, it's stunning."
          }
        ],
        membershipPrice: "$420", 
        usage: "Best for dining rooms and modern interiors. Not suitable for outdoor use.",
        guarantee: "3 years warranty on frame and glass."
      },
    ],
  },
  3: {
    id: 3,
    collectionName: "N2 Collection",
    products: [
      {
        id: "N2-1",
        name: "Elegant Velvet Sofa",
        summary: "A luxurious velvet-upholstered sofa that offers both comfort and style.",
        description: `
          The Elegant Velvet Sofa is designed for those who appreciate both comfort and elegance. 
          Upholstered in high-quality velvet fabric, this sofa provides a soft and plush seating experience. 
          Its sturdy wooden frame ensures durability, while the sophisticated design complements various home decor styles. 
          Whether placed in a contemporary apartment or a classic living room, this sofa adds a touch of opulence. 
          Available in multiple colors, it allows for versatile styling options.
        `,
        price: "$700",
        image: "https://i.pinimg.com/736x/41/22/e3/4122e3911070698adc2716932059ee13.jpg",
        reviews: [
          {
            user: "Alice Brown",
            rating: 5,
            comment: "Extremely comfortable and stylish! A great addition to my home."
          }
        ],
        membershipPrice: "$650",
        usage: "Perfect for living rooms, lounges, and stylish interiors. Indoor use only.",
        guarantee: "5 years warranty on frame and upholstery."
      },
      {
        id: "N2-2",
        name: "Modern Glass Coffee Table",
        summary: "A sleek and stylish glass-top coffee table with a contemporary design.",
        description: `
          This Modern Glass Coffee Table is the perfect blend of elegance and functionality. 
          Featuring a tempered glass top with a sturdy metal frame, it exudes a contemporary charm suitable for various interior settings. 
          The minimalistic design ensures it complements modern, industrial, and even classic decor styles. 
          Whether used for serving guests or as a decorative centerpiece, this coffee table is both practical and aesthetically pleasing.
        `,
        price: "$350",
        image: "https://i.pinimg.com/736x/1f/be/55/1fbe551dc9c46edd013e92e1b7750d8f.jpg",
        reviews: [
          {
            user: "Daniel Carter",
            rating: 4,
            comment: "Looks stunning in my living room! Just wish it was a bit larger."
          }
        ],
        membershipPrice: "$300",
        usage: "Ideal for living rooms, lounges, and contemporary spaces. Indoor use only.",
        guarantee: "3 years warranty on frame and glass."
      }
    ],
  }
,
4: {
  id: 4,
  collectionName: "N3 Collection",
  products: [
    {
      id: "N3-1",
      name: "Industrial Bookshelf",
      summary: "A sturdy and stylish metal bookshelf with a rustic wood finish.",
      description: `
        The Industrial Bookshelf is perfect for those who appreciate a mix of modern and rustic aesthetics. 
        Featuring a strong metal frame with a distressed wood finish, this bookshelf offers durability and charm. 
        With multiple shelves, it provides ample space for books, decor, and storage items. 
        Its versatile design makes it suitable for living rooms, offices, and industrial-style interiors.
      `,
      price: "$200",
      image: "https://i.pinimg.com/736x/59/bb/4c/59bb4c1b47625717fcdda051e7f867b5.jpg",
      reviews: [
        {
          user: "Kevin Hart",
          rating: 5,
          comment: "Excellent quality and easy to assemble!"
        }
      ],
      membershipPrice: "$180",
      usage: "Ideal for home offices, study rooms, and living spaces. Indoor use only.",
      guarantee: "3 years warranty on frame and shelves."
    },
    {
      id: "N3-2",
      name: "Vintage Chair",
      summary: "A comfortable and elegant vintage-style chair for any living space.",
      description: `
        This Vintage Chair blends comfort with timeless design. 
        Upholstered in high-quality fabric with a sturdy wooden frame, it provides excellent support and durability. 
        The curved armrests and cushioned seat ensure relaxation while adding a touch of nostalgia to your decor. 
        Whether placed in a cozy reading nook or as an accent chair in a living room, it offers both style and comfort.
      `,
      price: "$180",
      image: "https://i.pinimg.com/736x/3b/12/e0/3b12e0fa168dce98c8d3039e669a0826.jpg",
      reviews: [
        {
          user: "Sophia Lee",
          rating: 4,
          comment: "Very stylish and comfortable, though assembly took some time."
        }
      ],
      membershipPrice: "$160",
      usage: "Perfect for living rooms, bedrooms, and reading corners. Indoor use only.",
      guarantee: "2 years warranty on frame and upholstery."
    }
  ],
}
,
5: {
  id: 5,
  collectionName: "N4 Collection",
  products: [
    {
      id: "N4-1",
      name: "Rustic Coffee Table",
      summary: "A handmade coffee table with a rustic look and sturdy craftsmanship.",
      description: `
        The Rustic Coffee Table brings warmth and charm to any living space. 
        Handcrafted from high-quality wood with a distressed finish, it exudes a timeless rustic aesthetic. 
        The spacious tabletop provides ample room for decor, books, or beverages, making it both stylish and practical. 
        This durable coffee table is perfect for rustic, farmhouse, or vintage-style interiors.
      `,
      price: "$400",
      image: "https://i.pinimg.com/736x/40/88/39/408839a7e2b5b27ed31161202865b3b9.jpg",
      reviews: [
        {
          user: "Emma Watson",
          rating: 5,
          comment: "Beautiful craftsmanship and very sturdy!"
        }
      ],
      membershipPrice: "$350",
      usage: "Ideal for living rooms, lounges, and cozy interiors. Indoor use only.",
      guarantee: "5 years warranty on wood craftsmanship."
    },
    {
      id: "N4-2",
      name: "Cushioned Bench",
      summary: "A stylish and comfortable bench with soft cushions for extra relaxation.",
      description: `
        The Cushioned Bench combines elegance with comfort, making it a perfect addition to any space. 
        Featuring a sturdy wooden frame and plush cushioning, this bench provides excellent support while adding a touch of sophistication. 
        Its versatile design makes it suitable for entryways, bedrooms, or dining areas. 
        Available in various fabric choices, this bench seamlessly fits into different decor styles.
      `,
      price: "$220",
      image: "https://i.pinimg.com/736x/a2/c4/c9/a2c4c9e1c609eb403b2ebe9bdc20b57f.jpg",
      reviews: [
        {
          user: "John Doe",
          rating: 4,
          comment: "Very comfortable and stylish, though I expected a slightly larger size."
        }
      ],
      membershipPrice: "$190",
      usage: "Perfect for hallways, bedrooms, or additional dining seating. Indoor use only.",
      guarantee: "3 years warranty on frame and upholstery."
    }
  ],
},

6: {
  id: 6,
  collectionName: "Pietra Collection",
  products: [
    {
      id: "P-1",
      name: "Geometric Wall Art",
      summary: "A set of geometric wall pieces perfect for modern decor.",
      description: `
        The Geometric Wall Art set features a combination of sleek, abstract shapes designed to complement contemporary interiors. 
        Crafted with high-quality materials, these pieces add dimension and style to any space. 
        Perfect for living rooms, bedrooms, or offices, this set transforms walls with a minimalist yet eye-catching aesthetic.
      `,
      price: "$290",
      image: "https://i.pinimg.com/736x/f6/9d/80/f69d80b559f8d6898fcf0b2d86653ba1.jpg",
      reviews: [
        {
          user: "Lily Adams",
          rating: 5,
          comment: "Beautiful design! Adds a modern touch to my space."
        }
      ],
      membershipPrice: "$175",
      usage: "Ideal for living rooms, offices, and modern interiors. Indoor use only.",
      guarantee: "2 years warranty on material and finish."
    },
    {
      id: "P-2",
      name: "Comfort clock",
      summary: "A minimalist woolen clock with an elegant and timeless design.",
      description: `
        The Woolen Clock combines simplicity with sophistication. 
        Featuring a sleek wooden face and precision quartz movement, this clock brings warmth and style to any space. 
        The natural wood finish complements a variety of interior styles, making it a versatile addition to your decor.
      `,
      price: "$420",
      image: "https://i.pinimg.com/736x/58/e6/d3/58e6d3c6e78db2f398a953be988c9e67.jpg",
      reviews: [
        {
          user: "David Miller",
          rating: 4,
          comment: "Looks great, but I wish it had a silent movement option."
        }
      ],
      membershipPrice: "$380",
      usage: "Perfect for living rooms, kitchens, or office spaces. Indoor use only.",
      guarantee: "3 years warranty on movement and craftsmanship."
    }
  ],
},
7: {
  id: 7,
  collectionName: "Outdoor Dine",
  products: [
    {
      id: "S-1",
      name: "Luxurious Dine",
      summary: "A plush outdoor dine designed for ultimate relaxation.",
      description: `
        The Luxurious dine is the perfect blend of comfort and durability. 
        Designed for outdoor lounging, it features weather-resistant fabric and a sturdy frame. 
        The plush cushioning ensures maximum relaxation, making it a great addition to patios, gardens, and outdoor lounges.
      `,
      price: "$2550",
      image: "https://i.pinimg.com/736x/21/60/42/2160422af1a269504f0fc224375d6bb5.jpg",
      reviews: [
        {
          user: "Sophia Green",
          rating: 5,
          comment: "Super comfortable and looks amazing in my garden!"
        }
      ],
      membershipPrice: "$2300",
      usage: "Ideal for patios, decks, and outdoor relaxation areas. Weather-resistant.",
      guarantee: "5 years warranty on frame and fabric."
    },
    {
      id: "S-2",
      name: "Marble Table",
      summary: "A stunning wooden-top  table with elegant gold accents.",
      description: `
        The Marble  Table brings a luxurious touch to any space. 
        Featuring a genuine marble top and sleek gold-finished legs, it is both stylish and functional. 
        Designed to withstand outdoor conditions, it is perfect for garden lounges and terrace seating areas.
      `,
      price: "$2650",
      image: "https://i.pinimg.com/736x/24/05/72/240572944af2d5a150ac5a91c9c6d0d1.jpg",
      reviews: [
        {
          user: "Daniel Carter",
          rating: 4,
          comment: "Looks amazing, but it’s a bit heavy to move around."
        }
      ],
      membershipPrice: "$2550",
      usage: "Suitable for patios, terraces, and indoor-outdoor spaces.",
      guarantee: "4 years warranty on marble and frame."
    }
  ],
},
8: {
  id: 8,
  collectionName: "Lounge Collection",
  products: [
    {
      id: "L-1",
      name: "Leather Sofa",
      summary: "A luxurious leather sofa with ample seating space.",
      description: `
        The Leather Sofa is designed for both style and comfort. 
        Made from premium leather, it features deep cushioning and a sturdy frame to ensure durability. 
        Its elegant design makes it a statement piece for any modern living room.
      `,
      price: "$1200",
      image: "https://i.pinimg.com/736x/72/36/3e/72363e89c17f3b8336183a90c01995fc.jpg",
      reviews: [
        {
          user: "Chris Johnson",
          rating: 5,
          comment: "Excellent quality! Very comfortable and stylish."
        }
      ],
      membershipPrice: "$1100",
      usage: "Ideal for living rooms and lounge areas. Indoor use only.",
      guarantee: "5 years warranty on frame and leather."
    },
    {
      id: "L-2",
      name: "Modern Lounge Chair",
      summary: "A sleek lounge chair with a contemporary design.",
      description: `
        The Modern Lounge Chair offers the perfect balance of style and comfort. 
        Its ergonomic design and premium upholstery make it a great addition to any relaxation space. 
        The chair’s modern silhouette blends well with contemporary interiors.
      `,
      price: "$450",
      image: "https://i.pinimg.com/736x/97/fe/c2/97fec220ea08ae86f88c8ecfbc5568d3.jpg",
      reviews: [
        {
          user: "Emma Brown",
          rating: 4,
          comment: "Great chair! Wish it had more color options."
        }
      ],
      membershipPrice: "$400",
      usage: "Suitable for living rooms, offices, and lounge areas. Indoor use only.",
      guarantee: "3 years warranty on frame and fabric."
    }
  ],
}
, 
9: {
  id: 9,
  collectionName: "Sofa & Dine",
  products: [
    {
      id: "S2-1",
      name: "Classic Sofa Set",
      summary: "A classic wooden Sofa set perfect for family gatherings.",
      description: `
        The Classic Sofa set is crafted from high-quality wood, offering both durability and elegance.
        Its timeless design makes it a perfect centerpiece for dining spaces, ensuring lasting memories over meals.
      `,
      price: "$1800",
      image: "https://i.pinimg.com/736x/58/f4/39/58f439b2c6513f96ccef558ec4d87288.jpg",
      reviews: [
        {
          user: "Olivia White",
          rating: 5,
          comment: "Sturdy and stylish! Fits perfectly in my dining room."
        }
      ],
      membershipPrice: "$1750",
      usage: "Ideal for dining rooms and family spaces. Indoor use only.",
      guarantee: "5 years warranty on wood and finish."
    },
    {
      id: "S2-2",
      name: "Dining Chairs Set",
      summary: "A set of elegant dining chairs to complement your table.",
      description: `
        This set of dining chairs features a sleek design with comfortable cushioning.
        Perfectly pairs with modern and classic dining tables to enhance your dining experience.
      `,
      price: "$2350",
      image: "https://i.pinimg.com/736x/f8/0e/85/f80e852b80a7fedcbc0fe5f16044e4dd.jpg",
      reviews: [
        {
          user: "James Wilson",
          rating: 4,
          comment: "Great quality, but I wish they had more color choices."
        }
      ],
      membershipPrice: "$2200",
      usage: "Suitable for dining rooms and formal seating areas. Indoor use only.",
      guarantee: "3 years warranty on frame and upholstery."
    }
  ],
},
10: {
  id: 10,
  collectionName: "NightStands",
  products: [
    {
      id: "D-1",
      name: "Upholstered stand",
      summary: "A luxurious upholstered stand  with beautiful wood.",
      description: `
        This night stand offers a perfect combination of style and comfort.
        Featuring premium upholstery and a sturdy structure, it ensures restful sleep with an elegant touch.
      `,
      price: "$950",
      image: "https://i.pinimg.com/736x/fa/e4/be/fae4be7d2144f040a74d703d24e657fa.jpg",
      reviews: [
        {
          user: "Michael Scott",
          rating: 5,
          comment: "Superb quality! Adds a luxurious feel to my bedroom."
        }
      ],
      membershipPrice: "$900",
      usage: "Perfect for master bedrooms and guest rooms. Indoor use only.",
      guarantee: "5 years warranty on frame and upholstery."
    },
    {
      id: "D-2",
      name: "Wooden Nightstand",
      summary: "A classic wooden nightstand with a modern twist.",
      description: `
        The Wooden Nightstand provides convenient storage and timeless design.
        Crafted from durable wood with a sleek finish, it’s an ideal bedside companion for any bedroom decor.
      `,
      price: "$180",
      image: "https://i.pinimg.com/736x/c6/52/19/c6521960712dea089e09679bcaa73f00.jpg",
      reviews: [
        {
          user: "Sarah Jones",
          rating: 4,
          comment: "Nice design but could have had more drawer space."
        }
      ],
      membershipPrice: "$150",
      usage: "Great for bedrooms and guest rooms. Indoor use only.",
      guarantee: "3 years warranty on frame and finish."
    }
  ],
},
11: {
  id: 11,
  collectionName: "In & Outdoor Rugs",
  products: [
    {
      id: "IN-1",
      name: "Contemporary Rug",
      summary: "A contemporary rug with minimalist design.",
      description: `
        This sleek rug enhances any living space with its modern aesthetics.
        Built with durable materials, it offers both functionality and style.
      `,
      price: "$150",
      image: "https://i.pinimg.com/736x/0e/d4/cf/0ed4cf8adbeb91023185132a438bdf0f.jpg",
      reviews: [
        {
          user: "Mark Thompson",
          rating: 5,
          comment: "Simple yet elegant! Perfect for my living room."
        }
      ],
      membershipPrice: "$120",
      usage: "Suitable for living rooms, offices, and patios. Indoor and outdoor use.",
      guarantee: "3 years warranty on frame and surface."
    },
    {
      id: "IN-2",
      name: "Indoor rug",
      summary: "A stylish indoor rug with a metalic vibe.",
      description: `
        The Indoor rug is a fusion of modern and rustic design.
        Featuring a sturdy metal frame and wood surface, it adds a bold character to any space.
      `,
      price: "$180",
      image: "https://i.pinimg.com/736x/a1/5e/40/a15e400b3322d5caba1df58613fc5329.jpg",
      reviews: [
        {
          user: "Lucas Bennett",
          rating: 4,
          comment: "Very pretty, but slightly smaller than expected."
        }
      ],
      membershipPrice: "$150",
      usage: "Perfect for living rooms, offices, and bedrooms. Indoor use only.",
      guarantee: "3 years warranty on frame and finish."
    }
  ],
},
12: {
  id: 12,
  collectionName: "Furniture Covers",
  products: [
    {
      id: "F-1",
      name: "Coffee Shelf Cover",
      summary: "A sleek glass shelf for displaying your decor items.",
      description: `
        This modern glass shelf is perfect for displaying books, art, and collectibles.
        Designed with a sturdy frame, it offers durability and elegance.
      `,
      price: "$120",
      image: "https://i.pinimg.com/736x/33/6f/9b/336f9bb7c71f56a9bb7593a3bfff7df1.jpg",
      reviews: [
        {
          user: "Natalie Carter",
          rating: 5,
          comment: "Looks amazing! Very easy to install."
        }
      ],
      membershipPrice: "$100",
      usage: "Ideal for living rooms, offices, and hallways. Indoor use only.",
      guarantee: "2 years warranty on glass and frame."
    },{
      "id": "F-2",
      "name": " Walnut Coffee Cover",
      "summary": "A classic mid-century modern coffee table with rich walnut finish and minimalist design.",
      "description": `
        The Mid-Century Walnut Coffee Table brings a touch of retro elegance to your living room. 
        Crafted from high-quality walnut wood, this table features clean lines and a sleek, minimalist design that is timeless. 
        Its sturdy construction ensures durability while the rich walnut finish adds warmth to your space. 
        This coffee table is perfect for creating a cozy yet sophisticated atmosphere in modern and traditional homes alike.
      `,
      "price": "$350",
      "image": "https://i.pinimg.com/736x/e8/c5/b7/e8c5b774bd889b54c973add84aad25ce.jpg",
      "reviews": [
        {
          "user": "Sophia Green",
          "rating": 5,
          "comment": "I absolutely adore this table! It's perfect for my living room, and the walnut finish is beautiful."
        },
        {
          "user": "James Taylor",
          "rating": 4,
          "comment": "Great design but a bit smaller than I expected. Still a great addition to my home."
        }
      ],
      "membershipPrice": "$310",
      "usage": "Ideal for living rooms, lounges, and modern or retro-style homes.",
      "guarantee": "2 years warranty on craftsmanship."
    }
      
  ],
}

};

function CollectionPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(()=>{
    Aos.init();
      },[])
  const collectionsToDisplay = id === "1" 
    ? Object.values(allProducts).filter(col => col.id !== 1)  // Filter out the collection with id "1"
    : [allProducts[id]];  


  if (!collectionsToDisplay || collectionsToDisplay.length === 0 || !collectionsToDisplay[0].products ) {
    return (
      <>
        <Navbar />
        <div className="text-2xl text-center my-10">404 Not Found</div>
        <Footer />
      </>
    );
  }
  const currentCollection = collectionsToDisplay[0];

  return (
    <div className="overflow-x-hidden josefin bg-white text-stone-700 font-light">
      <Navbar />
      <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* If ID is "1", show "Shop by Collection" in breadcrumb */}
            <Link to={`/collection/1`}>Shop by Collection</Link>
          </li>
          {id !== "1" && (
            <li>
              <Link to={`/collection/${currentCollection.id}`}>{currentCollection.collectionName}</Link>
            </li>
          )}
        </ul>
      </div>
    <div className="bg_products">    <div className="w-full mx-auto text-white  md:pt-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
           <div class="container mx-auto flex px-5 py-24 w-full md:flex-row flex-col items-center" >
          <div class="lg:flex-grow md:w-2/3  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-2xl md:text-6xl mb-4 font-bold yeseva" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">SHOP BY COLLECTIONS
            </h1>
            <p class="mb-8 leading-relaxed text-sm md:text-lg" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Furniture design combines functionality, aesthetics, and innovation to create pieces that elevate both comfort and space. It focuses on exploring materials, ergonomics, and style to craft functional yet artistic elements that enhance everyday life while reflecting contemporary culture.</p>
            <div class="flex justify-center">
   
           </div>
          </div>
          <div class="md:w-1/3 hidden md:block w-5/6">
            <p class="object-cover object-center rounded"  ></p>
          </div>
        </div>
           </div></div>
      <div className="px-2 w-full py-12 mx-auto justify-center container">
  <div  className="grid grid-cols-1 gap-3 mx-auto">
    {collectionsToDisplay.map((col) => (
      <div key={col.id}  className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto mt-6" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
        
        <h2 className="text-2xl text-center font-semibold mt-2">{col.collectionName}</h2>
        {col.products.map((product) => (
          <div
            key={product.id}
            className="px-4 py-8 border-2 w-full border-stone-500 hover:bg-stone-200 cursor-pointer hover:shadow-lg transition mb-5"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover object-center rounded"
            />
            <h2 className="text-lg font-semibold mt-2 yeseva">{product.name}</h2>
            <h2 className="text-lg font-semibold mt-2">{product.price}</h2>
            <h2 className="text-sm my-2">{product.usage}</h2>
            <p className="text-sm text-gray-600"><span className="font-bold">membership price:</span> {product.membershipPrice}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

{selectedProduct && (
  <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
)}


      <Footer />
    </div>
  );
}


function ProductModal({ product, onClose }) {
  const modalAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div
      style={modalAnimation}
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-7/12 text-stone-700 text-xs md:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="md:text-2xl text-lg font-bold yeseva">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:h-80 h-28 px-5 py-2 object-cover rounded-xl my-2"
        />
        <p className="  mt-0 md:mt-2 "><span className="font-semibold  mr-2">Price:</span> {product.price} <span className="font-semibold  ml-1 md:ml-4">Membership Price:</span> {product.membershipPrice}</p>
        
        <p className="   mt-0 md:mt-2"><span className="font-semibold  mr-2">Description:</span> <spn className=" ">{product.description}</spn></p>
 
        <p className="  mt-0 md:mt-2"><span className="font-semibold  mr-2">Warranty:</span> {product.guarantee}</p>
        <span className="font-semibold mt-2">Review : </span>
        {product.reviews.map((review, index) => (
  <div key={index} className="">
    <p>{review.user}- <span className="font-bold mr-2">{review.rating}stars</span> "<span className="italic yeseva">{review.comment}" </span></p>
  
  </div>
))}
        <button onClick={onClose} className="mt-2 px-4 py-2 bg-stone-500 text-white rounded">Close</button>
        <button  className="mt-2 px-4 py-2 bg-stone-500 text-white rounded ml-4"> add to cart</button>
      </div>
    </animated.div>
  );
}

export default CollectionPage;
