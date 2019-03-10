import React from 'react';
import Style from './card.css';
const Card = ({data}) => {
    return <div className={Style.cardbox}>
    <div className={Style.building}>
      <h2 className={Style.cardboxTitle}>Building</h2>
      <h2 className={Style.cardboxNum}>{data.building}</h2>
      <span className={`icon-cog ${Style.bgBuilding}`}></span>
    </div>
    <div className={Style.idle}>
      <h2 className={Style.cardboxTitle}>Idle</h2>
      <h2 className={Style.cardboxNum}>{data.idle}</h2>
      <span className={`icon-coffee ${Style.bgIdle}`}></span>
    </div>
    <div className={Style.APVIndex}>
      <div className={Style.APVItem}>
        <h3 className={Style.APVTitle}>ALL</h3>
        <h3 className={Style.APVNum}>{data.agentAll.all}</h3>
      </div>
      <div className={Style.APVItem}>
        <h3 className={Style.APVTitle}>PHYSICAL</h3>
        <h3 className={Style.APVNum}>{data.agentAll.physical}</h3>
      </div>
      <div className={Style.APVItem}>
        <h3 className={Style.APVTitle}>VIRUAL</h3>
        <h3 className={Style.APVNum}>{data.agentAll.virtual}</h3>
      </div>
    </div>
  </div>
}
export default Card;