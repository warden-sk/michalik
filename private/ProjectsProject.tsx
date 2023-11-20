/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Project } from './helpers/types';
import Photo from './Photo';
import Text from './Text';

type P = Project & {
  i: number;
};

function ProjectsProject({ description, i, id, labels, name, photoUrl }: P) {
  return (
    <a className="ProjectsProject" href={`#/project/${id}`} spaceY="2">
      <Text size={6}>{(i + 1).toString().padStart(3, '0')}</Text>
      <Photo labels={labels} url={photoUrl} />
      <div pX="2">
        <Text fontWeight="500" lineHeight="2">
          {name}
        </Text>
        <Text opacity="50">{description[0]}</Text>
      </div>
    </a>
  );
}

export default ProjectsProject;
