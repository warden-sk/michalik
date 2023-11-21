/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';
import type { Project } from './helpers/types';

type P = {
  i: number;
  j: number;
  project: Project;
  set: React.Dispatch<React.SetStateAction<[number, number]>>;
};

function T({ i, j, project, set }: P) {
  const row = project.rows[i]?.[j];

  const moveLeft = (i: number, j: number): [number, number] => {
    const isFirstPhotoInRow = j === 0;
    const isFirstRow = i === 0;

    if (!isFirstPhotoInRow) {
      // Move left within the same row
      return [i, j - 1];
    } else if (!isFirstRow) {
      // Move to the last photo of the previous row
      const previousRowLastPhotoIndex = project.rows[i - 1]!.length - 1;
      return [i - 1, previousRowLastPhotoIndex];
    } else {
      // Reached the beginning, optionally loop back to the end
      const lastRowIndex = project.rows.length - 1;
      const lastRowLastPhotoIndex = project.rows[lastRowIndex]!.length - 1;
      return [lastRowIndex, lastRowLastPhotoIndex];
    }
  };

  const moveRight = (i: number, j: number): [number, number] => {
    const isLastPhotoInRow = j === project.rows[i]!.length - 1;
    const isLastRow = i === project.rows.length - 1;

    if (!isLastPhotoInRow) {
      // Move right within the same row
      return [i, j + 1];
    } else if (!isLastRow) {
      // Move to the first photo of the next row
      return [i + 1, 0];
    } else {
      // Reached the end, optionally loop back to the start
      return [0, 0];
    }
  };

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        set(moveLeft(i, j));
      }

      if (event.key === 'ArrowRight') {
        set(moveRight(i, j));
      }

      if (event.key === 'Escape') {
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [i, j]);

  if (row) {
    return (
      <div className="Photos">
        <div alignItems="center" display="flex" height="100" width="100">
          <Photo key={row} url={`./projects/${project.id}/${row}`} />
        </div>
      </div>
    );
  }
}

function Photos({ project }: { project: Project }) {
  const [[i, j], set] = React.useState<[number, number]>([-1, -1]);

  if (project.rows.length) {
    return (
      <>
        {ReactDOM.createPortal(<T i={i} j={j} project={project} set={set} />, document.querySelector('#Photos')!)}
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
