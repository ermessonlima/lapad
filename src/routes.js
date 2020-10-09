import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Main from './main/index';

import Appa from './map/App.js';
import App1 from './map1/index';
import QuemSomos from './quemsomos/index';
import Help from './help/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Main><Appa></Appa></Main>} /> 
      <Route path="/map" component={() => <Main><App1></App1></Main>} />
      <Route path="/quemsomos" component={() => <Main><QuemSomos></QuemSomos></Main>} />
      <Route path="/help" component={() => <Main><Help></Help></Main>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
