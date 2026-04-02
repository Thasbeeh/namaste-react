const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('h1', { id: 'child1' }, 'Hi'),
  React.createElement('h1', { id: 'child2' }, 'Bi'),
  React.createElement('h1', { id: 'child2' }, 'Bi'),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
