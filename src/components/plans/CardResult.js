import React from "react";
import line from "../../assets/Line.png";
import BtnSeleccionar from "./BtnSeleccionar";
import "./CardResult.scss";

export default function PlanResult({ index, title, oldPrice, price, logo, bullets }) {
  
  return (
    <div className="container__card-result">
      <div className="card-result">
        <label className={`card-result__label ${index!==1&&"without-label"}`}>Plan recomendado</label>
        <div className="card-result__info">
          <div className="info__text">
            <div className="text__title">{title}</div>
            <div className="text__prices">
              <div className="prices__text">COSTO DEL PLAN</div>
              <div className={`prices__oldprice ${oldPrice===price&&"without-oldprice"}`}>{oldPrice} antes</div>
              <div className="prices__price">{`$${price} al mes`}</div>
            </div>
          </div>
          <img className="info__logo" src={logo} alt="" />
        </div>
      </div>
        <img className="card-result__line" src={line} alt="" />
      <ul className="card-result__bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
      </ul>
      <BtnSeleccionar></BtnSeleccionar>
    </div>
  );
}
