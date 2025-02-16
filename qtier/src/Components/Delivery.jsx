
import React, {  useEffect  } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Footer from "./Footer";

const FAQS = () => {

  useEffect(()=>{
    Aos.init();
      },[])
  const questions = [
    {
      id: 1,
      question: "Can I trust the quality of Nth Degree's luxury outdoor furniture when purchasing online?",
      ans: "Yes, each piece in our collection is designed and curated with the utmost consideration using quality materials and traditional methods. Each piece undergoes rigorous quality checks to ensure it meets our high standards before being offered for sale online."
    },
    {
      id: 2,
      question: "How will I know that you've received my order?",
      ans: "Upon placing your order online, you'll receive a confirmation email detailing the specifics of your purchase, including order number, items ordered, and estimated delivery timeframe."
    },
    {
      id: 3,
      question: "Can I pay for my furniture pieces to be assembled?",
      ans: "Yes, of course. At the checkout, you will be asked which delivery service you require. If you require your furniture to be assembled, please choose this option. On each product page, it will state whether the item needs to be assembled or whether it comes already assembled. If you wish to assemble the item yourself, please choose delivery only at checkout and find all manuals here."
    },
    {
      id: 4,
      question: "How can I keep my furniture in the best condition?",
      ans: "To ensure your furniture remains in top condition for as long as possible, we recommend adhering to the care label instructions provided with each item. If you'd like to review these instructions before making a purchase, please do not hesitate to reach out to our customer service team. Additionally, we suggest investing in our protective covers for added care and longevity of your furniture."
    },
    {
      id: 5,
      question: "Is your showroom open yet?",
      ans: "We plan to open showrooms in London and Manchester in 2025. In the meantime, we would be happy to send you any samples or additional photos to assist you. Please contact our customer service team for further information."
    },
    {
      id: 6,
      question: "Can I order samples?",
      ans: "Of course! Feel free to visit the sample page on our website where you can order any outdoor fabric samples as well as outdoor rug samples too. They are free of charge, and if you would like to request an interior sample pack, simply email our team and we can include any samples you wish. Alternatively, if you are looking for something in particular, maybe a wood or aluminium sample, please contact our customer service team at customerservice@nthdegree.co.uk."
    },
    {
      id: 7,
      question: "Can the furniture be left outside all year even through the unpredictable UK weather?",
      ans: "Teak wood is widely regarded as one of the most durable woods. Its close grain, combined with high mineral content and natural oils, makes it strong, durable, and virtually impervious to all weather extremes and rotting. The aluminum used in all of our pieces is also designed to endure all weather conditions."
    },
    {
      id: 8,
      question: "What are the shipping costs?",
      ans: "Shipping costs vary depending on the size and weight of your order, as well as location. We strive to offer competitive shipping rates; please see our Delivery page for more information. Nth Degree members have access to free shipping across all their orders."
    },
    {
      id: 9,
      question: "Is international shipping available for Nth Degree's outdoor furniture?",
      ans: "Yes, we offer international shipping for our luxury outdoor furniture. Please contact our customer service team for more details on shipping rates and delivery times to your location."
    },
    {
      id: 10,
      question: "What is the return policy for luxury outdoor furniture at Nth Degree?",
      ans: "We believe in the quality and reliability of our products. If you're not completely satisfied with your purchase, you may return it within 14 days for a refund or exchange, subject to our return policy terms and conditions."
    },
    {
      id: 11,
      question: "What is the return fee?",
      ans: "As we use an external company for our delivery, return fees vary based on the size of your item. There is no return fee if you choose to exchange your item. Small items - Returns are free of charge. Medium items - A return fee of £35 applies. Large items - A return fee of £70 is applicable."
    },
    {
      id: 12,
      question: "How can I return or cancel my order?",
      ans: "If you wish to return or cancel your order, please contact our customer service team as soon as possible. They will guide you through the process and assist you in initiating the return or cancellation."
    },
    {
      id: 13,
      question: "How long will it take to get my refund?",
      ans: "Once your return is received and processed, refunds are typically issued within 5-7 business days. Please note that the timing of the refund may vary depending on your financial provider."
    },
    {
      id: 14,
      question: "What is the warranty policy at Nth Degree?",
      ans: "We offer a comprehensive warranty on our luxury outdoor furniture. For detailed information on warranty coverage and duration, please refer to our warranty policy or contact our customer service team."
    },
    {
      id: 15,
      question: "What payment methods are accepted for purchasing luxury outdoor furniture at Nth Degree?",
      ans: "We accept a wide range of payment methods, including major credit cards and alternative payment platforms, ensuring convenience and flexibility for our customers."
    },
    {
      id: 16,
      question: "Is there an option for instalment payments or financing plans?",
      ans: "Yes, we offer Klarna to create flexible financing plans to accommodate your preferences and budget, allowing you to enjoy our luxury outdoor furniture without worry."
    },
    {
      id: 17,
      question: "When will my card be charged?",
      ans: "Your card will typically be charged at the time of purchase, once your order is confirmed. This ensures prompt processing and fulfilment of your luxury outdoor furniture order."
    },
    {
      id: 18,
      question: "How can I become a member and get 10% off?",
      ans: "To become a member, create an account or sign in, then add the membership to your basket and complete the purchase. Once this is done, every time you log in and add items to your basket, your membership discount will be automatically applied. The membership will need to be purchased before you make your full order to make sure your 10% off gets added to your basket."
    },
    {
      id: 19,
      question: "What benefits do I get with the membership?",
      ans: "As a member, you enjoy 10% off everything all year round, free white glove delivery, exclusive VIP events, and first look at new products and offers."
    },
    {
      id: 20,
      question: "How can I cancel my membership?",
      ans: "If you wish to cancel your membership, please contact our customer service team, and they will assist you with the cancellation process."
    }
  ];
  useEffect(()=>{
    Aos.init();
      },[])
  return (
    <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
      <Nav />
      <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
  <ul>
    <li><a>Home</a></li>
    <li><a>FAQS</a></li>
  </ul>
</div>
     <div className="w-full bg_home">
      <div className="w-full mx-auto md:px-20 text-left px-5  text-white py-24 md:py-52" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
     <span className="my-10 test-xs text-left w-1/12 mx-auto" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">FAQS</span>
        <h1 className='yeseva text-2xl md:text-6xl ' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Frequently Asked Question's
        </h1>
      </div>
     </div>
    
       <div className=" w-full block ">
      <div className="w-full  container mx-auto text-center px-10 py-12 md:py-24">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">General Questions</h2>
   
      <div>
      {questions.slice(0, 7).map((question) =>
      <div
        key={question.id} 
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      >
        <div className="collapse-title text-xl font-light text-left" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{question.question}</div>
        <hr  className='border-stone-500 border-b my-2' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    )}
  </div>
      </div>
     
     </div>
     
       <section class="bg-stone-200 text-stone-700 " id='shipping'>
       <div class=" w-full  px-5 md:px-20 py-24 mx-auto" >
          <div class="flex flex-col text-left w-full mb-12">
           <h1 class="text-xl md:text-5xl my-4 px-10 text-stone-700 yeseva  " data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Shipping Questions</h1>
         </div>
         {questions.slice(7, 9).map((question) =>
      <div
        key={question.id}
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      >
        <div className="collapse-title text-xl font-light text-left" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{question.question}</div>
        <hr  className='border-stone-500 border-b my-2' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    )}
     </div>
     </section>
       <div className=" w-full block ">
      <div className="w-full  container mx-auto text-center px-10 py-12 md:py-24">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'>Returns Questions </h2>
   
      <div>
      {questions.slice(9, 14).map((question) =>
      <div
        key={question.id}
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      >
        <div className="collapse-title text-xl font-light text-left">{question.question}</div>
        <hr  className='border-stone-500 border-b my-2'/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    )}
  </div>
      </div>
     
     </div>
     
       <section class="bg-stone-200 text-stone-700 " id='Membership'>
       <div class=" w-full  px-5 md:px-20 py-24 mx-auto" >
          <div class="flex flex-col text-left w-full mb-12">
           <h1 class="text-xl md:text-5xl my-4 px-10 text-stone-700 yeseva " data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Payment Questions</h1>
         </div>
         {questions.slice(14, 17).map((question) =>
      <div
        key={question.id}
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      >
        <div className="collapse-title text-xl font-light text-left" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{question.question}</div>
        <hr  className='border-stone-500 border-b my-2' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    )}
     </div>
     </section>
     <div className=" w-full block ">
      <div className="w-full  container mx-auto text-center px-10 py-12 md:py-24">
      <h2 className='yeseva text-2xl md:text-4xl md:text-left text-center my-4'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">Membership Questions</h2>
   
      <div>
      {questions.slice(17, 20).map((question) =>
      <div
        key={question.id}
        tabIndex={0}
        className="collapse collapse-plus  my-4 "
      >
        <div className="collapse-title text-xl font-light text-left"data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{question.question}</div>
        <hr  className='border-stone-500 border-b my-2'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100"/>
        <div className="collapse-content text-left">
          <p>{question.ans}</p>
        </div>
      </div>
    )}
  </div>
      </div>
     
     </div>
      <Footer/>
    </div>
  );
};

export default FAQS;
