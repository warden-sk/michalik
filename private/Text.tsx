/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import '../fontSize.css';
import icons from './icons';

function Text({
  children,
  icon,
  size,
  ...$
}: EnhancedJSXElement<'div'> & { icon?: keyof typeof icons; size?: number }) {
  if (icon) {
    const Icon = icons[icon];

    return (
      <div {...$} alignItems="center" display="flex" spaceX="2">
        <Icon />
        <div children={children} className={`f${size ?? 3}`} />
      </div>
    );
  }

  return <div {...$} children={children} className={`f${size ?? 3}`} />;
}

export default Text;
