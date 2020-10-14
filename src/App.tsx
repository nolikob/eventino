import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Navbar from './app/Navbar';
import { CalendarOverview } from './features/calendar/CalendarOverview';
import AddEvent from './features/events/AddEvent';

function App() {
  return (
    <Router>
      <Navbar />
      <div className={"App"}>
        <Switch>
          <Route
            exact
            path={"/"}
            component={CalendarOverview}
          />
          <Route
            exact
            path={"/events/add-event"}
            component={AddEvent}
          />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
