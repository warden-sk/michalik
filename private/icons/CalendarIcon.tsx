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
      strokeWidth="2"
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

export default CalendarIcon;
