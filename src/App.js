import React from 'react';
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route}from 'react-router-dom';
import {Provider} from 'react-redux';
import CruiseAgent from './cruise/Container';
import  './index.css';
import './static/fonticons/fonts.css';

import Widget from './widget/Widget';


const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <Widget>
        <div className="cru-widget-box">
          <Route path="/" component={CruiseAgent}/>
        </div>
      </Widget>
    </Router>
  </Provider>
);
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
