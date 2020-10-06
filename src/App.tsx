import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Navbar from './app/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className={"App"}>
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <>
                Hello
              </>
            )}
          />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
