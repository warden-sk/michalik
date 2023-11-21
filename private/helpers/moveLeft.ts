/*
 * Copyright 2023 Marek Kobida
 */

import type { Project } from './types';

function moveLeft(i: number, j: number, project: Project): [number, number] {
  const isFirstPhotoInRow = j === 0;
  const isFirstRow = i === 0;

  if (!isFirstPhotoInRow) {
    return [i, j - 1];
  }

  if (!isFirstRow) {
    return [i - 1, project.rows[i - 1]!.length - 1];
  }

  const lastRowIndex = project.rows.length - 1;
  const lastRowLastPhotoIndex = project.rows[lastRowIndex]!.length - 1;

  return [lastRowIndex, lastRowLastPhotoIndex];
}

export default moveLeft;
