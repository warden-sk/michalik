/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

function Contact() {
  return (
    <>
      <div fontSize="6" id="contact">
        Contact
      </div>
      <div>
        <div fontWeight="500">Ing. arch. Mário Michalík</div>
        <div>Jeseniova 846/27, 130 00 Praha 3</div>
      </div>
      <div spaceY="2">
        <div alignItems="center" display="flex" spaceX="2">
          <MailIcon />
          <div>mario@michalik.studio</div>
        </div>
        <div alignItems="center" display="flex" spaceX="2">
          <PhoneIcon />
          <div>+421 917 806 935</div>
        </div>
      </div>
    </>
  );
}

export default Contact;
