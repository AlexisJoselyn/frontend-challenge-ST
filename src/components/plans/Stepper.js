import React from "react";
import line from "../../assets/line.svg";
import step1 from "../../assets/atomo_stepper_1.svg";
import step2 from "../../assets/atomo_stepper_2.svg";
import "./Stepper.scss";

export default function Stepper() {
  return (
    <div className="container">
      <div className="container__stepper">
        <div className="stepper__first">
          <img src={step1} alt="" />
          <p>Planes y coberturas</p>
        </div>
        <div className="stepper__line">
          <img src={line} alt="" />
        </div>
        <div className="stepper__second">
          <img src={step2} alt="" />
          <p>Resumen</p>
        </div>
      </div>
    </div>
  );
}
