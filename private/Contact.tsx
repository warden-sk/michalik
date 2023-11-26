/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Container from './components/Container';
import Text from './components/Text';

function Contact() {
  return (
    <div className="Contact" id="contact" pY="8">
      <Container>
        <div display="grid" gap="4" gridTemplateColumns="3">
          <div spaceY="8">
            <div>
              <a display="block" href="#projects">
                <Text size={4}>Projects</Text>
              </a>
              <a display="block" href="#services">
                <Text size={4}>Services</Text>
              </a>
            </div>
            <div>
              <a display="block" href="https://www.behance.net/mariomichalik" target="_blank">
                <Text size={4}>Bēhance</Text>
              </a>
              <a display="block" href="#">
                <Text size={4}>LinkedIn</Text>
              </a>
            </div>
          </div>
          <div spaceY="8">
            <div>
              <Text fontWeight="500" size={4}>
                Ing. arch. Mário Michalík
              </Text>
              <Text size={4}>Jeseniova 846/27, 130 00 Praha 3</Text>
            </div>
            <div>
              <Text size={4}>mario@michalik.studio</Text>
              <Text size={4}>+421 917 806 935</Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
