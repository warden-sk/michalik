/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Contact';
import Container from './Container';
import context from './helpers/context';
import useHashUrl from './helpers/useHashUrl';
import './index.css';
import ProjectPage from './ProjectPage';
import Projects from './Projects';
import Text from './Text';

const ProjectPagePattern = /\/project\/(.+)/;

const labels: [string, string][] = [
  // ['Services', '#services'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
  ['Bēhance', 'https://www.behance.net/mariomichalik'],
];

function Client() {
  const [url, setUrl] = React.useState<string>('/');

  return (
    <context.Provider value={{ setUrl, url }}>
      <Router />
    </context.Provider>
  );
}

function Router() {
  const url = useHashUrl();

  if (ProjectPagePattern.test(url)) {
    const [, id] = ProjectPagePattern.exec(url)!;

    return <ProjectPage id={id!} />;
  }

  return (
    <>
      <div pY="8">
        <Container spaceY="8">
          <div>
            <Text fontWeight="500" size={8}>
              Mário Michalík
            </Text>
            <Text className="Description" size={5} width={['100', { '###': '9/12' }]}>
              I run a Prague-based creative studio that focuses on architectural design solutions. In addition to
              providing design services, I have the ability to handcraft unique stories using a variety of visual tools.
              Whether it's through still images, <a href="#/project/aenean-eleifend">360° panoramas</a>, or animations,
              I bring your projects to life.
            </Text>
          </div>
          <div display="flex" spaceX="2">
            {labels.map(([label, url]) => {
              const isBēhance = label === 'Bēhance' ? true : undefined;

              return (
                <a
                  className="Label"
                  cursor="pointer"
                  href={url}
                  key={label}
                  pX="3"
                  pY="1"
                  style={{
                    backgroundColor: isBēhance && '#0057ff',
                    color: isBēhance && '#fff',
                  }}
                  target={/^https/.test(url) ? '_blank' : '_self'}
                >
                  <Text icon={isBēhance && 'LinkIcon'}>{label}</Text>
                </a>
              );
            })}
          </div>
          <Projects />
        </Container>
      </div>
      <Contact />
    </>
  );
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.querySelector('#client')!);

  root.render(<Client />);
}

export default <div id="client" />;
