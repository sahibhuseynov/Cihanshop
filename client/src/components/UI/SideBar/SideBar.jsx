import React from 'react'
import { useEffect} from 'react';
import Menu from '../../../assets/data/sideBar';
import { Link } from 'react-router-dom';
import personImg1 from "../../../assets/image/person1.webp";
import { BsSearch} from "react-icons/bs";
import { useSelector } from 'react-redux';
const SideBar = () => {
  const user = useSelector((state) => state.user.user)
  
    useEffect(() => {
        
        document.body.style.overflow = "hidden"
        
       return () => document.body.style.overflow = ""
       
    },[])
    
  return (
    <>
        
           
         
                
                   {
                    user ?  <div className="menu__header">
                    <div className="user__img">
                       <img src={personImg1} alt="" /> 
                    </div>
                    <div className="user__about">
                      <h4>
                         {user.fullname + ' ' + user.lastname}
                        </h4>
                      
                      <span>{user.email}</span>
                    </div>
                </div> : ''
                   }
          
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