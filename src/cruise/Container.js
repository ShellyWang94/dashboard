import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import agentStyle from './agent.css';
import commonStyle from './common.css';
function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return {
    b: () => 2
  }
}
class CruiseAgent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div className="content-wrapper">
      <div className={agentStyle.cardbox}>
        <div className={agentStyle.building}>
          <h2 className={agentStyle.cardboxTitle}>Building</h2>
          <h2 className={agentStyle.cardboxNum}>3</h2>
          <span className={`icon-cog ${agentStyle.bgBuilding}`}></span>
        </div>
        <div className={agentStyle.idle}>
          <h2 className={agentStyle.cardboxTitle}>Idle</h2>
          <h2 className={agentStyle.cardboxNum}>5</h2>
          <span className={`icon-coffee ${agentStyle.bgIdle}`}></span>
        </div>
        <div className={agentStyle.APVIndex}>
          <div className={agentStyle.APVItem}>
            <h3 className={agentStyle.APVTitle}>ALL</h3>
            <h3 className={agentStyle.APVNum}>8</h3>
          </div>
          <div className={agentStyle.APVItem}>
            <h3 className={agentStyle.APVTitle}>PHYSICAL</h3>
            <h3 className={agentStyle.APVNum}>4</h3>
          </div>
          <div className={agentStyle.APVItem}>
            <h3 className={agentStyle.APVTitle}>VIRUAL</h3>
            <h3 className={agentStyle.APVNum}>4</h3>
          </div>
        </div>
      </div>
      <div className={`clearfix ${agentStyle.tabbox}`}>
        <ul className={agentStyle.tabGroups}>
          <li className={agentStyle.tabItem}>
            <a href="#">Link</a>
          </li>
          <li className={agentStyle.tabItem}>
            <a href="#">Link</a>
          </li>
          <li className={agentStyle.tabItem}>
            <a className={agentStyle.tabItemActive} href="#">Link</a>
          </li>
        </ul>
        <div className={agentStyle.tabSearch}>
          <span className={`icon-search ${agentStyle.tabSearchIcon}`}></span>
          <input type="text" className={agentStyle.tabInput}/>
        </div>
        <div className={agentStyle.arrangeWay}>
          <span className={`icon-th-card ${agentStyle.cardWay}`} style={{color: "#00b4cf"}}></span>
          <span className={`icon-th-list ${agentStyle.gridMethod}`}></span>
        </div>
      </div>
      <div>
        <div className={agentStyle.sourceItem}>
          <span className={agentStyle.windowIcon}></span>
          <div className={agentStyle.topInfo}>
            <div>
              <div className={agentStyle.computerGroup}>
                <span className={`icon-desktop  ${agentStyle.sourceIcon20}`} style={{fontSize: 20}}></span>
                <h3 className={agentStyle.computerName}>bjstdmngbdr08.thoughtworks.com</h3>
                <i className={agentStyle.computerStatus}>idle</i>
              </div>
              <div className={agentStyle.computerIp}>
                <span className={`icon-info ${agentStyle.sourceIcon20}`}></span>
                <span className={agentStyle.descripText}>192.168.1.243</span>
              </div>
              <span className={`icon-folder ${agentStyle.sourceIcon20}`}></span>
              <span className={agentStyle.descripText}>/var/lib/cruise-agent</span>
            </div>
            <div className={agentStyle.broswerGroup}>
              <div className={agentStyle.plusWrapper}>
                <button className={`icon-plus ${agentStyle.plusIcon}`}></button>
                <div className={agentStyle.popUpWrapper}>
                  <div className={agentStyle.popUpBox}>
                    <span className={agentStyle.triangle}></span>
                    <span className={`icon-close ${agentStyle.iconClose}`}></span>
                    <p>Seperate multiple resource name with commas</p>
                    <input type="text"/>
                    <div>
                      <button>Add Resource</button>
                      <button>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <strong className={`${agentStyle.browserbtn}`}>Firfox
                <span className={`icon-trash ${agentStyle.trashIcon}`} style={{lineHeight: "27px"}}></span>
              </strong>
              <strong className={`${agentStyle.browserbtn}`}>Firfox
                <span className={`icon-trash ${agentStyle.trashIcon}`} style={{lineHeight: "27px"}}></span>
              </strong>
              <strong className={`${agentStyle.browserbtn}`}>Firfox
                <span className={`icon-trash ${agentStyle.trashIcon}`} style={{lineHeight: "27px"}}></span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CruiseAgent);
