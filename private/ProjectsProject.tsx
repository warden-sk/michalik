/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Project } from './types';

function ProjectsProject({ description, i, id, labels, name, photoUrl }: Project & { i: number }) {
  return (
    <a className="ProjectsProject" href={`#/project/${id}`} spaceY="2">
      <div fontSize="6">{(i + 1).toString().padStart(3, '0')}</div>
      <img className="ProjectsProjectPhoto" display="block" src={photoUrl} width="100" />
      <div pX="2" spaceY="2">
        <div>
          <div fontWeight="500">{name}</div>
          <div opacity="50">{description[0]}</div>
        </div>
        {labels.length > 0 && (
          <div display="flex" spaceX="2">
            {labels.map(label => (
              <div className="Label" fontSize="2" key={label} pX="3" pY="1">
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default ProjectsProject;
