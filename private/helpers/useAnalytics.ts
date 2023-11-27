/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';

declare global {
  interface GoogleOptions {
    page_location: string;
  }

  interface Window {
    google: {
      (type: 'config', id: string, options: GoogleOptions): void;
      (type: 'event', eventType: 'page_view', options: GoogleOptions): void;
      (type: 'js', date: Date): void;
    };
  }
}

function useAnalytics() {
  const { url } = React.useContext(context);

  React.useEffect(() => {
    const id = 'G-67QE58237F';

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    script.addEventListener(
      'load',
      () => {
        function google() {
          // @ts-ignore
          window.dataLayer.push(arguments);
        }

        window.google = google;

        window.google('js', new Date());

        window.google('config', id, { page_location: location.href });
      },
      { once: true },
    );
  }, []);

  React.useEffect(() => {
    window.google('event', 'page_view', { page_location: location.href });
  }, [url]);
}

export default useAnalytics;
