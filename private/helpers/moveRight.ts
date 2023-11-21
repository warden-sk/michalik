/*
 * Copyright 2023 Marek Kobida
 */

import type { Project } from './types';

function moveRight(i: number, j: number, project: Project): [number, number] {
  const isLastPhotoInRow = j === project.rows[i]!.length - 1;
  const isLastRow = i === project.rows.length - 1;

  if (!isLastPhotoInRow) {
    return [i, j + 1];
  }

  if (!isLastRow) {
    return [i + 1, 0];
  }

  return [0, 0];
}

export default moveRight;
