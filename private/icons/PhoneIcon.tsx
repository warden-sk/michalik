/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

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
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 5 4 h 4 l 2 5 l -2.5 1.5 a 11 11 0 0 0 5 5 l 1.5 -2.5 l 5 2 v 4 a 2 2 0 0 1 -2 2 a 16 16 0 0 1 -15 -15 a 2 2 0 0 1 2 -2" />
    </svg>
  );
}

export default PhoneIcon;
