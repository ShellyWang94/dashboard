import {createReducer} from 'redux-act';
import { InitialState } from './constant';
import {UiAct, XhrAct} from './action';
import {Util} from './util';
const reducer = createReducer({
  [XhrAct["getAllComputers"]]: (state, payload) => {
    return {...state, originAllList: payload, infoList: payload};
  },
  [UiAct["chooseAll"]]: (state, payload) => {
    return {...state, infoList: [...state.originAllList]};
  },
  [UiAct["choosePhysical"]]: (state, payload) => {
    let temp = state.originAllList.filter((item) => item.type === "physical");
    return {...state, infoList: temp};
  },
  [UiAct["chooseVirtual"]]: (state, payload) => {
    let temp = state.originAllList.filter((item) => item.type === "virtual");
    return {...state, infoList: temp};
  },
  [UiAct["searchSour"]]: (state, payload) => {
    let temp = state.infoList.filter((item) => item.name.indexOf(payload) > -1);
    return {...state, infoList: temp};
  },
  [UiAct["addSource"]]: (state, payload) => {
    return {...state, infoList: Util.addSource(payload.id, payload.text, state.infoList)};
  },
  [UiAct["cancelChange"]]: (state, payload) => {
    return {...state, infoList: payload};
  },
  [UiAct["deleteSource"]]: (state, payload) => {
    return {...state, infoList: Util.deleteSource(payload.id, payload.index, state.infoList)};
  },
  [UiAct["searchComputer"]]: (state, payload) => {
    return {...state, infoList: payload};
  },
  [UiAct["addHistory"]]: (state, payload) => {
    let historyArr = [].concat(state.historyArr);
    // max record length is 11
    if(historyArr.length > 10){
      const startIndex = historyArr.length - 10;
      historyArr = historyArr.slice(startIndex, historyArr.length);
    }
    historyArr.push(payload);
    return {...state, historyArr: [...new Set(historyArr)]};
  },
}, InitialState);

export default reducer;