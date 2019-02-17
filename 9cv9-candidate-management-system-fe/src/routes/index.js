import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import Candidates from '../views/Candidates';
import CandidateDetail from '../views/CandidateDetail';
import TestPage from '../views/TestPage';
import LandingPage from '../views/LandingPage';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import FirstLoginPage from '../views/FirstLogin';
import ResetPassword from '../views/LandingPage/ResetPassword';
import YourSelf from '../views/Onboarding/YourSelf';

export default class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/first-login" component={FirstLoginPage} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/candidates" component={Candidates} />
          <Route exact path="/candidate/details" component={CandidateDetail} />
          <Route exact path="/onboarding/yourself" component={YourSelf} />
          <Route exact path="/playground" component={TestPage} />
          <Route exact path="/linkedin" component={LinkedInPopUp} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
