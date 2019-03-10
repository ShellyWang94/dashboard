import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from './component/card/Card';
import MainContent from './component/MainContent';
import {UiAct, XhrAct} from './action';
import ReduxUtil from '../common/reduxUtil';
import {SERVER} from '../common/server';
function mapStateToProps(state){
  return {
    ...state.agent
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    ...UiAct,
    sendRequest: ReduxUtil.sendRequest
  }, dispatch);
}
class CruiseAgent extends Component{
  constructor(props){
    super(props);    
  }
  componentDidMount(){
    this.props.sendRequest({
      method: "get",
      server: SERVER,
      path: "/agents",
      params: {},
      actionName: "getAllComputers",
      actions: XhrAct    
    })
  }
  chooseAll = () => {
    this.props.chooseAll();
  }
  choosePhysical = () => {
    this.props.choosePhysical();
  }
  chooseVirtual = () => {
    this.props.chooseVirtual();
  }
  searchSource = () => {
    this.props.searchSource();
  }
  addSource = (addObj) => {
    this.props.addSource({
      id: addObj.data.id,
      text: addObj.text
    });
    // send add source request
    this.props.sendRequest({
      method: "put",
      server: SERVER,
      path: `/agents/${addObj.data.id}`,
      params: addObj.data,
      // actionName: "getAllComputers",
      // actions: XhrAct    
    });
  }
  cancelSource = () => {
    this.props.cancelSource();
  }
  deleteSource = (deleteObj) => {
    this.props.deleteSource({
      id: deleteObj.data.id,
      index: deleteObj.index
    });
    this.props.sendRequest({
      method: "put",
      server: SERVER,
      path: `/agents/${deleteObj.data.id}`,
      params: deleteObj.data,
      // actionName: "getAllComputers",
      // actions: XhrAct    
    })
  }
  addHistory = (historyCom) => {
    this.props.addHistory(historyCom);
  }
  render(){
    let cardData = {
      agentAll: this.props.agentAll,
      building: this.props.building,
      idle: this.props.idle
    };
    let mainFns = {
      addSource: this.addSource,
      cancelSource: this.cancelSource,
      deleteSource: this.deleteSource,
      chooseAll: this.chooseAll,
      choosePhysical: this.choosePhysical,
      chooseVirtual: this.chooseVirtual,
      searchSource: this.searchSource,
      addHistory: this.addHistory
    };

    return <div className="content-wrapper">
      <Card data={cardData}/> 
      <MainContent fns={mainFns} data={this.props.infoList}
/>
    </div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CruiseAgent);
