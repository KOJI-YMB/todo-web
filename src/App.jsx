import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List, Detail, New, Edit } from './components/index'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/post/:id' component={Detail} />
        <Route exact path='/new' component={New} />
        <Route exact path='/edit/:id' component={Edit} />
      </Switch>
    </Router>
  )
}

export default App;
