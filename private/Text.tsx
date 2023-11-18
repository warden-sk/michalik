/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import '../fontSize.css';

function Text({ size, ...$ }: EnhancedJSXElement<'div'> & { size?: number }) {
  return <div {...$} className={`f${size ?? 3}`} />;
}

export default Text;
