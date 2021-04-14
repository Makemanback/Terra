import React from 'react';
import {Switch, Route} from "react-router-dom";

import {Path} from '../../const';

import Main from '../main/main';

const App = () => {
  return (
  <Switch>
    <Route exact path={Path.DEFAULT}>
      <Main />
    </Route>
  </Switch>
  );
}

export default App;
