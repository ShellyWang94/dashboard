import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { NavConfig } from './config';
import {connect} from 'react-redux';
function mapStateToProps(state){
  return {
    router: state.router,
    historyArr: state.agent.historyArr
  };
}
class Widget extends Component{
  constructor(props){
    super(props);
    this.fixedContentWidth = 1172;
    this.state = {
      navLeft: this.computeNavLeft()
    }
  }
  componentDidMount(){
    window.onresize = (event) => {
      requestAnimationFrame(() => {
        this.setState({
          navLeft: this.computeNavLeft()
        });
      })
    }
  }
  componentWillUnmount(){
    window.onresize = null;
  }
  computeNavLeft = () => {
    let clientWidth = document.body.clientWidth;
    if(clientWidth < this.fixedContentWidth) return 0;
    return (clientWidth - this.fixedContentWidth) / 2;
  }
  render(){
    const curPath = window.location.pathname;
    return <div className="cru-widget">
    <header className="hf-base">
      <div className="clearfix cru-header-wrapper">
        <div className="cru-title"></div>
        <div className="cru-user-avatar">
          <img src="https://avatars2.githubusercontent.com/u/2077445?s=460&v=4"/>
        </div>
      </div>
    </header>
    <nav style={{left: this.state.navLeft}}>
      <div className="nav-links">
        {NavConfig.map((navItem, index) =>
          <div className={"nav-links-item" + (navItem.link === curPath ? " nav-links-active" : "")} key={navItem.text + index}>
            <span className={navItem.class}></span>
            <Link to={navItem.link}>{navItem.text}</Link>
          </div>
          )}
      </div>
      <div className="history-links">
        <p>History</p>
        <ul>
          {this.props.historyArr.map((his, index) => 
            <li key={his + index}>{his}</li>
          )}
        </ul>
      </div>
    </nav>
    <div className="cru-widget-box">
      {this.props.children}
    </div>
    <footer className="hf-base">
      <p>&#169;Copyright 2017 <b>Thought</b>Works</p>
    </footer>
  </div>
  }
}
export default withRouter(connect(mapStateToProps)(Widget));
