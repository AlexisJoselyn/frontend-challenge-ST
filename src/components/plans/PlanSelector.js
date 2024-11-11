import React from "react";
import "./PlanSelector.scss";
import PlanCard from "./PlanCard";
import iconMe from "../../assets/IcProtectionLight.png";
import iconSomeone from "../../assets/IcAddUserLight.png";

export default function PlanSelector() {
  return (
    <div className="plan-selector">
      <div className="plan-selector__info">
        <h2 className="plan-selector__name">
          Rocío, ¿Para quién deseas cotizar?
        </h2>
        <p className="plan-selector__text">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <div className="plan-selector__cards">
        <PlanCard
          icon={iconMe}
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        ></PlanCard>
        <PlanCard
          icon={iconSomeone}
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
        ></PlanCard>
      </div>
    </div>
  );
}
