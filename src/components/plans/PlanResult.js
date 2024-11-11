import React from "react";
import line from "../../assets/Line.png";
import BtnSeleccionar from "./BtnSeleccionar";
import "./PlanResult.scss";

export default function PlanResult({ index, title, oldPrice, price, logo, bullets }) {
  console.log(index);
  
  return (
    <div className="container__plan-result">
      <div className="plan-result">
        <label className={`plan-result__label ${index!==1&&"without-label"}`}>Plan recomendado</label>
        <div className="plan-result__info">
          <div className="info__text">
            <div className="text__title">{title}</div>
            <div className="text__prices">
              <div className="prices__costoplan">COSTO DEL PLAN</div>
              <div className="prices__oldprice">{oldPrice}</div>
              <div className="prices__price">{`$${price} al mes`}</div>
            </div>
          </div>
          <img className="info__logo" src={logo} alt="" />
        </div>
      </div>
        <img className="plan-result__line" src={line} alt="" />
      <ul className="plan-result__bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
      </ul>
      <BtnSeleccionar></BtnSeleccionar>
    </div>
  );
}
