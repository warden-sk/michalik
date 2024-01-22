/*
 * Copyright 2023 Marek Kobida
 */

const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const filePaths = [
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/5-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/5-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/7-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/7-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/8-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/8-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/3.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/cafe-bistro/6.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/3-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/3-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/5-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/5-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/6.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/flat-h/7.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/3-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/3-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/5-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/5-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/8-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/8-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/6.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/liberec/7.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/2-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/2-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/3-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/3-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/5.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/6.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/7.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/ostrava-faculty-of-architecture-and-design/8.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/pribor-adaptive-reuse/4-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/pribor-adaptive-reuse/4-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/pribor-adaptive-reuse/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/pribor-adaptive-reuse/2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/pribor-adaptive-reuse/3.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/3-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/3-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/6-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/6-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/5.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/research-and-education-center/7.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/1-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/1-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/2-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/2-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/3-1.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/3-2.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/4.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/5.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/6.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/7.jpg',
  '/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/the-square-beneath-the-st-peter-and-paul-cathedral/8.jpg',
];

const i = 0;

async function process(j = i) {
  const filePath = filePaths[j];

  if (filePath) {
    const directoryName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);

    const file = fs.readFileSync(filePaths[j]);

    const $ = await sharp(file)
      .metadata()
      .then(async ({ height, width }) => sharp(file).resize(Math.round(width * 0.25), Math.round(height * 0.25)))
      .then($ => $.blur(25))
      .then(async $ => $.toBuffer());

    const outputDirectory = `/Users/marekkobida/Documents/warden/leopold/michalik/public/projects/test/${directoryName}`;

    try {
      fs.mkdirSync(outputDirectory);
    } catch (error) {}

    fs.writeFileSync(`${outputDirectory}/${fileName}`, $);

    process(j + 1);
  }
}

process(i);
