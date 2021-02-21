import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" >
            <Projects />
          </Route>
          <Route path="/contact-me" >
            <Contact />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
