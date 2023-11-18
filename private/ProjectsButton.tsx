/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import LeftArrowIcon from './icons/LeftArrowIcon';
import Text from './Text';

function ProjectsButton() {
  return (
    <a href="#/">
      <div alignItems="center" display="flex" opacity="50" spaceX="2">
        <LeftArrowIcon />
        <Text fontWeight="500">Projects</Text>
      </div>
    </a>
  );
}

export default ProjectsButton;
