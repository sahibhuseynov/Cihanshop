import React from "react";
import { Link } from "react-router-dom";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import './Contact.scss'
import contactCommon from '../../assets/image/about.jpg'
const Contact = () => {
  return (
    <>
      <CommonSection title="Contacts" img={contactCommon} />
      <section className="contact">
        <div className="content">
          <div className="item">
            <span>Address</span>
            <p>12 Van Dyke St, Brooklyn, NY 11231</p>
          </div>
          <div className="item">
            <span>Phone</span>
            <Link className="link ">
            1 (800) 123-4567
            </Link>

            <Link className="link ">
            1 (800) 123-4567
            </Link>

          </div>
          <div className="item">
            <span>Mail</span>
            <Link className="link">sales@yoursite.com</Link>
            <Link className="link">hr@yoursite.com</Link>
          </div>
          <div className="item">
            <span>Hours</span>
            <p>Mon - Fri: 8 AM - 6 PM</p>
            <p>Sat: 9 AM - 4 PM</p>
          </div>
        </div>
        <div className="form__control">
          <h2>Drop a Line</h2>
          <form >
              <div className="form__header">
                <div className="left">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="right">
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              
              <input type="text" placeholder="Phone" />
              
              
                  <textarea cols="30" rows="10" placeholder="Message"></textarea>
              
                <button type="submit" className="form__btn">
                    SEND MESSAGE
                </button>
          </form>

        </div>
       

      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8919915106253!2d28.618920414785524!3d41.07135352349096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5598e512bfa95%3A0x94160fc487000c48!2sCihanShop!5e0!3m2!1str!2str!4v1671728014757!5m2!1str!2str" width='100%' height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default Contact;
