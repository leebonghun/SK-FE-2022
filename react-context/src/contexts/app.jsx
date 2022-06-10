import React from 'react';

export const initialAppContextValue = {
  name: 'App Context',
};

export const AppContext = React.createContext(initialAppContextValue);
