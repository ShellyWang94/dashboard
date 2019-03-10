import React, {Component} from 'react';
import {TypeTab} from './config';
import Style from './tab.css';

export default class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
          curTab: "all",
          inputValue: "",
          arrangeWay: "list"
        }
        console.log(props)
    }
    chooseAll = (key) => () => {
      if(key === this.state.curTab){
        return ;
      }
      this.setState({
        curTab: key
      });
      this.props.fns.chooseAll();
    }
    choosePhysical = (key) => () => {
      if(key === this.state.curTab){
        return ;
      }
      this.setState({
        curTab: key
      });
      this.props.fns.choosePhysical();
    }
    chooseVirtual = (key) => () => {
      if(key === this.state.curTab){
        return ;
      }
      this.setState({
        curTab: key
      });
      this.props.fns.chooseVirtual();
    }
    searchSource = (e) => {
      this.setState({
        inputValue: e.target.value
      });
      this.props.fns.searchSource();
    }
    chooseArrange = (arrange) => () => {
      this.setState({
        arrangeWay: arrange
      });
      this.props.fns.chooseArrange(arrange);
    }
    render(){
        return <div className={`clearfix ${Style.tabbox}`}>
        <ul className={Style.tabGroups}>
          {TypeTab.map((tab, index) => 
            <li 
            className={Style.tabItem} 
            key={tab.name + index}
            onClick={this[tab.action](tab.key)}
            >
              <a href="#" 
              className={Style.tabItemLink + 
                (this.state.curTab === tab.key ? ` ${Style.tabItemActive}` : "")
              }
              >{tab.name}</a>
            </li>
            )}
        </ul>
        <div className={Style.tabSearch}>
          <span className={`icon-search ${Style.tabSearchIcon}`}></span>
          <input type="text" 
          value={this.state.inputValue}
          className={Style.tabInput}
          onChange={this.searchSource}
          />
        </div>
        <div className={Style.arrangeWay}>
          <span 
          className={`icon-th-card ${Style.cardWay}`} 
          style={{color: this.state.arrangeWay === "card" ? "#00b4cf" : "#2d5054"}}
          onClick={this.chooseArrange("card")}
          ></span>
          <span 
          className={`icon-th-list ${Style.gridMethod}`}
          style={{color: this.state.arrangeWay === "list" ? "#00b4cf" : "#2d5054"}}
          onClick={this.chooseArrange("list")}></span>
        </div>
      </div>
    }
}