/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Container';
import { MailIcon, PhoneIcon } from './icons';
import './index.css';
import ProjectPage, { ProjectPagePattern } from './ProjectPage';
import projects from './projects';
import ProjectsProject from './ProjectsProject';
import useHashUrl from './useHashUrl';

const labels: [string, string][] = [
  ['Projects', '#projects'],
  ['Contact', '#contact'],
  ['Bēhance', 'https://www.behance.net/mariomichalik'],
];

function Client() {
  const url = useHashUrl();

  if (ProjectPagePattern.test(url)) {
    return <ProjectPage url={url} />;
  }

  return (
    <>
      <div pY="8">
        <Container spaceY="8">
          <div>
            <div fontSize="8">Mário Michalík</div>
            <div textAlign="justify" width={['100', { '###': '6/12' }]}>
              I run a Prague-based creative studio that focuses on architectural design solutions. In addition to
              providing design services, I have the ability to handcraft unique stories using a variety of visual tools.
              Whether it's through still images, 360° panoramas, or animations, I bring your projects to life.
            </div>
          </div>
          <div display="flex" spaceX="2">
            {labels.map(([label, url]) => (
              <a
                className="Label"
                cursor="pointer"
                href={url}
                key={label}
                pX="3"
                pY="1"
                target={/^https/.test(url) ? '_blank' : '_self'}
              >
                {label}
              </a>
            ))}
          </div>
          <div fontSize="6" id="projects">
            Projects
          </div>
          <div className="Projects" display="grid" gap="4" gridTemplateColumns={['1', { '#': '2', '##': '3' }]}>
            {projects.map((project, i) => (
              <ProjectsProject {...project} i={projects.length - 1 - i} key={project.id} />
            ))}
          </div>
        </Container>
      </div>
      <div className="Contact" pY="8">
        <Container spaceY="8">
          <div fontSize="6" id="contact">
            Contact
          </div>
          <div>
            <div fontWeight="500">Ing. arch. Mário Michalík</div>
            <div>Jeseniova 846/27, 130 00 Praha 3</div>
          </div>
          <div spaceY="2">
            <div alignItems="center" display="flex" spaceX="2">
              <MailIcon />
              <div>mario@michalik.studio</div>
            </div>
            <div alignItems="center" display="flex" spaceX="2">
              <PhoneIcon />
              <div>+421 917 806 935</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.querySelector('#client')!);

  root.render(<Client />);
}

export default <div id="client" />;
