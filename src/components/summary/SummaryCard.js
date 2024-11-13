import React, { useContext } from "react";
import iconFamily from "../../assets/gl_family.png";
import line from "../../assets/line_summary.png";
import { UserContext } from "../../context/UserContext";
import './SummaryCard.scss'

export default function SummaryCard() {

  const {userData} = useContext(UserContext)

  return (
    <div className="summary-card">
      <div className="summary-card__user">
        <div className="user__title">PRECIOS CALCULADOS PARA:</div>
        <div className="user__name">
          <img src={iconFamily} alt="" />
          <div className="name">{userData.name}</div>
        </div>
      </div>
      <img className="line" src={line} alt="" />
      <div className="summary-card__user-info">
        <div className="user-info__title">Responsable de pago</div>
        <div className="user-info__document">{(userData.documentType).toUpperCase()}: {userData.documentNumber}</div>
        <div className="user-info__phone">Celular: {userData.cellphone}</div>
      </div>
      <div className="summary-card__user-plan">
        <div className="user-plan__title">Plan elegido</div>
        <div className="user-plan__plan">{userData.selectedPlan}</div>
        <div className="user-plan__price">Costo del Plan: ${userData.planPrice} al mes</div>
      </div>
    </div>
  );
}
