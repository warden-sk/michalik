/*
 * Copyright 2023 Marek Kobida
 */

import isUndefined from '@helpers/validation/isUndefined';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../applications/common/index.css';
import Container from './components/Container';
import Text from './components/Text';
import Contact from './Contact';
import context from './helpers/context';
import useHashUrl from './helpers/useHashUrl';
import './index.css';
import ProjectPage from './pages/ProjectPage';
import Projects from './Projects';

const ProjectPagePattern = /\/project\/(.+)/;

const labels: [string, string][] = [
  ['Services', '#services'],
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
          <div spaceY="4">
            <Text size={5} width={['100', { '###': '9/12' }]}>
              I'm Mario Michalik, and I run a creative studio focusing on architectural design solutions. As a freelance
              creator, I support architecture studios, individual architects, and others. In addition to providing
              design services, I have the ability to handcraft unique stories using an array of visual tools. Whether
              it's through still images, 360° panoramas, or animations, I bring projects to life. Some selected works
              provide an overview of the spectrum of my concrete experiences and abilities.
            </Text>
            <Text size={5} width={['100', { '###': '9/12' }]}>
              If you're interested in my approach and work, please feel free to ask for more details. We can discuss the
              entire process from start to finish.
            </Text>
          </div>
          <div display="flex" spaceX="2">
            {labels.map(([label, url]) => {
              // const isBēhance = label === 'Bēhance' ? true : undefined;

              return (
                <a
                  className="Label"
                  href={url}
                  key={label}
                  opacity={label === 'Services' && '50'}
                  pX="4"
                  pY="2"
                  target={/^https/.test(url) ? '_blank' : '_self'}
                >
                  <Text>{label}</Text>
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
  ReactDOM.createRoot(document.querySelector('#client')!).render(<Client />);
}

export default (
  <>
    <div id="Photos" />
    <div id="client" />
  </>
);
