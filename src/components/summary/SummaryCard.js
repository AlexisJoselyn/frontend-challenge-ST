import React from "react";
import iconFamily from "../../assets/gl_family.png";
import line from "../../assets/line_summary.png";
import './SummaryCard.scss'

export default function SummaryCard() {
  return (
    <div className="summary-card">
      <div className="summary-card__user">
        <div className="user__title">PRECIOS CALCULADOS PARA:</div>
        <div className="user__name">
          <img src={iconFamily} alt="" />
          <div className="name">Rocio Miranda</div>
        </div>
      </div>
      <img className="line" src={line} alt="" />
      <div className="summary-card__user-info">
        <div className="user-info__title">Responsable de pago</div>
        <div className="user-info__document">DNI:44488888</div>
        <div className="user-info__phone">Celular:51987654321</div>
      </div>
      <div className="summary-card__user-plan">
        <div className="user-plan__title">Plan elegido</div>
        <div className="user-plan__plan">Plan en Casa y Clínica</div>
        <div className="user-plan__price">Costo del Plan: $99 al mes</div>
      </div>
    </div>
  );
}
