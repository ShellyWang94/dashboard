import React from 'react';
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route}from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './index';
import CruiseAgent from './agent/Container';
import  './index.css';
import './static/fonticons/fonts.css';

import Widget from './widget/Widget';

const App = ({store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div>
        <Widget>
          <div className="cru-widget-box">
            <Route path="/" exact component={CruiseAgent}/>
            <Route path="/dashboard" exact component={() => <h1>dashboard</h1>}/>
            <Route path="/cruse" exact component={() => <h1>cruise</h1>}/>
            <Route path="/help" exact component={() => <h1>help</h1>}/>
          </div>
        </Widget>
        <Route path="/" exact component={CruiseAgent}/>
            <Route path="/dashboard" exact component={() => <h1>dashboard</h1>}/>
            <Route path="/cruse" exact component={() => <h1>cruise</h1>}/>
            <Route path="/help" exact component={() => <h1>help</h1>}/>
            </div>
      </Router>
    </ConnectedRouter>
  </Provider>
);
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
