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
            <Link>
            1 (800) 123-4567
            </Link>

            <Link>
            1 (800) 123-4567
            </Link>

          </div>
          <div className="item">
            <span>Mail</span>
            <Link>sales@yoursite.com</Link>
            <Link>hr@yoursite.com</Link>
          </div>
          <div className="item">
            <span>Hours</span>
            <p>Mon - Fri: 8 AM - 6 PM</p>
            <p>Sat: 9 AM - 4 PM</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
