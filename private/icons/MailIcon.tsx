/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function MailIcon($: EnhancedJSXElement<'svg'>) {
  return (
    <svg
      {...$}
      className="MailIcon icon"
      display="block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="m 0 0 h 24 v 24 h -24 z" fill="none" stroke="none" />
      <path d="m 3 7 a 2 2 0 0 1 2 -2 h 14 a 2 2 0 0 1 2 2 v 10 a 2 2 0 0 1 -2 2 h -14 a 2 2 0 0 1 -2 -2 v -10 z" />
      <path d="m 3 7 l 9 6 l 9 -6" />
    </svg>
  );
}

export default MailIcon;
