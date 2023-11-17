/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Contact';
import Container from './Container';
import useHashUrl from './helpers/useHashUrl';
import './index.css';
import ProjectPage from './ProjectPage';
import Projects from './Projects';

const ProjectPagePattern = /\/project\/(.+)/;

const labels: [string, string][] = [
  ['Projects', '#projects'],
  ['Contact', '#contact'],
  ['Bēhance', 'https://www.behance.net/mariomichalik'],
];

function Client() {
  const url = useHashUrl();

  if (ProjectPagePattern.test(url)) {
    const [, id] = ProjectPagePattern.exec(url)!;

    return <ProjectPage id={id!} />;
  }

  return (
    <>
      <div className="About" pY="8">
        <Container spaceY="8">
          <div>
            <div fontSize="8">Mário Michalík</div>
            <div width={['100', { '###': '6/12' }]}>
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
          <Projects />
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

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.querySelector('#client')!);

  root.render(<Client />);
}

export default <div id="client" />;
