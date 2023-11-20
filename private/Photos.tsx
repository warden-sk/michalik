/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Project } from './helpers/types';
import Photo from './Photo';

function Photos({ project }: { project: Project }) {
  const [$, set$] = React.useState<[number, number]>([-1, -1]);

  if (project.rows.length) {
    return (
      <>
        <div display="grid" gap="4">
          {project.rows.map((rows, i) => (
            <div display="grid" gap="4" gridTemplateColumns={['1', { '#': rows.length.toString() as '1' }]} key={i}>
              {rows.map((row, j) => (
                <Photo key={row} onClick={() => set$([i, j])} url={`./projects/${project.id}/${row}`} />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Photos;
