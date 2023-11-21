/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import './Photo.css';
import Text from './Text';

type P = EnhancedJSXElement<'div'> & {
  labels?: string[];
  url: string;
};

function Photo({ labels = [], url, ...$ }: P) {
  const testPhotoUrl = url.replace('/projects/', '/projects/test/');

  const img = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const image = new Image();
    image.addEventListener('load', () => (img.current!.src = url));
    image.src = url;
  }, []);

  return (
    <div {...$} className="Photo">
      <img borderRadius="3" display="block" ref={img} src={testPhotoUrl} width="100" />
      {labels.length > 0 && (
        <div className="PhotoLabels" display="flex" p="2" spaceX="2">
          {labels.map(label => (
            <Text className="Label PhotoLabel" key={label} pX="4" pY="2" size={2}>
              {label}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photo;
