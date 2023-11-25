/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function LinkIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="LinkIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 12 6 h -6 a 2 2 0 0 0 -2 2 v 10 a 2 2 0 0 0 2 2 h 10 a 2 2 0 0 0 2 -2 v -6" />
      <path d="m 11 13 l 9 -9" />
      <path d="m 15 4 h 5 v 5" />
    </svg>
  );
}

export default LinkIcon;
