import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProjectCard from './components/ProjectCard';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
          </Route>
          <Route path="/portfolio" >
            <Projects />
          </Route>
          <Route path="/contact-me" >

          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
