import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List, Detail, New } from './components/index'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/post/:id' component={Detail} />
        <Route exact path='/new' component={New} />
      </Switch>
    </Router>
  )
}

export default App;
