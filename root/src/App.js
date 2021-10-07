import React from 'react';
import {
  BrowserRouter, Routes, Route, Link
} from 'react-router-dom'

const Header = React.lazy(() => import('header/Header'));
const Home = React.lazy(() => import('home/Index'));
const About = React.lazy(() => import('about/Index'));

function App() {
  return (
  <BrowserRouter>
    <div>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" exact>
          <React.Suspense fallback='Loading header'>
            <Home />
          </React.Suspense>
        </Route>
        <Route path="/about" exact>
          <React.Suspense fallback='Loading header'>
            <About title="About page from props" />
          </React.Suspense>
        </Route>
        <Route>not found :(</Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
