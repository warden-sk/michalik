/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import { LeftArrowIcon } from './icons';

function AboutButton() {
  return (
    <a href="#/">
      <div alignItems="center" display="flex" opacity="50" spaceX="2">
        <LeftArrowIcon />
        <div fontWeight="500">About</div>
      </div>
    </a>
  );
}

export default AboutButton;
