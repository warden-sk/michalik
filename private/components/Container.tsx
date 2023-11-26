/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

function Container($: EnhancedJSXElement<'div'>) {
  return <div {...$} /* className="container" mX="auto" */ pX={['4', { '#': '8' }]} pY="8" />;
}

export default Container;
