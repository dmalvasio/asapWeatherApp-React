import React from 'react';
import HomePage from './containers/HomePage';

function App() {
  window.addEventListener('offline', () => {
    alert(
      'Oops! We are having problems with your connection, try again later.'
    );
  });

  window.addEventListener('online', () => {
    alert('Established connection!');
  });

  return <HomePage />;
}

export default App;
