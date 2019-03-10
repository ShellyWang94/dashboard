import React, {Component} from 'react';
import Style from './computer.css';
export default class ComputerItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          isShowPop: false,
          inputValue: ""
        };
    }
    componentDidMount(){
      window.addEventListener("click", this.windowClickListner);
    }
    componentWillUnmount(){
      window.removeEventListener("click", this.windowClickListner)
    }
    windowClickListner = () => {
      if(!this.state.isShowPop) return;
        this.setState({
          isShowPop: false
        })
    }
    showPop = (e) => {
      this.setState({
        isShowPop: true
      });
      this.stopPropaget(e);
    }
    cancelSource = (e) => {
      this.setState({
        isShowPop: false,
        inputValue: ""
      });
      this.stopPropaget(e);
    }
    addSource = (id) => (e) => {
      if(this.state.inputValue === ""){
        console.log('empty value is not allowed');
        return;
      }
      this.stopPropaget(e);
      this.props.fns.addSource({
        id: id,
        text: this.state.inputValue
      });
      this.setState({
        isShowPop: false,
        inputValue: ""
      });
    }
    deleteSource = (id, index) => () => {
      this.props.fns.deleteSource({
        id: id,
        index: index
      });
    }
    searchSource = () => {
      this.props.fns.searchSource();
    }
    stopPropaget = (e) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
    }
    inputResouce = (e) => {
      this.setState({
        inputValue: e.target.value
      });
      this.stopPropaget(e);
    }
    addHistory = (historyCom) => () =>  {
      this.props.fns.addHistory(historyCom);
    }
    render(){
      let isBuilding = this.props.data.status === "building" ? true : false;
      return <div className={Style.sourceItem}>
        <span className={Style[`${this.props.data.os}Icon`]}></span>
        <div className={Style.topInfo}>
          <div>
            <div className={Style.computerGroup}>
              <span className={`icon-desktop  ${Style.sourceIcon16}`}></span>
              <h3 
              className={Style.computerName}
              onClick={this.addHistory(this.props.data.name)}
              >{this.props.data.name}</h3>
              <i className={Style.computerStatus} style={{backgroundColor: isBuilding ? "#ff9a2a" : "#7fbc39"}}>{this.props.data.status}</i>
            </div>
            <div className={Style.computerIp}>
              <span className={`icon-info ${Style.sourceIcon16}`}></span>
              <span className={Style.descripText}>{this.props.data.ip}</span>
            </div>
            <span className={`icon-folder ${Style.sourceIcon16}`}></span>
            <span className={Style.descripText}>{this.props.data.location}</span>
          </div>
          
          <div className={Style.broswerGroup}>
            <div className={Style.plusWrapper}>
              <button 
              className={`icon-plus ${Style.plusIcon}`}
              onClick={this.showPop}
              ></button>
              {/* popup layer */}
              <div className={Style.popUpWrapper} 
              style={{zIndex: this.state.isShowPop ? 100 : -1}}
              onClick={this.stopPropaget}
              >
                <div className={Style.popUpBox}>
                  <span className={Style.triangle}></span>
                  <span 
                  className={`icon-close ${Style.iconClose}`}
                  onClick={this.cancelSource}
                  ></span>
                  <p className={Style.tipText}>Seperate multiple resource name with commas</p>
                  <input 
                  type="text" 
                  value={this.state.inputValue}
                  className={Style.inputBrowser}
                  onChange={this.inputResouce}
                  />
                  <div>
                    <button 
                    className={Style.addBtn}
                    onClick={this.addSource(this.props.data.id)}
                    >Add Resource</button>
                    <button 
                    className={Style.cancelBtn}
                    onClick={this.cancelSource}
                    >Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            {this.props.data.resources.map((resource, index) => 
              <strong 
              className={`${Style.browserbtn}`} 
              key={resource + index}
              >{resource}
                <span 
                className={`icon-trash ${Style.trashIcon}`} 
                style={{lineHeight: "27px"}}
                onClick={this.deleteSource(this.props.data.id, index)}
                ></span>
              </strong>
            )}
            {isBuilding ? <div className={Style.denyBtnWrapper}>
             <button className={Style.denyBtn}>
             <span className={`icon-deny ${Style.denyIcon}`}></span>
             Deny
             </button> 
            </div> : ""}
          </div>
        </div>
      </div>
    }
}