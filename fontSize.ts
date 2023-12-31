/*
 * Copyright 2023 Marek Kobida
 */

import fs from 'node:fs';

const fontSizes: [string, number][] = [
  ['1', 0.75],
  ['2', 0.875],
  ['3', 1],
  ['4', 1.125],
  ['5', 1.25],
  ['6', 1.5],
  ['7', 1.75],
  ['8', 2],
  ['9', 2.25],
  ['10', 2.5],
  ['11', 2.75],
  ['12', 3],
];

let css = `/*\n * Copyright 2023 Marek Kobida\n */\n\n.container {\n  container-type: inline-size !important;\n}\n`;

css += fontSizes.reduce(($, [n, fontSize], i) => {
  const f = i > 3 ? 1.75 : 1.25;

  return ($ += `.f${n} {\n  font-size: clamp(${fontSize}rem, 3cqi, ${(fontSize * f).toFixed(3)}rem) !important;\n}\n`);
}, '');

fs.writeFileSync('/Users/marekkobida/Documents/warden/leopold/michalik/fontSize.css', css);
