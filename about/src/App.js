import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

function App({title}) {
  return (
    <BrowserRouter>
      <div className="about">
        {title}

        <Link to="/about/test">Test</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
