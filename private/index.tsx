/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../applications/common/index.css';
import context from './helpers/context';
import './index.css';
import Router from './Router';

function Client() {
  const [url, setUrl] = React.useState<string>('/');

  return (
    <context.Provider value={{ setUrl, url }}>
      <Router />
    </context.Provider>
  );
}

if (typeof window !== 'undefined') {
  ReactDOM.createRoot(document.querySelector('#client')!).render(<Client />);
}

export default (
  <>
    <div id="Photos" />
    <div id="client" />
  </>
);
