import Stepper from "../common/Stepper";
import BtnVolver from "../common/BtnVolver";
import PlanSelector from "./PlanSelector";
import step1 from "../../assets/atomo_stepper_1.svg"
import step2 from "../../assets/atomo_stepper_2.svg";
import "./Plans.scss";

export const Plans = () => {
  return (
    <div className="plans">
      <Stepper step1={step1} step2={step2}></Stepper>
      <BtnVolver path="/"></BtnVolver>
      <PlanSelector></PlanSelector>
    </div>
  );
};
