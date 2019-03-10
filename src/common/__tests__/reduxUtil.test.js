import ReduxUtil from '../reduxUtil';
import {createAction} from 'redux-act';

describe('test ReduxUtil generateActions', () => {
  it('should return given name action object', () => {
    const givenName = ["action1", "action2", "action3"];
    const expectObj = {
      "action1": createAction("action1"),
      "action2": createAction("action2"),
      "action3": createAction("action3"),
    }
    const result = ReduxUtil.generateActions(givenName);
    expect(typeof result).toEqual('object');
    expect(Object.keys(result)).toEqual(givenName);
    expect(result.action1.getType()).toContain("action1");
    expect(result.action2.getType()).toContain("action2");
    expect(result.action3.getType()).toContain("action3");
  });
  it('should return empty object', () => {
    const givenName = [];
    const result = ReduxUtil.generateActions(givenName);
    expect(result).toEqual({});
  });
});
describe('test ReduxUtil sendRequest fn', () => {
  it('request success dispacth action', () => {

  });
  it('request success with callback', () => {
    
  })
  it('request error catch error', () => {

  })
})