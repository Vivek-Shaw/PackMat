import React, { useEffect, useState } from 'react';
import {heroImg} from '../data';
//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
//import Carousel from './Carousel';
import Boxes from '../assets/Boxes.jpeg'

const Home = () => {
  const [images, setImages] = useState(heroImg);
  // console.log(images);
  return (
   <section className='hero'>
    <div className="hero-banner">
      <h1>PackMat</h1>
      <h5>supply chain solution</h5>
    </div>
   </section>
  );
}

export default Home