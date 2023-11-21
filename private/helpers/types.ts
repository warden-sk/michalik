/*
 * Copyright 2023 Marek Kobida
 */

type Project = {
  description: string;
  id: string;
  labels: string[];
  name: string;
  photoUrl: string;
  rows: string[][];
  type: 'b' | 'w';
  when: number;
  where: string;
  who: string;
};

export type { Project };
