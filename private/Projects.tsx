/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import projects from './helpers/projects';
import ProjectsProject from './ProjectsProject';

function Projects() {
  return (
    <>
      <div fontSize="6" id="projects">
        Projects
      </div>
      <div className="Projects" display="grid" gap="4" gridTemplateColumns={['1', { '#': '2', '##': '3' }]}>
        {projects.map((project, i) => (
          <ProjectsProject {...project} i={projects.length - 1 - i} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default Projects;
