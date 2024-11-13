import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./BtnSeleccionar.scss";

export default function BtnSeleccionar({ plan }) {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      selectedPlan: plan.title,
      planPrice: plan.price,
    }));

    navigate("/resumen");
  };
  return (
    <button className="seleccionar__btn" onClick={handleClick}>
      Seleccionar Plan
    </button>
  );
}
