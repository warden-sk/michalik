/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Contact from './Contact';
import Container from './Container';
import projects from './helpers/projects';
import Photo from './Photo';
import ProjectsButton from './ProjectsButton';
import Text from './Text';

type P = {
  id: string;
};

function ProjectPage({ id }: P) {
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
              <Text fontWeight="500" lineHeight="2" size={8}>
                {project.name}
              </Text>
              <div spaceY="8" width={['100', { '###': '9/12' }]}>
                <Text size={5}>{project.description[1]}</Text>
                {project.labels.length > 0 && (
                  <div display="flex" spaceX="2">
                    {project.labels.map(label => (
                      <Text className="Label" key={label} pX="4" pY="2">
                        {label}
                      </Text>
                    ))}
                  </div>
                )}
                <div alignItems="center" display="flex" justifyContent="space-around">
                  <div spaceY="2">
                    <Text fontWeight="500" size={4}>
                      Client
                    </Text>
                    <Text>{project.who}</Text>
                  </div>
                  <div spaceY="2" textAlign="center">
                    <Text fontWeight="500" /* justifyContent="center" */ size={4}>
                      Where
                    </Text>
                    <Text>{project.where}</Text>
                  </div>
                  <div spaceY="2" textAlign="right">
                    <Text fontWeight="500" /* justifyContent="flex-end" */ size={4}>
                      When
                    </Text>
                    <Text>{project.when}</Text>
                  </div>
                </div>
              </div>
            </div>
            {project.rows.length > 0 && (
              <div display="grid" gap="4">
                {project.rows.map(rows => (
                  <div display="grid" gap="4" gridTemplateColumns={['1', { '#': rows.length.toString() as '1' }]}>
                    {rows.map(row => (
                      <Photo key={row} url={row} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </Container>
        </div>
        <Contact />
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
