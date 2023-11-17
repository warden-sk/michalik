/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import LeftArrowIcon from './icons/LeftArrowIcon';

function ProjectsButton() {
  return (
    <a href="#/">
      <div alignItems="center" display="flex" opacity="50" spaceX="2">
        <LeftArrowIcon />
        <div fontWeight="500">Projects</div>
      </div>
    </a>
  );
}

export default ProjectsButton;
