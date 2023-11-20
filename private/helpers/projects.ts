/*
 * Copyright 2023 Marek Kobida
 */

import type { Project } from './types';

const projects: Project[] = [
  {
    description: [
      "Study of Brno's Town Hall",
      "The primary focus was on creating a square beneath the St. Peter and Paul Cathedral to connect the emerging southern part of Brno with the historic city center. Another aspect of the study concentrated on building a new town hall for the oldest part of Brno – Brno Střed.\n\nThis building is designed as a 5-story lapidary block that gradually transitions into a receding crown, symbolizing the former walls in the area. Although the town hall's design is straightforward, its architectural significance is found in its intricate details and gradation. The entrance to the town hall aligns proportionally with the viaduct, providing clear orientation for visitors. The interior is well-organized and functional, featuring two identical atriums, one of which serves as a communication space.",
    ],
    id: 'the-square-beneath-the-st-peter-and-paul-cathedral',
    labels: ['Design'],
    name: 'The Square Beneath\nthe St. Peter and Paul Cathedral',
    photoUrl: '4.jpg',
    rows: [
      ['1-1.jpg', '1-2.jpg'],
      ['2-1.jpg', '2-2.jpg'],
      ['3-1.jpg', '3-2.jpg'],
      ['4.jpg'],
      ['5.jpg'],
      ['6.jpg'],
      ['7.jpg'],
      ['8.jpg'],
    ],
    when: 2023,
    where: 'Brno',
    who: 'Mário Michalík',
  },
];

export default projects;
