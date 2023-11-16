/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Container';
import './index.css';
import ProjectPage, { ProjectPagePattern } from './ProjectPage';
import projects from './projects';
import ProjectsProject from './ProjectsProject';

const labels: [string, string][] = [
  ['Projects', '#projects'],
  ['Contact', '#contact'],
  ['Bēhance', 'https://www.behance.net/mariomichalik'],
];

function Client() {
  const [url, setUrl] = React.useState<string>('/');

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;

      if (/^#\//.test(hash)) {
        setUrl(hash.replace('#', ''));
      }
    };

    onHashChange();

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <>
      {ProjectPagePattern.test(url) ? (
        <ProjectPage url={url} />
      ) : (
        <>
          <div pY="8">
            <Container spaceY="8">
              <div>
                <div fontSize="8">Mário Michalík</div>
                <div textAlign="justify" width={['100', { '###': '6/12' }]}>
                  I run a Prague-based creative studio that focuses on architectural design solutions. In addition to
                  providing design services, I have the ability to handcraft unique stories using a variety of visual
                  tools. Whether it's through still images, 360° panoramas, or animations, I bring your projects to
                  life.
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
            </Container>
          </div>
        </>
      )}
    </>
  );
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.querySelector('#client')!);

  root.render(<Client />);
}

export default <div id="client" />;
