/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import Text from './Text';

type P = {
  labels?: string[];
  url: string;
};

function Photo({ labels = [], url }: P) {
  return (
    <div className="Photo">
      <img borderRadius="3" display="block" src={url} width="100" />
      {labels.length > 0 && (
        <div className="PhotoLabels" display="flex" p="2" spaceX="2">
          {labels.map(label => (
            <Text className="Label PhotoLabel" key={label} pX="3" pY="1" size={2}>
              {label}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photo;
