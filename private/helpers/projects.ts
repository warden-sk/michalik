/*
 * Copyright 2023 Marek Kobida
 */

import type { Project } from './types';

const projects: Project[] = [
  {
    description: '',
    id: 'flat-h',
    labels: ['3D Panorama', 'Archviz'],
    name: 'Flat H',
    photoUrl: '1.jpg',
    rows: [['1.jpg'], ['2.jpg'], ['3-1.jpg', '3-2.jpg'], ['4.jpg'], ['5-1.jpg', '5-2.jpg'], ['6.jpg'], ['7.jpg']],
    when: 2023,
    where: 'Praha',
    who: 'LM architects',
  },
  {
    description: '',
    id: 'pribor-adaptive-reuse',
    labels: ['Archviz'],
    name: 'Pribor Adaptive Reuse',
    photoUrl: '1.jpg',
    rows: [['1.jpg'], ['2.jpg'], ['3.jpg'], ['4-1.jpg', '4-2.jpg']],
    when: 2023,
    where: 'Pribor',
    who: 'Barbora Stefkova architects',
  },
  {
    description: '',
    id: 'liberec',
    labels: ['3D Panorama', 'Archviz'],
    name: 'Liberec',
    photoUrl: '1.jpg',
    rows: [
      ['1.jpg'],
      ['2.jpg'],
      ['3-1.jpg', '3-2.jpg'],
      ['4.jpg'],
      ['5-1.jpg', '5-2.jpg'],
      ['6.jpg'],
      ['7.jpg'],
      ['8-1.jpg', '8-2.jpg'],
    ],
    when: 2023,
    where: 'Liberec',
    who: 'LM architects',
  },
  {
    description:
      'The designated area is situated in Velka Bystrice, a town located 10 kilometers from Olomouc. At present, this site is home to a baroque granary owned by the Olomouc Chapter. The granary is currently vacant and in a state of disrepair, not being used for any specific purpose.\n\nThe proposed plan aims to develop a research and educational complex adjacent to the granary. This complex will include a guesthouse for accommodation, a hydroponic greenhouse for both cultivation and research purposes, and a restaurant situated opposite the guesthouse. Additionally, the granary is planned to be repurposed to host a variety of lectures, covering a wide range of subjects beyond just cultivation-related topics.',
    id: 'research-and-education-center',
    labels: ['Archviz', 'Design', 'Illustration'],
    name: 'Research and Education Center',
    photoUrl: '1.jpg',
    rows: [['1.jpg'], ['2.jpg'], ['3-1.jpg', '3-2.jpg'], ['4.jpg'], ['5.jpg'], ['6-1.jpg', '6-2.jpg'], ['7.jpg']],
    when: 2022,
    where: 'Velka Bystrice',
    who: 'Mario Michalik',
  },
  {
    description:
      "The primary focus was on creating a square beneath the St. Peter and Paul Cathedral to connect the emerging southern part of Brno with the historic city center. Another aspect of the study concentrated on building a new town hall for the oldest part of Brno – Brno Střed.\n\nThis building is designed as a 5-story lapidary block that gradually transitions into a receding crown, symbolizing the former walls in the area. Although the town hall's design is straightforward, its architectural significance is found in its intricate details and gradation. The entrance to the town hall aligns proportionally with the viaduct, providing clear orientation for visitors. The interior is well-organized and functional, featuring two identical atriums, one of which serves as a communication space.",
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
    who: 'Mario Michalik',
  },
  {
    description:
      'The massing solution makes full use of the entire site, filling the gap. The mass adheres to the boundary of the designated plot for the School of Architecture and a section of the Faculty of Arts at the University of Ostrava. The height limitation is set by the Bachner department store (Hornik). The design of the building is centered around four atriums, which also function as spaces for vertical communication.',
    id: 'ostrava-faculty-of-architecture-and-design',
    labels: ['Design', 'Illustration'],
    name: 'Ostrava Faculty of Architecture and Design',
    photoUrl: '1.jpg',
    rows: [
      ['1.jpg'],
      ['2-1.jpg', '2-2.jpg'],
      ['3-1.jpg', '3-2.jpg'],
      ['4.jpg'],
      ['5.jpg'],
      ['6.jpg'],
      ['7.jpg'],
      ['8.jpg'],
    ],
    when: 2022,
    where: 'Ostrava',
    who: 'Mario Michalik',
  },
  {
    description:
      'The proposed interior project is located in the heart of Ostrava, on Masaryk Square. It covers a two-story area, which was previously a restaurant with a brewery but is currently unoccupied. The entrances are situated on the side facing the square.\n\nThe interior design plan aims to create a functional and harmonious space that stands out from its surroundings. The project predominantly features pastel colors, terrazzo, and wooden cladding.',
    id: 'cafe-bistro',
    labels: ['Archviz', 'Design', 'Illustration'],
    name: 'Cafe Bistro',
    photoUrl: '5-2.jpg',
    rows: [
      ['1.jpg'],
      ['2.jpg'],
      ['3.jpg'],
      ['4.jpg'],
      ['5-1.jpg', '5-2.jpg'],
      ['6.jpg'],
      ['7-1.jpg', '7-2.jpg'],
      ['8-1.jpg', '8-2.jpg'],
    ],
    when: 2022,
    where: 'Ostrava',
    who: 'Mario Michalik',
  },
];

export default projects;
