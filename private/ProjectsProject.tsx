/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Photo from './components/Photo';
import Text from './components/Text';
import type { Project } from './helpers/types';

type P = Project & {
  i: number;
};

function ProjectsProject({ i, id, labels, name, photoUrl }: P) {
  return (
    <a className="ProjectsProject" href={`#/project/${id}`} spaceY="2">
      <Text size={6}>{(i + 1).toString().padStart(3, '0')}</Text>
      <Photo labels={labels} url={`https://michalik.studio/projects/${id}/${photoUrl}`} />
      <Text fontWeight="500" lineHeight="2" size={4}>
        {name}
      </Text>
    </a>
  );
}

export default ProjectsProject;
