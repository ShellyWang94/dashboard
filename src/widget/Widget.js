import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Widget extends Component{
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
        <div className="nav-links-item">
          <span className="icon-dashboard"></span>
          <Link to="/">DASHBOARD</Link>
        </div>
        <div className="nav-links-item">
          <span className="icon-sitemap"></span>
          <Link to="/">AGENT</Link>
        </div>
        <div className="nav-links-item">
          <span className="icon-boat"></span>
          <Link to="/">MY CRUSE</Link>
        </div>
        <div className="nav-links-item">
          <span className="icon-life-bouy"></span>
          <Link to="/">HELP</Link>
        </div>
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