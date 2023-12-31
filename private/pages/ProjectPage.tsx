/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Container from '../components/Container';
import Text from '../components/Text';
import Contact from '../Contact';
import projects from '../helpers/projects';
import Photos from '../Photos';
import ProjectsButton from '../ProjectsButton';

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
                <Text size={5}>{project.description}</Text>
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
                    <Text fontWeight="500" size={4}>
                      Where
                    </Text>
                    <Text>{project.where}</Text>
                  </div>
                  <div spaceY="2" textAlign="right">
                    <Text fontWeight="500" size={4}>
                      When
                    </Text>
                    <Text>{project.when}</Text>
                  </div>
                </div>
              </div>
            </div>
            <Photos project={project} />
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
        <Text fontWeight="500" lineHeight="2" size={8}>
          Error
        </Text>
        <Text size={5}>The project does not exist.</Text>
      </div>
    </Container>
  );
}

export default ProjectPage;
