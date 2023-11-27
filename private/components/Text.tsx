/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import LeftArrow from '../../../applications/common/icons/LeftArrow';
import '../../fontSize.css';

type P = EnhancedJSXElement<'div'> & {
  icon?: 'LeftArrow';
  size?: number;
};

function Text({ children, icon, size = 3, ...$ }: P) {
  if (icon) {
    return (
      <div {...$} alignItems="center" display="flex" spaceX="2" whiteSpace="pre-line">
        <LeftArrow />
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
