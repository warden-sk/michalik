/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Project } from './helpers/types';
import Text from './Text';

function ProjectsProject({ description, i, id, labels, name, photoUrl }: Project & { i: number }) {
  return (
    <a className="ProjectsProject" href={`#/project/${id}`} spaceY="2">
      <Text size={6}>{(i + 1).toString().padStart(3, '0')}</Text>
      <img borderRadius="3" className="ProjectsProjectPhoto" display="block" src={photoUrl} width="100" />
      <div pX="2" spaceY="2">
        {labels.length > 0 && (
          <div display="flex" spaceX="2">
            {labels.map(label => (
              <Text className="Label" key={label} pX="3" pY="1" size={2}>
                {label}
              </Text>
            ))}
          </div>
        )}
        <div>
          <Text fontWeight="500">{name}</Text>
          <Text opacity="50">{description[0]}</Text>
        </div>
      </div>
    </a>
  );
}

export default ProjectsProject;
