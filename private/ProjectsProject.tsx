/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Project } from './types';

function ProjectsProject({ description, i, labels, name, photoUrl }: Project & { i: number }) {
  return (
    <div className="ProjectsProject" spaceY="2">
      <div fontSize="6">{(i + 1).toString().padStart(3, '0')}</div>
      <img className="ProjectsProjectPhoto" display="block" src={photoUrl} width="100" />
      {labels.length > 0 && (
        <div display="flex" spaceX="2">
          {labels.map(label => (
            <div className="Label" cursor="pointer" key={label} pX="3" pY="1">
              {label}
            </div>
          ))}
        </div>
      )}
      <div>
        <div>{name}</div>
        <div opacity="50">{description[0]}</div>
      </div>
    </div>
  );
}

export default ProjectsProject;
