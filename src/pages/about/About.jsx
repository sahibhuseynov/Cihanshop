import React from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import "./About.scss";
import aboutImg1 from "../../assets/image/about1.webp";
import personImg1 from "../../assets/image/person1.webp";
import personImg2 from "../../assets/image/person2.webp";
import personImg3 from "../../assets/image/person3.webp";
import common from "../../assets/image/common.webp";
import Helmet from "../../components/Helmet/Helmet";

const About = () => {
  return (
    <Helmet title={'About'}>
      
        <CommonSection title="About" img={common} />
        <section className="about">
          <div className="hero">
            <div className="left">
              <h2>Professional Watch Repair Services</h2>
              <p>
                Reprizo is a family-owned professional watch and jewelry repair
                store chain located in NewYork. We are experts in fixing and
                repairing watches from world-renowned brands including Rolex,
                Breitling, Bell & Ross, and many other brands. We offer a wi...
              </p>
              <div className="buttons">
                <button>CONTACT US</button>
                <button>WATCH VIDEO</button>
              </div>
            </div>
            <div className="right">
              <img src={aboutImg1} alt="" />
            </div>
          </div>
  
          <div className="iner">
            <div className="item">
              <span>2,568</span>
              <h4>CLIENTS</h4>
            </div>
  
            <div className="item">
              <span>38</span>
              <h4>STORES</h4>
            </div>
            <div className="item">
              <span>11,587</span>
              <h4>ITEMS FIXED</h4>
            </div>
  
            <div className="item">
              <span>58</span>
              <h4>PROFESSIONALS</h4>
            </div>
            <div className="item">
              <span>4</span>
              <h4>LOCATIONS</h4>
            </div>
          </div>
  
          <div className="personal">
            <div className="content">
              <h2>The Best of Professionals</h2>
              <p>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget condimentum rhoncus
              </p>
            </div>
  
            <div className="person">
              <div className="item">
                <div className="gradient"></div>
                <div className="text">
                  <h5>REPAIR MASTER</h5>
                  <span>DAVID PERKINS</span>
                  <div className="social">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <img src={personImg1} alt="" />
              </div>
              <div className="item">
                <div className="gradient"></div>
                <div className="text">
                  <h5>REPAIR MASTER</h5>
                  <span>DAVID PERKINS</span>
                  <div className="social">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <img src={personImg2} alt="" />
              </div>
              <div className="item">
                <div className="gradient"></div>
                <div className="text">
                  <h5>REPAIR MASTER</h5>
                  <span>DAVID PERKINS</span>
                  <div className="social">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <img src={personImg3} alt="" />
              </div>
            </div>
          </div>
        </section>
      
    </Helmet>
  );
};

export default About;
