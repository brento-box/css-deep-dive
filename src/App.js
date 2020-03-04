import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from './components/Button'
import Vanilla from './pages/Vanilla'
import BEM from './pages/BEM'
import SCSS from './pages/SCSS'
import Card from './components/Card'
import StyledComponents from './pages/StyledComponents'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vanilla">Vanilla</Link>
          </li>
          <li>
            <Link to="/bem">BEM</Link>
          </li>
          <li>
            <Link to="/scss">SCSS</Link>
          </li>
          <li>
            <Link to="/styled-comp">Styled Components</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/vanilla">
            <Vanilla />
          </Route>
          <Route path="/bem">
            <BEM />
          </Route>
          <Route path="/scss">
            <SCSS />
          </Route>
          <Route path="/styled-comp">
            <StyledComponents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='homepage-content'>
      <h1>Homepage</h1>
      <p>Select an option from the menu to view an example!</p>
    </div>
  )
}




export default App;
