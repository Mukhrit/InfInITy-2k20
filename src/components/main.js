import React, { Component } from 'react';
import Example from './feedbackModal';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Example />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
