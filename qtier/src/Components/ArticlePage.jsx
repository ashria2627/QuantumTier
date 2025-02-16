import { useParams } from 'react-router-dom';import React, { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Aos from 'aos'
import 'aos/dist/aos.css'

const ArticlePage = () => {
     useEffect(()=>{
        Aos.init();
          },[])
  const articles = [
    {
      id: 1,
      title: "Tips to Look After Your Outdoor Furniture in Winter",
      date: "December 13, 2024",
      author: "Beth Nuttall",
      about: (
        <div>
          <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
          <p>Luxury outdoor furniture is an investment. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
          <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
          <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
<br /><br />
Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
<br />
          <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
          <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
<br />
However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
<br />
Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
        </div>
      ), 
      about2: (
        <div>
          <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
          <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
<br /><br />
Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
          <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
          <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
<br /><br />
Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
       
        </div>
      ),  
       image: "https://i.pinimg.com/736x/78/d8/d3/78d8d30089b2a52bce0842e1c537dbc5.jpg",
      category: "CARE"
    },
    {
      id: 2,
      title: "What is the Best Material for Outdoor Furniture in the Sun?",
      date: "July 31, 2024",
      author: "Courtney Holt",
      about: (
        <div>
          <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
          <p>Luxury outdoor furniture is an investment. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
          <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
          <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
<br /><br />
Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
<br />
          <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
          <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
<br />
However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
<br />
Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
        </div>
      ), 
      about2: (
        <div>
          <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
          <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
<br /><br />
Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
          <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
          <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
<br /><br />
Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
       
        </div>
      ),      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P16_LUXURYOUTDOOR_detail02.png?v=1710933719&width=560",
      category: "LUXURY"
    },
    {
      id: 3,
      title: "Why Choose Grey Outdoor Furniture?",
      date: "July 17, 2024",
      author: "Courtney Holt",
      summary: "Grey outdoor furniture has become increasingly popular for its versatility, elegance, and ability to blend seamlessly with various design aesthetics...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P18_LUXURY_UKCOUNTRY_cam11.png?v=1711040120&width=560",
        category: "CARE",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
            <p>Grey outdoor furniture has become increasingly popular for its versatility, elegance, and ability to blend seamlessly with various design aesthetics. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ),  
    },
    {
      id: 4,
      title: "The Most Durable Fabric for Outdoor Furniture",
      date: "July 17, 2024",
      author: "Courtney Holt",
      summary: "When it comes to choosing the right fabric for outdoor furniture, durability is a key factor. Outdoor furniture faces harsh conditions such as sun exposure, rain, wind, and even snow...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Presentation.jpg?v=1711040491&width=560",
        category: "CARE",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
            <p>When it comes to choosing the right fabric for outdoor furniture, durability is a key factor. Outdoor furniture faces harsh conditions such as sun exposure, rain, wind, and even snow. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ),  
    },
    {
      id: 5,
      title: "Is it Worth Investing in Expensive Garden Furniture?",
      date: "June 25, 2024",
      author: "Leah Taylor",
      summary: "When it comes to creating a serene and stylish outdoor space, garden furniture plays a pivotal role in transforming a plain backyard into a luxurious oasis...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Untitled_design_981e7985-089f-49a9-8427-de100b65dc88.png?v=1737130010&width=900",
        category: "CARE",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
            <p>Lhen it comes to creating a serene and stylish outdoor space, garden furniture plays a pivotal role in transforming a plain backyard into a luxurious oasis. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ),  
    },
    {
      id: 6,
      title: "Can You Use Outdoor Furniture Indoors?",
      date: "June 25, 2024",
      author: "Courtney Holt",
      summary: "Summer is on the horizon meaning nicer weather and higher temperatures. This also means there is an increase in luxury outdoor living trends...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N2_Dark_lifestyle.png?v=1733933194&width=560",
        category: "LUXURY",
        about: (
          <div>
            <h3 className='text-xl'><strong>Can You Use Outdoor Furniture Indoors?</strong></h3> <br />
            <p>Summer is on the horizon meaning nicer weather and higher temperatures. This also means there is an increase in luxury outdoor living trends. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 7,
      title: "The Rise of Design-Led Garden Furniture",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "In a world where connectivity and fluidity reign supreme, the distinction between indoor and outdoor living has become increasingly blurred...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/3_Photoshop.jpg?v=1720264856&width=560",
        category: "LATEST",
        about: (
          <div>
            <h3 className='text-xl'><strong>Rise of Design-Led Garden Furniture</strong></h3> <br />
            <p>In a world where connectivity and fluidity reign supreme, the distinction between indoor and outdoor living has become increasingly blurred.Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 8,
      title: "Evolution of Rattan Furniture",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "For decades, rattan outdoor furniture has been a staple in gardens, patios and poolside retreats around the world. Its natural charm, durability and timeless appeal have made it a favourite...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N7-lifestyle-9.jpg?v=1721203462&width=560",
        category: "LATEST",
        about: (
          <div>
            <h3 className='text-xl'><strong>Evolution of Rattan Furnitur</strong></h3> <br />
            <p>For decades, rattan outdoor furniture has been a staple in gardens, patios and poolside retreats around the world. Its natural charm, durability and timeless appeal have made it a favourite. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 9,
      title: "Outdoor Furniture Trends for 2024",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Step into the world of outdoor luxury with the top trends for outdoor furniture in 2024. As the boundaries between indoor and outdoor living continue to blur, it's essential to...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N1-dark-teak-lifestyle-6.png?v=1719306798&width=560",
        category: "LATEST",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
            <p>Step into the world of outdoor luxury with the top trends for outdoor furniture in 2024. As the boundaries between indoor and outdoor living continue to blur, it's essential to. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 10,
      title: "Somerset's Idyllic Countryside Retreat",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Nestled amidst the picturesque landscapes of Somerset, a lavish new residence emerges, exuding elegance and sophistication...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/N6-corner-sofa-214-coal-close-up-portrait.jpg?v=1719321465&width=560",
        category: "LUXURY",
        about: (
          <div>
            <h3 className='text-xl'><strong>Somerset's Idyllic Countryside Retreat</strong></h3> <br />
            <p>Nestled amidst the picturesque landscapes of Somerset, a lavish new residence emerges, exuding elegance and sophistication. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 11,
      title: "Caring for Your Teak Wood",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "All of Nth Degree's Collections are crafted using meticulously chosen materials that adhere to the most stringent quality criteria...",
      image: "https://nthdegree.co.uk/cdn/shop/articles/ECO_P16_LUXURYOUTDOOR_cam3.png?v=1710933517&width=560",
        category: "INDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips on Caring for Your Teak Wood</strong></h3> <br />
            <p>All of Nth Degree's Collections are crafted using meticulously chosen materials that adhere to the most stringent quality criteria. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 12,
      title: "Luxury Italian Living",
      date: "March 07, 2024",
      author: "Beth Nuttall",
      summary: "Outdoor living should be synonymous with luxury and relaxation. There's nothing quite like the allure of spending time outdoors, surrounded by the beauty of nature and the comforts of your...",
      image: "https://i.pinimg.com/736x/08/e5/3b/08e53bb9ec52f441e84f9cd50cf90dd8.jpg",
        category: "INDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look After Your Outdoor Furniture in Winter</strong></h3> <br />
            <p>Outdoor living should be synonymous with luxury and relaxation. There's nothing quite like the allure of spending time outdoors, surrounded by the beauty of nature and the comforts of your.Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 13,
      title: "Sustainability in Outdoor Furniture",
      date: "February 20, 2024",
      author: "Beth Nuttall",
      summary: "Focusing on eco-conscious materials and production methods, sustainability in outdoor furniture design has taken center stage in recent years...",
      image: "https://i.pinimg.com/736x/74/ca/bd/74cabd898e16f524b518404acbd47801.jpg",
        category: "INDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips on Sustainability in Outdoor Furniture</strong></h3> <br />
            <p>Focusing on eco-conscious materials and production methods, sustainability in outdoor furniture design has taken center stage in recent years. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 14,
      title: "Maximising Your Outdoor Space",
      date: "February 13, 2024",
      author: "Courtney Holt",
      summary: "Discover creative ways to make the most of your outdoor areas, from smart furniture layouts to multifunctional designs for every type of garden.",
      image: "https://i.pinimg.com/736x/1c/4e/b8/1c4eb82dfd129cde44696471a9f9ed3f.jpg",
        category: "OUTDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips on Maximising Your Outdoor Space</strong></h3> <br />
            <p>Discover creative ways to make the most of your outdoor areas, from smart furniture layouts to multifunctional designs for every type of garden. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 15,
      title: "The Timeless Appeal of Teak",
      date: "January 29, 2024",
      author: "Beth Nuttall",
      summary: "Teak's durability and elegant appearance make it a top choice for outdoor furniture, providing both beauty and resilience against harsh weather.",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Camera_6_Sun_loungers_Dining_set_Final.jpg?v=1711039010&width=560",
        category: "OUTDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to Look The Timeless Appeal of Teak</strong></h3> <br />
            <p>Teak's durability and elegant appearance make it a top choice for outdoor furniture, providing both beauty and resilience against harsh weather. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    },
    {
      id: 16,
      title: "How to Choose the Right Outdoor Sofa",
      date: "January 15, 2024",
      author: "Leah Taylor",
      summary: "Selecting an outdoor sofa involves balancing comfort, style, and durability. Explore key considerations when choosing the perfect seating for your garden.",
      image: "https://nthdegree.co.uk/cdn/shop/articles/Camera_2_3_seater_sofa_armchairs_Final_300dpi.jpg?v=1721047765&width=560",
        category: "OUTDOOR",
        about: (
          <div>
            <h3 className='text-xl'><strong>Tips to choose the Right Outdoor Sofa</strong></h3> <br />
            <p>electing an outdoor sofa involves balancing comfort, style, and durability. Explore key considerations when choosing the perfect seating for your garden. Constructed with hard-wearing materials that can handle exposure to the elements with ease, our garden furniture is built to last, and will continue to be the perfect addition to your home’s outdoor area. To protect your investment and ensure your Nth Degree furniture retains its longevity, we recommend a little care and attention, particularly during the winter months, when you’ll be using your patio less regularly. Find out how to care for your luxury patio furniture below.</p> <br /><br />
            <h3 className='text-xl'><strong>How to care for outdoor furniture</strong></h3> <br />
            <p>Caring for your outdoor furniture will keep your patio looking fantastic come spring. The overall care process can be summed up into two key areas – protection and maintenance. Protecting your outdoor furniture from long-term exposure to rain, snow and ice during the winter months can be done with a number of storage solutions, including our dedicated seat covers. 
  <br /><br />
  Meanwhile, maintaining the teak wood used in your furniture will help retain its look, feel and protection against UV rays. This can be achieved through the use of our maintenance kits.</p><br />
  <br />
            <h3 className='text-xl'><strong>How to care for teak outdoor furniture</strong></h3> <br />
            <p>Our luxury outdoor furniture is constructed with teak, a hard-wearing, high-density wood, with excellent moisture resistance and longevity. One of teak’s most famous and sought-after characteristics is its natural ability to develop a unique patina with exposure to the elements, turning from a golden brown to a distinguished silvery grey over time. 
  <br />
  However, we still recommend the use of teak oil and teak protector, to prevent over-exposure and ensure an even and subtle aged look. Designed to guard against UV damage and prevent uneven weathering in the event of partial exposure to sunlight – such as in partially shaded gardens – our teak maintenance kits ensure that your outdoor patio furniture retains the exact look you desire.
  <br />
  Protection against UV damage is just as important in winter as in summer – winter sun may not be warm, but these potentially harmful rays are still present. Available in light teak, medium teak and dark teak to match the colour profile and finish of your furniture, our maintenance kits should be applied at least once a year. If you prefer your furniture to retain its brand-new look and box-fresh colour profile, our teak oil and protector can be applied more regularly. </p>
          </div>
        ), 
        about2: (
          <div>
            <h3 className='text-xl'><strong>Luxury outdoor furniture covers</strong></h3> <br />
            <p>Thankfully, there’s a way to keep your luxury patio furniture protected through every season – whether you have a pergola or not! Each one of our outdoor furniture collections includes tailored, custom-fit furniture covers to protect your furniture through winter, without having to move your dining tables, chairs or coffee tables. 
  <br /><br />
  Easy to put on and take off (particularly helpful for our famously indecisive British weather!), our luxury furniture covers are crafted with high-quality, weather-resistant materials, shielding your Nth Degree furniture from rain, snow and UV rays with ease. </p> <br /><br />
            <h3 className='text-xl'><strong>Getting outdoor furniture ready for spring</strong></h3> <br />
            <p>With a little time, love and care spent looking after your outdoor patio furniture through the winter months, you’ll find that your outdoor area is perfectly prepared to host guests in the spring sun. 
  <br /><br />
  Whether you’re looking to host your family for an al-fresco easter experience or usher in the summer a little early with the first barbecue of the year, your Nth Degree furniture will be ready for you. </p>
         
          </div>
        ), 
    }
  ];  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  if (!article) {
    return <p>Article not found</p>;
  }
  
  
  return (
    <div className='overflow-x-hidden josefin bg-white text-stone-700 font-light '>
      <Nav />
      <div className="breadcrumbs text-sm ml-auto px-10 py-5 font-bold">
  <ul>
    <li><Link to={'/'} >Home</Link></li>
    <li><Link to={'/journal'}>journal</Link></li>
  <li><a className='pt-1'>{article.category}</a></li>
  </ul>
</div>
     <div className="w-full ">
      <div className="w-full mx-auto md:px-20 text-center px-5   pt-24 " >
    
        <h1 className='yeseva text-2xl md:text-5xl  mb-10' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{article.title}     </h1>
        <span className="my-10 test-xs text-left w-1/12 mx-auto" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{article.date} . {article.author}</span>
        <p className="my-10 test-sm text-left mx-auto" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{article.about}</p>
      </div>
     </div>
    
       <div className=" w-full block ">
 
    
   
      <img src={article.image} alt={article.title}data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100" className='mx-auto w-10/12 h-screen shadow-xl md:w-8/12 my-10 object-cover object-center' />
      
      <p className="my-10 test-sm md:px-20 text-center px-5  md:text-left mx-auto" data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">{article.about2}</p>
   
     
     </div>
     
       <section class="bg-stone-200 text-stone-700 " id='shipping'>
       <div class=" w-full  px-5  pt-24 mx-auto" >
       <h2 className='yeseva text-2xl px-5 md:px-20 md:text-5xl md:text-left text-center my-12'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">MORE JOURNALS</h2>
   
       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-12  mx-auto ">
         {articles.slice(3,6).map((img) =>
      <div key={img.id} className='' data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">
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
    )}</div>
     </div>
     </section>
   
      <Footer/>
    </div>
  );
};
export default ArticlePage;