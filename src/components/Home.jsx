import React, { useEffect, useState } from 'react';
import {heroImg} from '../data';
//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
//import Carousel from './Carousel';

const Home = () => {
  const [images, setImages] = useState(heroImg);
  // console.log(images);
  return (
   <section className='hero'>
    <div className="hero-banner">
      <h1>PackMat</h1>
      <h3>supply chain solution</h3>
    </div>
   </section>
  );
}

export default Home