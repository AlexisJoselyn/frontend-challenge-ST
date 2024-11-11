import React, { useState, useContext} from "react";
import { UserContext } from "../../context/UserContext";
import { calculateAge } from "../../helpers/helpers";
import "./PlanSelector.scss";
import PlanCard from "./PlanCard";
import iconMe from "../../assets/IcProtectionLight.png";
import iconSomeone from "../../assets/IcAddUserLight.png";
import PlanResults from "./PlanResults";

export default function PlanSelector() {
  const { userData } = useContext(UserContext);
  const [selectedPlan, setSelectedPlan] = useState(null); 
  
  const age = calculateAge(userData.birthDay)

  const handleOptionSelect = (plan) => {
  
    setSelectedPlan(plan);
  };

  return (
    <div className="plan-selector">
      <div className="plan-selector__info">
        <h2 className="info__name">
          {userData.name} ¿Para quién deseas cotizar?
        </h2>
        <p className="info__text">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <div className="plan-selector__cards">
        <PlanCard
          icon={iconMe}
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          onClick={handleOptionSelect}
          isSelected={selectedPlan === "Para mí"}
        ></PlanCard>
        <PlanCard
          icon={iconSomeone}
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          onClick={handleOptionSelect}
          isSelected={selectedPlan === "Para alguien más"}
        ></PlanCard>
      </div>
      {selectedPlan && <PlanResults age={age} selectedPlan={selectedPlan}/>}
    </div>
  );
}
