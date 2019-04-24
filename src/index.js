import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>
        <strong>BigBang</strong> Template
      </h1>

      <h2>
        <span style={{ marginRight: 0.5 + 'rem' }}>By:</span>
        <a
          href="https://twitter.com/moralesbang"
          target="_blank"
          rel="noopener noreferrer"
        >
          moralesbang
        </a>
      </h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
