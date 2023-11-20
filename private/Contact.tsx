/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Container from './Container';
import Text from './Text';

function Contact() {
  return (
    <div className="Contact" id="contact" pY="8">
      <Container spaceY="8">
        <Text size={6}>Contact</Text>
        <div>
          <Text fontWeight="500">Ing. arch. Mário Michalík</Text>
          <Text>Jeseniova 846/27, 130 00 Praha 3</Text>
        </div>
        <div spaceY="2">
          <Text icon="MailIcon">mario@michalik.studio</Text>
          <Text icon="PhoneIcon">+421 917 806 935</Text>
        </div>
        <a display="block" href="https://www.behance.net/mariomichalik">
          <Text icon="LinkIcon">Bēhance</Text>
        </a>
      </Container>
    </div>
  );
}

export default Contact;
