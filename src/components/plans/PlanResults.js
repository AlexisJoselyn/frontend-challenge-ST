import React, { useEffect, useState } from "react";
import CardResult from './CardResult'
import iconHome from "../../assets/IcHomeLight.png";
import iconClinic from "../../assets/IcHospitalLight.png";
import './PlanResults.scss'


export default function PlanResults({age, selectedPlan}) {
    const [plans, setPlans] = useState([]);
    const discountRate = 0.05; 

  useEffect(() => {
    fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredPlans = data.list.filter(plan => plan.age >= age);
        
        const plansWithDiscount = filteredPlans.map(plan => {
          const oldPrice = plan.price;
          const price = selectedPlan === "Para alguien más"
            ? oldPrice - (oldPrice * discountRate)
            : oldPrice

          return { ...plan, oldPrice, price };
        });
        
        setPlans(plansWithDiscount);
      })
      .catch((err) => console.error("Error fetching ", err));
  }, [age, selectedPlan]);

  return (
<div className="plans__results">
        {plans.map((plan, index) => (
          <CardResult
            key={index}
            index={index}
            title={plan.name}
            oldPrice={plan.oldPrice}
            price={plan.price}
            logo={plan.name.includes("Clínica") ? iconClinic : iconHome}
            bullets={plan.description}
          ></CardResult>
        ))}
      </div>
  )
}
