import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import moment from "moment";

const Footer = () => {

const currentYear = moment().year();



  return (
    <div className="footer-container">
      <p>{currentYear} All rights reserverd by Varsil Suvagiya</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer