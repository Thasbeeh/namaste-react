import React from 'react';
import ReactDOM from 'react-dom/client';

const data = 1000;

const elem = <span>I am here for the last {data} years!!!</span>;

const Title = () => (
  <div>
    <h1 id="headings" className="head" tabIndex="5">
      Namaste react using JSX
    </h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    {elem}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
