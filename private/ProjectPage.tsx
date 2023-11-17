/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Container from './Container';
import projects from './helpers/projects';
import CalendarIcon from './icons/CalendarIcon';
import MapIcon from './icons/MapIcon';
import ProjectsButton from './ProjectsButton';

function ProjectPage({ id }: { id: string }) {
  const project = projects.find(project => project.id === id);

  if (project) {
    return (
      <Container spaceY="8">
        <ProjectsButton />
        <div>
          <div fontSize="8">{project.name}</div>
          <div spaceY="8" width={['100', { '###': '6/12' }]}>
            <div>{project.description[1]}</div>
            {project.labels.length > 0 && (
              <div display="flex" spaceX="2">
                {project.labels.map(label => (
                  <div className="Label" fontSize="2" key={label} pX="3" pY="1">
                    {label}
                  </div>
                ))}
              </div>
            )}
            <div alignItems="center" display="flex" justifyContent="space-around">
              <div spaceY="2" textAlign="left">
                <div alignItems="center" display="flex" justifyContent="flex-start" spaceX="2">
                  <div fontWeight="500">Client</div>
                </div>
                <div>{project.who}</div>
              </div>
              <div spaceY="2" textAlign="center">
                <div alignItems="center" display="flex" justifyContent="center" spaceX="2">
                  <div fontWeight="500">Where</div>
                  <MapIcon />
                </div>
                <div>{project.where}</div>
              </div>
              <div spaceY="2" textAlign="right">
                <div alignItems="center" display="flex" justifyContent="flex-end" spaceX="2">
                  <div fontWeight="500">When</div>
                  <CalendarIcon />
                </div>
                <div>{project.when}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container spaceY="8">
      <ProjectsButton />
      <div>
        <div fontSize="8">Error</div>
        <div>The project does not exist.</div>
      </div>
    </Container>
  );
}

export default ProjectPage;
