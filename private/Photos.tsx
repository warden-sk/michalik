/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';
import type { Project } from './helpers/types';

function Photos({ project }: { project: Project }) {
  const [[i, j], set] = React.useState<[number, number]>([-1, -1]);

  if (project.rows.length) {
    const row = project.rows[i]?.[j];

    return (
      <>
        {row &&
          ReactDOM.createPortal(
            <div className="Photos">
              <div alignItems="center" display="flex" height="100" width="100">
                <Photo key={row} url={`./projects/${project.id}/${row}`} />
              </div>
            </div>,
            document.querySelector('#Photos')!,
          )}
        <div display="grid" gap="4">
          {project.rows.map((rows, i) => (
            <div display="grid" gap="4" gridTemplateColumns={['1', { '#': rows.length.toString() as '1' }]} key={i}>
              {rows.map((row, j) => (
                <Photo key={row} onClick={() => set([i, j])} url={`./projects/${project.id}/${row}`} />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Photos;
