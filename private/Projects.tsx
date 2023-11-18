/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import projects from './helpers/projects';
import ProjectsProject from './ProjectsProject';
import Text from './Text';

function Projects() {
  return (
    <div id="projects" spaceY="8">
      <Text size={6}>Projects</Text>
      <div className="Projects" display="grid" gap="4" gridTemplateColumns={['1', { '#': '2', '##': '3' }]}>
        {projects.map((project, i) => (
          <ProjectsProject {...project} i={projects.length - 1 - i} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
