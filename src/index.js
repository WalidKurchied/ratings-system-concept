import React from 'react';
import ReactDOM from 'react-dom';
import RatingsContainer from './ratingsContainer';

import './styles.css';

function App() {
  return (
    <div className="App">
      <RatingsContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
