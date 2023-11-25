/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function RightArrowIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="RightArrowIcon icon"
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
      <path d="m 15 16 l 4 -4" />
      <path d="m 15 8 l 4 4" />
    </svg>
  );
}

export default RightArrowIcon;
