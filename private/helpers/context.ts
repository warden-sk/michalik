/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

type Context = {
  setUrl: (url: string) => void;
  url: string;
};

const context = React.createContext<Context>({} as Context);

export default context;
