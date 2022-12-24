import React from 'react'
import { useEffect } from 'react';
import Menu from '../../../assets/data/sideBar';
import { Link } from 'react-router-dom';
import personImg1 from "../../../assets/image/person1.webp";

import { BsSearch} from "react-icons/bs";
const SideBar = (isOpen) => {

    useEffect(() => {
        console.log("sidebar")
        document.body.style.overflow = "hidden"
        
       return () => document.body.style.overflow = ""
       
    },[isOpen])
    
  return (
    <>
        
           
              
                  <div className="menu__header">
                      <div className="user__img">
                         <img src={personImg1} alt="" /> 
                      </div>
                      <div className="user__about">
                        <h4>SAHIB HUSEYNOV</h4>
                        <span>sahib@demo.com</span>
                      </div>
                  </div>
        
                   <div className="menu__navigation">
                            <div className="item searchitem">
                                <BsSearch />
                                <input type="text" placeholder='Search...'/>
                            </div>
                   {
                        Menu.map((item) => (
                            <Link to={item.path}
                            className='link'
                            >
    
                                <div className="item">
                                    {item.icon}
                                    <span>{item.display}</span>
                                </div>
                            </Link>
                        ))
                    }
                  </div> 
              

             
      
              
    </>
       
  )
}

export default SideBar