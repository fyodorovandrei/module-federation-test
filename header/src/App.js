import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    </BrowserRouter>
  );
}

export default App;
