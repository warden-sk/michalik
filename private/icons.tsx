/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function CalendarIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="CalendarIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 4 7 a 2 2 0 0 1 2 -2 h 12 a 2 2 0 0 1 2 2 v 12 a 2 2 0 0 1 -2 2 h -12 a 2 2 0 0 1 -2 -2 v -12 z" />
      <path d="m 16 3 v 4" />
      <path d="m 8 3 v 4" />
      <path d="m 4 11 h 16" />
    </svg>
  );
}

function LeftArrowIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="LeftArrowIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 5 12 l 14 0" />
      <path d="m 5 12 l 4 4" />
      <path d="m 5 12 l 4 -4" />
    </svg>
  );
}

function MapIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="MapIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 3 7 l 6 -3 l 6 3 l 6 -3 v 13 l -6 3 l -6 -3 l -6 3 v -13" />
      <path d="m 9 4 v 13" />
      <path d="m 15 7 v 13" />
    </svg>
  );
}

function PhoneIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="PhoneIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 5 4 h 4 l 2 5 l -2.5 1.5 a 11 11 0 0 0 5 5 l 1.5 -2.5 l 5 2 v 4 a 2 2 0 0 1 -2 2 a 16 16 0 0 1 -15 -15 a 2 2 0 0 1 2 -2" />
    </svg>
  );
}

export { CalendarIcon, LeftArrowIcon, MapIcon, PhoneIcon };
