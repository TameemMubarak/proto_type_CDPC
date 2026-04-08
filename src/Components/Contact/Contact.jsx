import React from 'react'
import './Contact.css' 
import msg_icon from '../../assets/msg-icon.png'
// importing icons fromassets
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Sebd us a message <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur id odio at eveniet maxime nobis ut blanditiis dolorem, sequi numquam incidunt consequatur autem libero quis dolores et hic tempore debitis.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@Hogwarts </li>
                <li><img src={phone_icon} alt="" />+91 923-456-788  </li>
                <li> <img src={location_icon} alt="" />77 Dark Avenue Majestic Circle <br />Azakaben,Erbror</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action=""
                // onSubmit={onSubmit}this is while using web3formsss
            >
                <label htmlFor="">Your Name:</label>
                <input type="text" name='name' required/>

                <label htmlFor="">Phone Number :</label>
                <input type="tel" name='phone' required />
            
                <label htmlFor=""> Write Your Message Here </label>
                <textarea name="message"  rows='6' required id=""></textarea>

                <button type='submit' className='btn dark-btn' >Send to Us &nbsp;
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            {/* <span>use web3 forms to get email sending and there itself is the form mail react function just copy and past it here</span> */}
        </div>
    </div>
  )
}

export default Contact
