import React from 'react';
import {Switch, Route} from "react-router-dom";

import {Path} from '../../const';

import Main from '../main/main';
import MentorAuth from '../mentor-auth/mentor-auth';
import MentorPage from '../mentor-page/mentor-page';

const App = () => {
  return (
  <Switch>
    <Route exact path={Path.DEFAULT}>
      <Main />
    </Route>

    <Route exact path={Path.MENTOR}>
      <MentorPage />
    </Route>

    <Route exact path={Path.AUTHORIZATION}>
      <MentorAuth />
    </Route>
  </Switch>
  );
}

export default App;
