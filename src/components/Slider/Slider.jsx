import React, { useState } from "react";
import "./Slider.scss";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import watch1 from '../../assets/image/watch-1.webp'
import watch2 from '../../assets/image/watch-2.webp'
import watch3 from '../../assets/image/watch-3.webp'
const slides = [
  {
    img:watch1,
    title: "Luxury ",
    title2: "Brands",
  },
  {
    img:watch2 ,
    title: "World's",
    title2: "Designs",
  },
  {
    img: watch3,
    title: "Newest ",
    title2: "Models",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { img, title, title2 } = slides[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > slides.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
    
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 2;
      }
      return newIndex;
    });
    
  };
  return (
    <div className="slider">
      <motion.div className="slides" initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, }} >
        <h1>{title}</h1>
        <motion.img
          animate={{ y: [-25,25]}}
          transition={{  duration: 2, yoyo:Infinity }}
         
          src={img}
          alt=""
        />
        <h1>{title2}</h1>
      </motion.div>
      <div className="buttons">
        <div className="item" onClick={prevPerson}>
          <IoIosArrowBack />
          <button >PREVIOUS</button>
          <span></span>
        </div>
       
        <div className="item" onClick={nextPerson}>
        <span></span>
          <button >NEXT</button>
          <IoIosArrowForward />
          
        </div>
      </div>
    </div>
  );
};

export default Slider;
