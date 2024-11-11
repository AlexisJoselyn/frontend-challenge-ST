import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import BtnVolver from "./BtnVolver";
import PlanSelector from "./PlanSelector";
import PlanResult from "./PlanResult";
import iconHome from "../../assets/IcHomeLight.png";
import iconClinic from "../../assets/IcHospitalLight.png";
import "./Plans.scss";

export const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.list);
        setPlans(data.list);
      })
      .catch((err) => console.error("Error fetching ", err));
  }, []);
  return (
    <div className="plans">
      <Stepper></Stepper>
      <BtnVolver></BtnVolver>
      <PlanSelector></PlanSelector>
      <div className="plans__results">
        {plans.map((plan, index) => (
          <PlanResult
            key={index}
            index={index}
            title={plan.name}
            oldPrice="0"
            price={plan.price}
            logo={plan.name.includes("Clínica") ? iconClinic : iconHome}
            bullets={plan.description}
          ></PlanResult>
        ))}
      </div>
    </div>
  );
};
