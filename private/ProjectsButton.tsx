/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Text from './components/Text';

function ProjectsButton() {
  return (
    <a href="#/">
      <Text fontWeight="500" icon="LeftArrowIcon" opacity="50">
        Projects
      </Text>
    </a>
  );
}

export default ProjectsButton;
