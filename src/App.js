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
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='homepage-content'>
      <h1>Homepage</h1>
      <Button text='Click me!'/>
      <Button text='Warning button' color='orange' />
      <Button text='Alert button! Something is wrong!' color='red' />
    </div>
  )
}




export default App;
