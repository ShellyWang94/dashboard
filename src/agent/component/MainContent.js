import React, {Component} from 'react';
import ComputerItem from './computer/ComputerItem'
import Tab from './tab/Tab';
export default class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {
          arrangeWay: "list"
        }
    }
    chooseAll = () => {
      this.props.fns.chooseAll();
    }
    choosePhysical = () => {
      this.props.fns.choosePhysical();
    }
    chooseVirtual = () => {
      this.props.fns.chooseVirtual();
    }
    searchSource = () => {
      this.props.fns.searchSource();
    }
    addSource = (addObj) => {
      this.props.fns.addSource(addObj);
    }
    cancelSource = () => {
      this.props.fns.cancelSource();
    }
    deleteSource = (deleteObj) => {
      this.props.fns.deleteSource(deleteObj);
    }
    chooseArrange = (type) => {
      this.setState({
        arrangeWay: type
      });
    }
    addHistory = (historyCom) => {
      this.props.fns.addHistory(historyCom);
    }
    render(){
      let tabFns = {
        chooseAll: this.chooseAll,
        choosePhysical: this.choosePhysical,
        chooseVirtual: this.chooseVirtual,
        searchSource: this.searchSource,
        chooseArrange: this.chooseArrange
      };
      let computerFns = {
        addSource: this.addSource,
        cancelSource: this.cancelSource,
        deleteSource: this.deleteSource,
        addHistory: this.addHistory
      }
      const isList = this.state.arrangeWay === "list" ? true : false;
      return <div>
        <Tab fns={tabFns}/>
        {isList ? this.props.data.map((infoItem, index) => 
          <ComputerItem 
          fns={computerFns} 
          data={infoItem}
          key={index}
          />
          ) : <h2>Card Arrange the computer Item</h2>}
      </div>
    }
  }