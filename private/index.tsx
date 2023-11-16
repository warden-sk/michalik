/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import projects from './projects';
import ProjectsProject from './ProjectsProject';

const labels: [string, string][] = [
  ['Projects', '#projects'],
  ['Contact', '#contact'],
  ['Bēhance', 'https://www.behance.net/mariomichalik'],
];

function Client() {
  return (
    <div className="container" mX="auto" pX="4" pY="8">
      <div spaceY="8">
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
              target={/https/.test(url) ? '_blank' : '_self'}
            >
              {label}
            </a>
          ))}
        </div>
        <div fontSize="6" id="projects">
          Projects
        </div>
        <div
          className="Projects"
          display="grid"
          gap="4"
          gridTemplateColumns={['1', { '#': '2', '##': '3', '###': '4' }]}
        >
          {projects.map((project, i) => (
            <ProjectsProject {...project} i={projects.length - 1 - i} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.querySelector('#client')!);

  root.render(<Client />);
}

export default <div id="client" />;
