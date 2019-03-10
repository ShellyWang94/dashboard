import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
})

const sendRequest = (storeData, action) => {
  let dispatched = null
  const dispatch = singleDispatch(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt)
  dispatch(action)
  return dispatched
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(()=> {
    return {
      agent: {
      historyArr: [],
      agentAll: {},
      infoList: []
    }};
  });
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
