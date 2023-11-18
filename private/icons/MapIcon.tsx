/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

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
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 3 7 l 6 -3 l 6 3 l 6 -3 v 13 l -6 3 l -6 -3 l -6 3 v -13" />
      <path d="m 9 4 v 13" />
      <path d="m 15 7 v 13" />
    </svg>
  );
}

export default MapIcon;
