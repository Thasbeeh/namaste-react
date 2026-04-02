import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('h1', { id: 'child1', key: 1 }, 'Hi'),
  React.createElement('h1', { id: 'child2', key: 2 }, 'Bi'),
  React.createElement('h1', { id: 'child3', key: 3 }, 'Bi'),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
