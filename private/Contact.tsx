/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import Text from './Text';

function Contact() {
  return (
    <>
      <Text id="contact" size={6}>
        Contact
      </Text>
      <div>
        <Text fontWeight="500">Ing. arch. Mário Michalík</Text>
        <Text>Jeseniova 846/27, 130 00 Praha 3</Text>
      </div>
      <div spaceY="2">
        <div alignItems="center" display="flex" spaceX="2">
          <MailIcon />
          <Text>mario@michalik.studio</Text>
        </div>
        <div alignItems="center" display="flex" spaceX="2">
          <PhoneIcon />
          <Text>+421 917 806 935</Text>
        </div>
      </div>
    </>
  );
}

export default Contact;
