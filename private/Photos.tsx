/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Close from '../../applications/common/icons/Close';
import Left from '../../applications/common/icons/Left';
import Right from '../../applications/common/icons/Right';
import Photo from './components/Photo';
import moveLeft from './helpers/moveLeft';
import moveRight from './helpers/moveRight';
import type { Project } from './helpers/types';

type P = {
  i: number;
  j: number;
  project: Project;
  set: React.Dispatch<React.SetStateAction<[number, number]>>;
};

function Test({ i, j, project, set }: P) {
  const row = project.rows[i]?.[j];

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        set(moveLeft(i, j, project));
      }

      if (event.key === 'ArrowRight') {
        set(moveRight(i, j, project));
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [i, j]);

  if (row) {
    return (
      <div className="Photos">
        <Close cursor="pointer" onClick={() => set(moveLeft(-1, -1, project))} />
        <Left cursor="pointer" onClick={() => set(moveLeft(i, j, project))} />
        <div alignItems="center" display="flex" height="100" justifyContent="center" width="100">
          <Photo key={row} url={`./projects/${project.id}/${row}`} />
        </div>
        <Right cursor="pointer" onClick={() => set(moveRight(i, j, project))} />
      </div>
    );
  }
}

function Photos({ project }: { project: Project }) {
  const [[i, j], set] = React.useState<[number, number]>([-1, -1]);

  if (project.rows.length) {
    return (
      <>
        {ReactDOM.createPortal(<Test i={i} j={j} project={project} set={set} />, document.querySelector('#Photos')!)}
        <div display="grid" gap="4">
          {project.rows.map((rows, i) => (
            <div display="grid" gap="4" gridTemplateColumns={['1', { '#': rows.length.toString() as '1' }]} key={i}>
              {rows.map((row, j) => (
                <Photo cursor="pointer" key={row} onClick={() => set([i, j])} url={`./projects/${project.id}/${row}`} />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Photos;
