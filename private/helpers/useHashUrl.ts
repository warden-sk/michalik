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

      hash.startsWith('#/') && setUrl(hash);
    };

    onHashChange();

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => window.scrollTo(0, 0), [url]);

  return url;
}

export default useHashUrl;
