import React from 'react';
import { AppContext } from './main';

export default function Child({ children }) {
  return (
    <AppContext.Consumer>
      {(value) => <div className="child">{value.name}</div>}
    </AppContext.Consumer>
  );
}
