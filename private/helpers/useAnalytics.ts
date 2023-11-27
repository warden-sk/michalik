/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';

function useAnalytics() {
  const { url } = React.useContext(context);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-67QE58237F';
    document.head.appendChild(script);

    script.addEventListener(
      'load',
      () => {
        window.dataLayer = window.dataLayer || [];

        function $() {
          dataLayer.push(arguments);
        }

        $('js', new Date());

        $('config', 'G-67QE58237F', { page_location: location.href });

        window.$ = $;
      },
      { once: true },
    );
  }, []);

  React.useEffect(() => {
    window.$?.('event', 'page_view', { page_location: location.href });
  }, [url]);
}

export default useAnalytics;
