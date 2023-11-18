/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';

function useHashUrl(): string {
  const { setUrl, url } = React.useContext(context);

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;

      if (/^#\//.test(hash)) {
        setUrl(hash.replace('#', ''));
      }
    };

    onHashChange();

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return url;
}

export default useHashUrl;
