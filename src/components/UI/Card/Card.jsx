import React from "react";
import "./Card.scss";
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
 
  return (
    <div className="cards">
      <div className="wrapper">
        {data?.map((item) => {
          return (
            <div className="item" key={item.id}>
              
              <img src={item.imgUrl} alt="" />
              <div className="title">
                  <p>{item.productName}</p>
                  <ul>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    
                  </ul>
                  <span>${item.price}</span>
              </div>
              <div className="content">
               <Link to={`product/${item.id}`}  className="link"> <button>VIEW MORE</button></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
