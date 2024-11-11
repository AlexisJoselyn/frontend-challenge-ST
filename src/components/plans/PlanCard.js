import React from "react";
import "./PlanCard.scss";
import radioButton from "../../assets/atoms_radio_button_web.png";

export default function PlanCard({ icon, title, description, onClick, isSelected }) {
  return (
    <div className={`plan-card ${isSelected ? 'with-border' : ''}`} onClick={() => onClick(title)}>
      <label className="plan-card__label">
        <input className="plan-card__option" type="radio" name="plan" />
        <span className="plan-card__custom-radio"></span>
      </label>
      <div className="plan-card__info">
        <img src={icon} alt="" />
        <p className="info__title">{title}</p>
        <p className="info__description">{description}</p>
      </div>
    </div>
  );
}
