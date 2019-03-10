import {combineReducers} from 'redux';
import AgentReducer from './agent/reducer';
import {connectRouter} from 'connected-react-router';
export default (history) => combineReducers({
  router: connectRouter(history),
  agent: AgentReducer
})