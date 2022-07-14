import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cards } from './components/app/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      img="img/the-grand-budapest-hotel-poster.jpg"
      alt="The Grand Budapest Hotel poster"
      title="The Grand Budapest Hotel"
      genre="Drama"
      year={2014}
      cards={cards}
    />
  </React.StrictMode>,
);
