import {combineReducers} from 'redux';
import AgentReducer from './agent/reducer';
export default combineReducers({
  agent: AgentReducer
})