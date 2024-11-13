import React from "react";
import Stepper from "../common/Stepper";
import BtnVolver from "../common/BtnVolver";
import SummaryInfo from "./SummaryInfo";
import step1 from "../../assets/atomo_stepper_1_grey.svg";
import step2 from "../../assets/atomo_stepper_2_blue.svg";
import "./Summary.scss";

export const Summary = () => {
  return (
    <div className="summary">
      <Stepper step1={step1} step2={step2}></Stepper>
      <BtnVolver path="/planes"></BtnVolver>
      <SummaryInfo></SummaryInfo>
    </div>
  );
};
