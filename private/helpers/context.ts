/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

type Context = {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  url: string;
};

const context = React.createContext<Context>({} as Context);

export default context;
