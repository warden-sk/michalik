/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Contact from './Contact';
import Container from './Container';
import projects from './helpers/projects';
import CalendarIcon from './icons/CalendarIcon';
import MapIcon from './icons/MapIcon';
import ProjectsButton from './ProjectsButton';
import Text from './Text';

function ProjectPage({ id }: { id: string }) {
  const project = projects.find(project => project.id === id);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        window.location.hash = '#/';
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (project) {
    return (
      <>
        <div pY="8">
          <Container spaceY="8">
            <ProjectsButton />
            <div>
              <Text fontWeight="500" size={8}>
                {project.name}
              </Text>
              <div spaceY="8" width={['100', { '###': '9/12' }]}>
                <Text size={5}>{project.description[1]}</Text>
                {project.labels.length > 0 && (
                  <div display="flex" spaceX="2">
                    {project.labels.map(label => (
                      <Text className="Label" key={label} pX="3" pY="1" size={2}>
                        {label}
                      </Text>
                    ))}
                  </div>
                )}
                <div alignItems="center" display="flex" justifyContent="space-around">
                  <div spaceY="2" textAlign="left">
                    <div alignItems="center" display="flex" justifyContent="flex-start" spaceX="2">
                      <Text fontWeight="500" size={4}>
                        Client
                      </Text>
                    </div>
                    <Text>{project.who}</Text>
                  </div>
                  <div spaceY="2" textAlign="center">
                    <div alignItems="center" display="flex" justifyContent="center" spaceX="2">
                      <Text fontWeight="500" size={4}>
                        Where
                      </Text>
                      <MapIcon />
                    </div>
                    <Text>{project.where}</Text>
                  </div>
                  <div spaceY="2" textAlign="right">
                    <div alignItems="center" display="flex" justifyContent="flex-end" spaceX="2">
                      <Text fontWeight="500" size={4}>
                        When
                      </Text>
                      <CalendarIcon />
                    </div>
                    <Text>{project.when}</Text>
                  </div>
                </div>
              </div>
            </div>
            <div display="grid" gap="4">
              {project.rows.map(rows => (
                <div display="grid" gap="4" gridTemplateColumns={rows.length.toString() as '1'}>
                  {rows.map(row => (
                    <img className="Photo" display="block" src={row} width="100" />
                  ))}
                </div>
              ))}
            </div>
          </Container>
        </div>
        <div className="Contact" pY="8">
          <Container spaceY="8">
            <Contact />
          </Container>
        </div>
      </>
    );
  }

  return (
    <Container spaceY="8">
      <ProjectsButton />
      <div>
        <Text fontWeight="500" size={8}>
          Error
        </Text>
        <Text size={5}>The project does not exist.</Text>
      </div>
    </Container>
  );
}

export default ProjectPage;
