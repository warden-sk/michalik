/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import '../../fontSize.css';
import icons from '../icons';

type P = EnhancedJSXElement<'div'> & {
  icon?: keyof typeof icons;
  size?: number;
};

function Text({ children, icon, size = 3, ...$ }: P) {
  if (icon) {
    const Icon = icons[icon];

    return (
      <div {...$} alignItems="center" display="flex" spaceX="2" whiteSpace="pre-line">
        <Icon />
        <div className={`f${size}`}>{children}</div>
      </div>
    );
  }

  return (
    <div {...$} className={`f${size}`} whiteSpace="pre-line">
      {children}
    </div>
  );
}

export default Text;
