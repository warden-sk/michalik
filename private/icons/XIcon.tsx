/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function XIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="XIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 18 6 l -12 12" />
      <path d="m 6 6 l 12 12" />
    </svg>
  );
}

export default XIcon;
