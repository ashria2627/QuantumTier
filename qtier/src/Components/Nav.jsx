import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png'
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvKQRZUusuSEsM2R7GEEFZFsUCvfEN3yM",
  authDomain: "cieluxe.firebaseapp.com",
  projectId: "cieluxe",
  storageBucket: "cieluxe.firebasestorage.app",
  messagingSenderId: "1010598182029",
  appId: "1:1010598182029:web:29e8ab8b111eba3ae476c4",
  measurementId: "G-39280L6DR0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Navbar = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/"; 
  
  const products = [
    { id: 1, title: "Shop by Collection" },
    { id: 2, title: "N1 Collection" },
    { id: 3, title: "N2 Collection" },
    { id: 4, title: "N3 Collection" },
    { id: 5, title: "N4 Collection" },
    { id: 6, title: "Pietra Collection" },
    { id: 7, title: "Outdoor Dine" },
    { id: 8, title: "Lounge Chairs" },
    { id: 9, title: "Sofa & Dine" },
    { id: 10, title: "NightStands" },
    { id: 11, title: "In & Outdoor Rugs" },
    { id: 12, title: "Furniture Covers" },
  ];
  

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const slideAnimation = useSpring({
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
    config: { tension: 200, friction: 20 },
  });
  const imageAnimation = useSpring({
    transform: isOpen2 ? 'scale(1.2)' : 'scale(1)', // Scale up when div is open, else keep it normal
    config: { tension: 170, friction: 26 }, // Control the speed and smoothness of the animation
  });
  const slideAnimation2 = useSpring({
    transform: isOpen2 ? "translateY(0%)" : "translateY(-100%)",
    height: isOpen2 ? "50%" : "0%", // Dynamically changes height
    overflow: "hidden", // Prevent content overflow
    config: { tension: 200, friction: 20 },
  });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Sign up successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Sign in successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  const auth = getAuth(app);


  return (
    <div
  className="w-full mx-auto font-light josefin"
  style={{ backgroundColor: isHomePage ? 'rgba(0, 0, 0, 0.5)' : 'white',
    color: isHomePage ? 'white' : '#363533',
   }}
>

      <div className="w-full " onClick={() => setIsOpen2(false)}>
        <div className="w-full justify-between container py-5 px-8 hidden md:flex text-sm">
          <div className="mx-auto w-4/5 text-right">
            <Link></Link>
          </div>
          <div className="w-1/5 px-5 hidden md:flex justify-center mx-auto">
            <Link to={'/journal'} className="mx-4 hover:underline hover:font-bold transition-all">Journal</Link>
            <Link to={'/about'} className="mx-4 hover:underline hover:font-bold transition-all">About</Link>
            <Link to={'/faq'} className="mx-4 hover:underline hover:font-bold transition-all">FAQ</Link>
            <Link to={'/contact'} className="mx-4 hover:underline hover:font-bold transition-all">Contact</Link>
          </div>
        </div>

        <hr className="border-b border-blue-50 hidden md:block" />

        <div className="w-full justify-between mx-auto container px-5 py-4 md:mt-4 flex text-sm">
          <div className="w-1/4 justify-center mx-auto hidden md:flex" >
          
          <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing when clicking the button
          setIsOpen2(!isOpen2);
        }}
        className="mx-4 hover:underline  hover:font-bold transition-all"
      >
       Products
      </button>
      <Link to={'/samples'} className="mx-4 hover:underline pt-5 hover:font-bold transition-all">Samples</Link>
      </div>
      <button
  onClick={(e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }}
  className={`relative md:hidden w-1/4 z-50 top-1 pr-5 text-xl text-stone-300 font-bold rounded-lg focus:outline-none`}
>
  {isOpen ? "X" : "☰"}
</button>

          <div className="mx-auto w-1/2 block text-center justify-center align-middle">
            <Link to={'/'} className="md:text-6xl text-3xl pl-2 text-center  yeseva">Cieluxe </Link>
          </div>
          <div className="mx-auto w-1/4 block text-right pt-3">
          {!user ? (
            < div className=" hidden space-y-1 space-x-8 md:flex md:block">
              <button onClick={() => document.getElementById('sign_up_modal').showModal()} className="hover:underlime mx-2 text-xs md:text-sm">Sign Up</button>
              <button onClick={() => document.getElementById('sign_in_modal').showModal()} className="hover:underlime mx-2 text-xs md:text-sm">Sign In</button>
            </div>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
        </div>
        <dialog id="sign_up_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-stone-700 bg-opacity-85 mx-auto">
          <h3 className="font-bold text-lg">Sign Up</h3>
          <input
            type="email"
            placeholder="Email" required
            className="input border-b-2 focus:ring-0 border-b-black  bg-transparent ring-0 w-full my-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password" required
            className="input border-b-2 focus:ring-0 border-b-black  bg-transparent ring-0 w-full my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp} className="bg-stone-500 hover:bg-stone-700 text-white px-8 py-2 mb-2">Sign Up</button>
          <form method="dialog">
            <button className="bg-stone-900 hover:underline px-8 py-2">Close</button>
          </form>
        </div>
      </dialog>

      {/* Sign In Modal */}
      <dialog id="sign_in_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-stone-700 bg-opacity-85 mx-auto">
          <h3 className="font-bold text-lg">Sign In</h3>
          <input
            type="email" required
            placeholder="Email"
            className="input  w-full my-2 border-b-2 focus:ring-0 border-b-black  bg-transparent ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password" required
            className="input border-b-2 focus:ring-0 border-b-black  bg-transparent ring-0 w-full my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn} className="bg-stone-500 hover:bg-stone-700 text-white px-8 py-2 mb-3 mr-auto">Sign In</button>
          <form method="dialog">
            <button className="bg-stone-900 hover:underline px-8 py-2 mr-auto">Close</button>
          </form>
        </div>
      </dialog>
    

        <hr className="border-b border-zinc-50 block" />
        {/* Animated Div for Sidebar */}
        {isOpen && (    <animated.div
          style={slideAnimation}
          className="fixed top-0 left-0 w-full h-screen text-stone-700 bg-white z-40 shadow-lg"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex">
              <div className="w-1/3 mx-auto container">
                <div className="font-bold text-2xl md:text-7xl my-72 ml-2 mx-auto text-center yeseva">
                  <Link to={"/"}><img  src={logo} className="w-40 h-40" /></Link>
                </div>
              </div>

              <div className="w-2/3 py-4 flex flex-col items-start px-10 space-y-1  font-bold yeseva">
                <Link to={"/about"} className="hover:underline md:text-3xl text-lg transition-all md:hover:text-6xl hover:text-2xl">
                  About
                </Link>
                <Link to={"/samples"} className="hover:underline md:text-3xl text-lg mb-3 transition-all md:hover:text-6xl hover:text-2xl">
                  Samples
                </Link>
                <div className=" grid grid-cols-1 gap-2 mt-4 text-xs josefin">
                  {products.map((products) => (
          <Link to={`/collection/${products.id}`}><li key={products.id} className=" list-none hover:underline"      style={{
            fontWeight: products.id === 1 || products.id === 2 || products.id === 12 ? 'bold' : 'normal',
            fontSize: products.id === 1 ||  products.id === 12 ? '1.2rem' : 'text-xs'
          
          }}>{products.title}</li></Link>
        ))}
                  </div>
                <Link to={"/journal"} className="hover:underline md:text-5xl text-lg transition-all md:hover:text-6xl hover:text-2xl">
                  Journals
                </Link>
                <Link to={"/faq"} className="hover:underline md:text-5xl text-lg transition-all md:hover:text-6xl hover:text-2xl">
                  FAQ
                </Link>
                <Link to={"/contact"} className="hover:underline md:text-5xl text-lg transition-all md:hover:text-6xl hover:text-2xl">
                  Get in Touch
                </Link>
              </div>
            </div>

         
          </div>
        </animated.div>
        )}
        {/* Second Animated Div */}
        {isOpen2 && (
          <animated.div
            style={slideAnimation2}
            className="fixed top-0 left-0 w-full h-96 text-stone-700 bg-white z-40 shadow-2xl  "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex flex-col justify-between h-full">
            <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing when clicking the button
          setIsOpen2(!isOpen2);
        }}
        className="z-40 fixed right-20  mx-4 hover:font-bold transition-all mt-4 "
      >
        X
      </button>
              <div className="flex justify-center mx-auto container px-5">
                <div className="w-1/2 md:p-7 mx-auto">
                  
                  <div className=" grid grid-cols-2 gap-4 gap-x-7 mt-4 text-lg ">
                  {products.map((products) => (
          <Link to={`/collection/${products.id}`}><li key={products.id} className=" list-none hover:underline text-gray-700 josefin"      style={{
            fontWeight: products.id === 1   ? 'bold' : 'normal',
               fontSize: products.id === 1 ? '1.3rem' : '.85rem',
               color: products.id === 1 ?'black' : '',

          }}>{products.title}</li></Link>
        ))}
                  </div>
                </div>

                <div className="w-1/2 mx-auto">
                <div className="w-64 my-2 mx-auto relative overflow-hidden  rounded-3xl shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/b4/6d/9e/b46d9ee2e9a41be8b3d226bad0346c22.jpg"
            
                   className="object-center animate  w-full h-80 mx-auto object-cover scale-125 "
                   alt="img"
                
              />  
                </div>
                </div>
              </div>
            </div>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
