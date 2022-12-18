import React from 'react'
import './Inner.scss'
import innerImg from  '../../assets/image/home2.webp'
const Inner = () => {
  return (
    <div className='inner'>
        <div className="wrapper">
            <div className="left">
                <div className="top">
                    <span>01.</span>
                    <h3>Sapphire Crystal</h3>
                    <p>Known for obtaining a remarkable hardness (nearly as hard as a diamond). Has a high scratch resistance which makes it a perfect material for wristwatches.</p>
                </div>
                <div className="bottom">
                    <span>02.</span>
                    <h3>Swiss Ronda Movement</h3>
                    <p>Run by the vibration of a quartz crystal (32,786 times per second) under current to keep accurate time.</p>
                </div>
            </div>
            <div className="center">
                <img src={innerImg} alt="" />
            </div>
            <div className="right">
            <div className="top">
                    <span>03.</span>
                    <h3>316L Stainless Steel</h3>
                    <p>The watch case is made of extra low carbon steel that is often used in surgical instruments and marine appliances thanks to its high corrosion resistance.</p>
                </div>
                <div className="bottom">
                    <span>04.</span>
                    <h3>Italian Leather Straps</h3>
                    <p>The band is made of high-grade Italian eco-leather with a soft nubuck lining for extra comfort. Obtains excellent wearing qualities.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inner